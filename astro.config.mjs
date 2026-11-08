import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// 임시 주소: https://neuvelif.github.io/neuvelif-brandpage/  (BASE_PATH=/neuvelif-brandpage)
// 정식 오픈: SITE_URL=https://neuvelif.com, BASE_PATH=/ , PUBLIC_STAGING=false
const SITE = process.env.SITE_URL || 'https://neuvelif.github.io';
const BASE = process.env.BASE_PATH || '/';

// 페이지 안의 "/brand/" 같은 주소 앞에 임시 주소의 폴더 이름을 자동으로 붙여 줍니다.
function baseRewrite() {
  return {
    name: 'base-rewrite',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const base = BASE.replace(/\/$/, '');
        if (!base) return;
        const fix = (u) => (u.startsWith('/') && !u.startsWith('//') && !u.startsWith(base + '/') ? base + u : u);
        const walk = async (d) => {
          for (const e of await readdir(d, { withFileTypes: true })) {
            const p = join(d, e.name);
            if (e.isDirectory()) await walk(p);
            else if (e.name.endsWith('.html')) {
              let s = await readFile(p, 'utf8');
              s = s.replace(/(\s(?:href|src)=")([^"]*)"/g, (_, a, u) => `${a}${fix(u)}"`);
              s = s.replace(/(\ssrcset=")([^"]*)"/g, (_, a, v) => a + v.split(',').map((part) => {
                const [u, ...rest] = part.trim().split(/\s+/);
                return [fix(u), ...rest].join(' ');
              }).join(', ') + '"');
              await writeFile(p, s);
            }
          }
        };
        await walk(fileURLToPath(dir));
      },
    },
  };
}

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap(), baseRewrite()],
});
