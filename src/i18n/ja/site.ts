// 사이트 전체에서 쓰는 기본 정보
// 여러 파일에서 같은 값을 쓰기 때문에 한곳에 모아 두었습니다.
// export 는 '다른 파일에서 가져다 쓸 수 있게 내보낸다'는 뜻입니다. (가져올 때는 import)
// import.meta.env.○○ 는 Astro가 읽는 환경 변수입니다.
// PUBLIC_STAGING 이 'false'가 아니면 임시 주소 모드로 보고, 검색엔진 수집을 막습니다.
export const STAGING = import.meta.env.PUBLIC_STAGING !== 'false';

export const BRAND = {
  name: 'NEUVELIF',
  nameEn: 'NEUVELIF',
  slogan: '自分を大切にする心は、肌から始まる',
  email: 'contact@neuvelif.com',
};

export const COMPANY = {
  name: 'リーダースアソシエイツ株式会社',
  nameEn: 'Leaders Associates Co., Ltd.',
  ceo: 'Jaehoon Lee',
  ceoEn: 'Jaehoon Lee',
  bizNo: '803-88-02443',
  mailOrderNo: '2024-Dasan-0589',
  address: 'Unit BF04-0053, 4F, 202 Dasanjigeum-ro, Namyangju-si, Gyeonggi-do, Republic of Korea (Dasan-dong, Hyundai Terra Tower DIMC)',
};

// 검색엔진 소유 확인 코드 (빙 웹마스터 도구, 네이버 서치어드바이저). 웹페이지에 공개로 넣는 값입니다.
export const VERIFY = {
  bing: '951ADADF004CEA8179B8AB7F54C3DA50',
  naver: '6f6392f3760c8d519ec43c7f1c2ab03f74009e28',
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
  home: '/ja/',
  brand: '/ja/brand/',
  sunscreen: '/ja/products/backhap-recovery-sunscreen/',
  cleansing: '/ja/products/matcha-depuffing-cleansing-milk/',
  guideLaser: '/ja/guide/laser-ipl-lifting/',
  guide: '/ja/guide/',
  products: '/ja/products/',
  research: '/ja/research/',
  news: '/ja/news/',
  faq: '/ja/faq/',
  contact: '/ja/contact/',
  privacy: '/ja/privacy/',
};
