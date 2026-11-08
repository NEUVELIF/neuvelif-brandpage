// ────────────────────────────────────────────────────────────────
// Astro 설정 파일
// Astro는 src/ 폴더의 .astro 파일을 읽어 완성된 HTML 파일(dist/ 폴더)로 바꿔 주는 도구입니다.
// 'npm run build'를 실행하면 이 설정대로 사이트 전체가 만들어집니다.
// ────────────────────────────────────────────────────────────────
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// 임시 주소: https://neuvelif.github.io/neuvelif-brandpage/  (BASE_PATH=/neuvelif-brandpage)
// 정식 오픈: SITE_URL=https://neuvelif.com, BASE_PATH=/ , PUBLIC_STAGING=false
// process.env.○○ 는 '환경 변수'입니다. 배포할 때(.github/workflows/deploy.yml) 넣어 준 값을 읽습니다.
// 값이 없으면 || 뒤의 기본값을 씁니다.
const SITE = process.env.SITE_URL || 'https://neuvelif.github.io';
const BASE = process.env.BASE_PATH || '/';

// 페이지 안의 "/brand/" 같은 주소 앞에 임시 주소의 폴더 이름을 자동으로 붙여 줍니다.
// Astro의 '통합 기능(integration)'을 직접 만든 것입니다.
// 사이트를 다 만든 뒤(astro:build:done) 모든 HTML 파일을 열어 주소 앞에 폴더 이름을 붙입니다.
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
  site: SITE,                    // 사이트의 기본 주소 (검색용 정보·사이트맵에 쓰임)
  base: BASE,                    // 사이트가 놓이는 폴더 (임시 주소에서는 /neuvelif-brandpage)
  trailingSlash: 'always',       // 주소 끝에 항상 / 를 붙임 (예: /brand/)
  build: { format: 'directory' }, // /brand/ 주소를 brand/index.html 파일로 만듦
  integrations: [sitemap(), baseRewrite()], // sitemap(): 검색엔진용 사이트 지도 자동 생성
});
