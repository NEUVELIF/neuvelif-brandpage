import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 임시 주소(neuvelif.github.io)에서 미리 보는 동안에는 SITE_URL을 비워 둡니다.
// 정식 오픈 때 SITE_URL=https://neuvelif.com, PUBLIC_STAGING=false 로 바꿉니다.
const SITE = process.env.SITE_URL || 'https://neuvelif.github.io';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
