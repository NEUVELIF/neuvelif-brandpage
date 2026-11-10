"""Make English (/en/) and Japanese (/ja/) copies of the Korean site.

python3 i18n/build.py dump   -> list Korean text units that still need translation
python3 i18n/build.py        -> write src/pages/{en,ja}/ and src/i18n/{en,ja}/
"""
import glob, json, os, re, shutil, sys
sys.path.insert(0, os.path.dirname(__file__))
from units import find_units

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LANGS = ['en', 'ja']
ROUTE = re.compile(r'''(['"`])/(?=(?:brand|products|guide|research|news|faq|contact|privacy)(?:[/#?'"`]|$)|['"`?])''')


def sources():
    out = []
    for f in sorted(glob.glob(os.path.join(ROOT, 'src/**/*'), recursive=True)):
        rel = os.path.relpath(f, ROOT)
        if not os.path.isfile(f) or not rel.endswith(('.astro', '.ts', '.json')):
            continue
        if rel.startswith(('src/pages/en/', 'src/pages/ja/', 'src/i18n/', 'src/scripts/')):
            continue
        if rel in ('src/pages/404.astro', 'src/pages/robots.txt.ts', 'src/pages/llms.txt.ts'):
            continue
        out.append(rel)
    return out


def target(rel, lang):
    if rel.startswith('src/pages/'):
        return 'src/pages/' + lang + '/' + rel[len('src/pages/'):]
    return 'src/i18n/' + lang + '/' + rel[len('src/'):]


def resolve(from_rel, spec):
    base = os.path.normpath(os.path.join(os.path.dirname(from_rel), spec))
    for cand in (base, base + '.ts', base + '.astro', base + '.json', base + '/index.ts'):
        if os.path.isfile(os.path.join(ROOT, cand)):
            return cand, cand[len(base):]
    return base, ''


def load(lang):
    p = os.path.join(ROOT, 'i18n', lang + '.json')
    return json.load(open(p, encoding='utf-8')) if os.path.exists(p) else {}


def localize(rel, s, lang, tr, srcset, missing):
    units = find_units(rel, s)
    parts, last = [], 0
    for a, b in units:
        ko = s[a:b]
        t = tr.get(ko)
        if t is None:
            missing.setdefault(ko, rel)
            t = ko
        if rel.endswith('.json'):
            t = json.dumps(t, ensure_ascii=False)[1:-1]
        elif a > 0 and b < len(s) and s[a - 1] == s[b] and s[b] in '\'`':
            q = s[b]
            t = t.replace('\\', '\\\\').replace(q, '\\' + q)
        parts.append(s[last:a]); parts.append(t); last = b
    parts.append(s[last:])
    s = ''.join(parts)
    # imports
    out_rel = target(rel, lang)
    def fix(m):
        spec = m.group(2)
        if not spec.startswith('.'):
            return m.group(0)
        tgt, ext = resolve(rel, spec)
        tgt_out = target(tgt, lang) if tgt in srcset else tgt
        if ext:
            tgt_out = tgt_out[:len(tgt_out) - len(ext)] if tgt_out.endswith(ext) else tgt_out
        new = os.path.relpath(tgt_out, os.path.dirname(out_rel))
        if not new.startswith('.'):
            new = './' + new
        return m.group(1) + new + m.group(3)
    s = re.sub(r'''((?:from|import)\s+['"])(\.{1,2}/[^'"]+)(['"])''', fix, s)
    # internal links
    s = ROUTE.sub(lambda m: m.group(1) + '/' + lang + '/', s)
    s = s.replace("'/" + lang + "/#organization'", "'/#organization'")
    # language specifics
    if lang == 'ja':
        s = s.replace("'Noto Sans KR'", "'Noto Sans JP'")
        jp = '぀-ヿ一-鿿（）'
        s = re.sub(r'\} (?=[' + jp + '])', '}', s)
        s = re.sub(r'(?<=[' + jp + '、。]) (?=<a\\b)', '', s)
    s = s.replace("inLanguage: 'ko-KR'", "inLanguage: '" + ('en' if lang == 'en' else 'ja-JP') + "'")
    return s


def main():
    srcs = sources()
    srcset = set(srcs)
    if len(sys.argv) > 1 and sys.argv[1] == 'dump':
        lang = sys.argv[2] if len(sys.argv) > 2 else 'en'
        tr = load(lang)
        seen = set()
        n = 0
        for rel in srcs:
            s = open(os.path.join(ROOT, rel), encoding='utf-8').read()
            for a, b in find_units(rel, s):
                ko = s[a:b]
                if ko in tr or ko in seen:
                    continue
                seen.add(ko)
                n += 1
                print(f'## {rel}\t' + ko.replace('\n', '\\n'))
        print(f'# {n} untranslated', file=sys.stderr)
        return
    for lang in LANGS:
        tr = load(lang)
        missing = {}
        for d in ('src/pages/' + lang, 'src/i18n/' + lang):
            shutil.rmtree(os.path.join(ROOT, d), ignore_errors=True)
        for rel in srcs:
            s = open(os.path.join(ROOT, rel), encoding='utf-8').read()
            out = localize(rel, s, lang, tr, srcset, missing)
            p = os.path.join(ROOT, target(rel, lang))
            os.makedirs(os.path.dirname(p), exist_ok=True)
            open(p, 'w', encoding='utf-8').write(out)
        print(lang, 'files', len(srcs), 'missing', len(missing))


if __name__ == '__main__':
    main()
