"""Find translatable Korean text units in site source files."""
import re

HANGUL = re.compile(r'[가-힣ㄱ-ㆎ]')
INLINE = re.compile(r'</?(br|strong|b|em|i|sup|sub|small|wbr)\s*/?>', re.I)
SIMPLE_EXPR = re.compile(r'\{[A-Za-z_$][\w$.]*(\([^(){}]*\))?\}')


def _skip_string(s, i):
    q = s[i]
    j = i + 1
    while j < len(s):
        c = s[j]
        if c == '\\':
            j += 2
            continue
        if q == '`' and s.startswith('${', j):
            j = _match_brace(s, j + 1) + 1
            continue
        if c == q:
            return j + 1
        if q != '`' and c == '\n':
            return j
        j += 1
    return j


def _match_brace(s, i):
    """s[i] == '{' ; return index of matching '}'"""
    depth = 0
    j = i
    while j < len(s):
        c = s[j]
        if c in '"\'`':
            j = _skip_string(s, j)
            continue
        if s.startswith('//', j) and (j == 0 or s[j - 1] in ' \t\n({[,;'):
            k = s.find('\n', j)
            j = len(s) if k < 0 else k
            continue
        if s.startswith('/*', j):
            k = s.find('*/', j + 2)
            j = len(s) if k < 0 else k + 2
            continue
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                return j
        j += 1
    return len(s) - 1


def _trim(s, a, b):
    while a < b and s[a].isspace():
        a += 1
    while b > a and s[b - 1].isspace():
        b -= 1
    return a, b


def code_units(s, a, b, out):
    j = a
    while j < b:
        c = s[j]
        if c in '"\'`':
            k = _skip_string(s, j)
            inner_a, inner_b = j + 1, max(j + 1, k - 1)
            if HANGUL.search(s, inner_a, inner_b):
                out.append((inner_a, inner_b))
            j = k
            continue
        if s.startswith('//', j) and (j == 0 or s[j - 1] in ' \t\n({[,;'):
            k = s.find('\n', j)
            j = b if k < 0 else k
            continue
        if s.startswith('/*', j):
            k = s.find('*/', j + 2)
            j = b if k < 0 else k + 2
            continue
        if c == '<' and j + 1 < b and (s[j + 1].isalpha() or s[j + 1] == '/'):
            j = tag_units(s, j, b, out)
            continue
        if HANGUL.match(c):
            k = j
            while k > a and s[k - 1] not in '<>{}\n"\'`':
                k -= 1
            e = j
            while e < b and s[e] not in '<>{}\n"\'`':
                e += 1
            ta, tb = _trim(s, k, e)
            if not out or out[-1] != (ta, tb):
                out.append((ta, tb))
            j = e
            continue
        j += 1


def tag_units(s, j, b, out):
    """s[j] == '<'. parse a tag, collecting Korean attribute values. return index after '>'"""
    k = j + 1
    while k < b and s[k] != '>':
        c = s[k]
        if c in '"\'':
            e = _skip_string(s, k)
            if HANGUL.search(s, k + 1, e - 1):
                out.append((k + 1, e - 1))
            k = e
            continue
        if c == '{':
            e = _match_brace(s, k)
            code_units(s, k + 1, e, out)
            k = e + 1
            continue
        k += 1
    return k + 1


def markup_units(s, a, b, out):
    j = a
    while j < b:
        if s.startswith('<!--', j):
            k = s.find('-->', j)
            j = b if k < 0 else k + 3
            continue
        m = re.match(r'<(script|style)\b[^>]*>', s[j:j + 200])
        if m:
            end_tag = '</' + m.group(1)
            k = s.find(end_tag, j)
            k = b if k < 0 else k
            if m.group(1) == 'script':
                code_units(s, j + m.end(), k, out)
            j = s.find('>', k) + 1 if k < b else b
            continue
        c = s[j]
        if c == '<' and j + 1 < b and (s[j + 1].isalpha() or s[j + 1] == '/'):
            if INLINE.match(s, j):
                j = INLINE.match(s, j).end()
                continue
            j = tag_units(s, j, b, out)
            continue
        if c == '{':
            if s.startswith('{/*', j):
                k = s.find('*/}', j)
                j = b if k < 0 else k + 3
                continue
            se = SIMPLE_EXPR.match(s, j)
            if se:
                j = se.end()
                continue
            e = _match_brace(s, j)
            code_units(s, j + 1, e, out)
            j = e + 1
            continue
        # text run: extend across inline tags and simple expressions
        k = j
        while k < b:
            if s[k] == '<':
                im = INLINE.match(s, k)
                if im:
                    k = im.end()
                    continue
                break
            if s[k] == '{':
                se = SIMPLE_EXPR.match(s, k)
                if se:
                    k = se.end()
                    continue
                break
            k += 1
        if k == j:
            j += 1
            continue
        if HANGUL.search(s, j, k):
            ta, tb = _trim(s, j, k)
            out.append((ta, tb))
        j = k


def find_units(path, s):
    out = []
    if path.endswith('.astro'):
        m = re.match(r'---\n(.*?)\n---\n', s, re.S)
        if m:
            code_units(s, m.start(1), m.end(1), out)
            markup_units(s, m.end(), len(s), out)
        else:
            markup_units(s, 0, len(s), out)
    else:
        code_units(s, 0, len(s), out)
    # drop units that lie inside comments or are not Korean after trimming
    res = []
    for a, b in sorted(set(out)):
        if HANGUL.search(s, a, b):
            if res and a < res[-1][1]:
                continue
            res.append((a, b))
    return res
