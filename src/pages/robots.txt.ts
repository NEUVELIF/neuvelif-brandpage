import type { APIRoute } from 'astro';
import { STAGING } from '../site';

// 임시 주소에서는 검색엔진이 수집하지 않도록 막고, 정식 오픈 때 엽니다.
export const GET: APIRoute = ({ site }) => {
  const body = STAGING
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
