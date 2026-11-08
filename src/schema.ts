// 검색엔진·AI가 읽는 구조화 데이터(schema.org JSON-LD) 모음
import { BRAND, COMPANY, SOCIAL } from './site';

const SITE = import.meta.env.SITE ?? 'https://neuvelif.github.io';
const BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');
const abs = (p: string, site: URL | string = SITE) => new URL(BASE + p, site).href;
const ORG_ID = abs('/#organization');
const PERSON_ID = abs('/brand/#founder');

export const org = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BRAND.name,
  alternateName: [BRAND.nameEn, 'Neuvelif'],
  legalName: COMPANY.name,
  url: abs('/'),
  logo: abs('/images/logo/neuvelif-wordmark.svg'),
  email: BRAND.email,
  slogan: BRAND.slogan,
  description: '피부 시술 전후 스킨케어에 집중하는 더마코스메틱 브랜드',
  founder: { '@id': PERSON_ID },
  sameAs: SOCIAL,
  address: { '@type': 'PostalAddress', addressCountry: 'KR', addressRegion: '경기도', addressLocality: '남양주시', streetAddress: '다산지금로 202' },
};

export const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '뉴베리프 NEUVELIF',
  url: abs('/'),
  inLanguage: 'ko-KR',
  publisher: { '@id': ORG_ID },
};

export const founder = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: COMPANY.ceo,
  alternateName: COMPANY.ceoEn,
  jobTitle: '대표',
  worksFor: { '@id': ORG_ID },
};

export const aboutPage = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: '뉴베리프 브랜드 이야기',
  url: abs('/brand/'),
  about: { '@id': ORG_ID },
  author: { '@id': PERSON_ID },
  inLanguage: 'ko-KR',
};

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
    inLanguage: 'ko-KR',
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

export function faqLd(items: [string, string][]) {
  if (!items.length) return [];
  return [{
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }];
}
