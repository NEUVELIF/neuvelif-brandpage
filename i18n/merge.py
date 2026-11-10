"""Combine i18n/tr/{lang}_*.tsv into i18n/{lang}.json using i18n/_units.txt as the id list."""
import glob, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))


def curly(t):
    out, open_ = [], True
    for c in t:
        if c == '"':
            out.append('“' if open_ else '”')
            open_ = not open_
        else:
            out.append(c)
    return ''.join(out)


def main():
    keys = []
    for line in open(os.path.join(HERE, '_units.txt'), encoding='utf-8'):
        line = line.rstrip('\n')
        if not line.startswith('## '):
            continue
        ko = line.split('\t', 1)[1].replace('\\n', '\n')
        keys.append(ko)
    ok = True
    for lang in ('en', 'ja'):
        tr = {}
        for f in sorted(glob.glob(os.path.join(HERE, 'tr', lang + '_*.tsv'))):
            for n, line in enumerate(open(f, encoding='utf-8'), 1):
                line = line.rstrip('\n')
                if not line:
                    continue
                i, _, t = line.partition('\t')
                i = int(i)
                if i in tr:
                    print(f'{lang}: duplicate id {i} ({os.path.basename(f)}:{n})')
                    ok = False
                tr[i] = curly(t)
        want = set(range(1, len(keys) + 1))
        miss = sorted(want - set(tr))
        extra = sorted(set(tr) - want)
        if miss or extra:
            print(f'{lang}: missing {miss[:20]} extra {extra[:20]}')
            ok = False
        out = {keys[i - 1]: tr[i] for i in sorted(tr) if i in want}
        json.dump(out, open(os.path.join(HERE, lang + '.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
        print(lang, len(out), 'entries')
    sys.exit(0 if ok else 1)


if __name__ == '__main__':
    main()
