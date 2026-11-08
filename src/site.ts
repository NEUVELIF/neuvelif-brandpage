// 사이트 전체에서 쓰는 기본 정보
// 여러 파일에서 같은 값을 쓰기 때문에 한곳에 모아 두었습니다.
// export 는 '다른 파일에서 가져다 쓸 수 있게 내보낸다'는 뜻입니다. (가져올 때는 import)
// import.meta.env.○○ 는 Astro가 읽는 환경 변수입니다.
// PUBLIC_STAGING 이 'false'가 아니면 임시 주소 모드로 보고, 검색엔진 수집을 막습니다.
export const STAGING = import.meta.env.PUBLIC_STAGING !== 'false';

export const BRAND = {
  name: '뉴베리프',
  nameEn: 'NEUVELIF',
  slogan: '나를 아끼는 마음은 피부에서 시작된다',
  email: 'contact@neuvelif.com',
};

export const COMPANY = {
  name: '리더스어소시에이츠 주식회사',
  nameEn: 'Leaders Associates Co., Ltd.',
  ceo: '이재훈',
  ceoEn: 'Jaehoon Lee',
  bizNo: '803-88-02443',
  mailOrderNo: '2024-다산-0589',
  address: '경기도 남양주시 다산지금로 202, 제4층 제비에프04-0053호 (다산동, 현대테라타워디아이엠씨)',
};

export const SOCIAL = [
  'https://www.instagram.com/neuvelif/',
  'https://www.youtube.com/@neuvelif',
  'https://www.tiktok.com/@neuvelif',
  'https://x.com/neuvelif',
  'https://brand.naver.com/neuvelif',
];

// 페이지 주소 모음. 주소를 바꿀 일이 생기면 여기만 고치면 됩니다.
export const PATHS = {
  home: '/',
  brand: '/brand/',
  sunscreen: '/products/backhap-recovery-sunscreen/',
  cleansing: '/products/matcha-depuffing-cleansing-milk/',
  guideLaser: '/guide/laser-ipl-lifting/',
  guide: '/guide/',
  products: '/products/',
  research: '/research/',
  news: '/news/',
  faq: '/faq/',
  contact: '/contact/',
  privacy: '/privacy/',
};
