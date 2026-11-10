// 검색엔진·AI가 읽는 구조화 데이터(schema.org JSON-LD) 모음
// schema.org 는 구글 등이 함께 정한 '정보 이름표' 규칙입니다.
// 예: '@type': 'Organization' = 이 정보는 회사에 대한 것, 'Product' = 제품에 대한 것
// 각 페이지는 필요한 것만 골라 Base 틀의 jsonLd 로 넘깁니다.
import { BRAND, COMPANY, SOCIAL } from './site';

const SITE = import.meta.env.SITE ?? 'https://neuvelif.github.io';
const BASE = (import.meta.env.BASE_URL ?? '/en/').replace(/\/$/, '');
const abs = (p: string, site: URL | string = SITE) => new URL(BASE + p, site).href;
// @id: 같은 대상을 여러 곳에서 가리킬 때 쓰는 고유 번호표 (회사·대표를 서로 연결)
const ORG_ID = abs('/#organization');
const PERSON_ID = abs('/en/brand/#founder');

export const org = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BRAND.name,
  alternateName: [BRAND.nameEn, 'Neuvelif'],
  legalName: COMPANY.name,
  url: abs('/en/'),
  logo: abs('/images/logo/neuvelif-wordmark.svg'),
  email: BRAND.email,
  slogan: BRAND.slogan,
  description: 'A dermocosmetic brand focused on skincare before and after skin procedures',
  founder: { '@id': PERSON_ID },
  sameAs: SOCIAL,
  address: { '@type': 'PostalAddress', addressCountry: 'KR', addressRegion: 'Gyeonggi-do', addressLocality: 'Namyangju-si', streetAddress: '202 Dasanjigeum-ro' },
};

export const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NEUVELIF',
  url: abs('/en/'),
  inLanguage: 'en',
  publisher: { '@id': ORG_ID },
};

export const founder = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: COMPANY.ceo,
  alternateName: COMPANY.ceoEn,
  jobTitle: 'CEO',
  worksFor: { '@id': ORG_ID },
};

export const aboutPage = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'NEUVELIF Brand Story',
  url: abs('/en/brand/'),
  about: { '@id': ORG_ID },
  author: { '@id': PERSON_ID },
  inLanguage: 'en',
};

// breadcrumbs: '홈 › 시술별 가이드 › 여드름 PDT' 같은 현재 위치 정보
export function breadcrumbs(site: URL, items: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path, site) })),
  };
}

export function productLd(site: URL, p: { name: string; alt: string; img: string; desc: string; award: string; size: string; cat: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    alternateName: p.alt,
    image: abs(p.img, site),
    description: p.desc,
    category: p.cat,
    brand: { '@type': 'Brand', name: BRAND.name, alternateName: BRAND.nameEn },
    manufacturer: { '@id': ORG_ID },
    size: p.size,
    ...(p.award ? { award: p.award } : {}),
  };
}

export function articleLd(site: URL, a: { headline: string; description: string; path: string; modified: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.headline,
    description: a.description,
    url: abs(a.path, site),
    dateModified: a.modified,
    inLanguage: 'en',
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

// faqLd: 질문과 답 목록을 FAQ 이름표로 바꿉니다. 질문이 없으면 빈 목록을 돌려줍니다.
export function faqLd(items: [string, string][]) {
  if (!items.length) return [];
  return [{
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }];
}
