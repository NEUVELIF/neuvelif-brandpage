// llms.txt = ChatGPT·Claude·Perplexity 같은 AI가 사이트를 빠르게 이해하도록 돕는 요약 안내 파일
// 제품·가이드·시험 자료에서 자동으로 만들어지므로, 자료를 고치면 이 파일도 함께 바뀝니다.
import type { APIRoute } from 'astro';
import { BRAND, COMPANY, PATHS } from '../site';
import { GUIDES, guideHref } from '../data/guides';
import { TESTS } from '../data/research';
import { STORES, PRODUCT_LABEL } from '../data/stores';

const strip = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export const GET: APIRoute = ({ site }) => {
  const url = (p: string) => new URL(p, site).href;
  const link = (title: string, p: string, desc: string) => `- [${title}](${url(p)}): ${desc}`;
  const test = (t: (typeof TESTS)[number]) => {
    const r = t.results ? t.results.map(([k, v]) => `${k} ${v}`).join(', ') : `${t.result} — ${t.detail}`;
    return `- ${PRODUCT_LABEL[t.product]} · ${t.name}: ${r} (${t.org}, ${t.period}, ${t.subjects}, ${t.method})`;
  };
  const stores = STORES.filter((s) => s.country === 'kr').map((s) => s.name).join(', ');

  const body = [
    `# ${BRAND.name} ${BRAND.nameEn}`,
    '',
    `> ${BRAND.name}(${BRAND.nameEn})는 레이저·리프팅·주사 등 피부 시술 전후에 쓰는 더마 스킨케어 브랜드입니다. 백합 리커버리 선크림(SPF50+ PA++++, 75mL)과 말차 디퍼핑 클렌징 밀크(300mL)를 만들고, 시술 종류별로 선크림과 세안을 언제부터 어떻게 하면 좋은지 정리한 가이드와 인체적용시험 결과를 시험 조건과 함께 공개합니다.`,
    '',
    `- 운영사: ${COMPANY.name} (${COMPANY.nameEn}), 대표 ${COMPANY.ceo}`,
    `- 슬로건: ${BRAND.slogan}`,
    `- 문의: ${BRAND.email}`,
    `- 이 사이트에서는 제품을 판매하지 않습니다. 국내 구매처: ${stores}`,
    '- 시술 뒤 관리는 항상 시술한 병원의 안내가 우선입니다. 이 사이트의 가이드는 일반적인 안내이며 진료를 대신하지 않습니다.',
    '',
    '## 제품',
    '',
    link('백합 리커버리 선크림', PATHS.sunscreen, '자외선 차단·미백·주름개선 3중 기능성 유기자차 선크림, SPF50+ PA++++, 75mL. 2025 하반기 화해 어워드 선케어 부문(선크림/로션) 진정 카테고리 1위.'),
    link('말차 디퍼핑 클렌징 밀크', PATHS.cleansing, '거품 없이 마른 얼굴에 바로 펴 바르고 헹구는 300mL 밀크 클렌저.'),
    link('제품 전체', PATHS.products, '두 제품의 특징과 구매처.'),
    '',
    '## 시술별 선크림·세안 가이드',
    '',
    link('시술별 가이드 모음', PATHS.guide, `${GUIDES.length}개 시술 그룹별 선크림·세안 시작 시점 요약.`),
    ...GUIDES.map((g) => link(`${g.label} 후 선크림·세안`, guideHref(g.slug), strip(g.lead))),
    '',
    '## 시험 결과 (기관·기간·대상·방법)',
    '',
    link('임상 연구 페이지', PATHS.research, '아래 시험의 자세한 조건과 해석.'),
    ...TESTS.map(test),
    '',
    '## 브랜드와 소식',
    '',
    link('브랜드 이야기', PATHS.brand, '뉴베리프를 시작한 이유, 브랜드 철학과 원칙.'),
    link('소식', PATHS.news, '수상 소식과 언론 보도.'),
    link('자주 묻는 질문', PATHS.faq, '시술 후 선크림·세안 시점, 제품 성분·사용법·사용기한, 구매와 문의.'),
    link('문의', PATHS.contact, `이메일 ${BRAND.email}`),
    '',
    '## Other languages',
    '',
    link('English', '/en/', 'English version of this site.'),
    link('日本語', '/ja/', 'Japanese version of this site.'),
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
