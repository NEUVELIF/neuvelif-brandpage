// 공식 구매처 — 입점처가 늘거나 바뀌면 이 파일만 고치면 됩니다.
export type ProductKey = 'sunscreen' | 'cleansing';

// interface: '판매처 하나는 이런 칸들로 이루어진다'는 약속(틀)입니다.
// ? 가 붙은 칸은 없어도 됩니다.
export interface Store {
  name: string;
  country: 'kr' | 'jp';
  brandUrl?: string; // 브랜드 전체 페이지 (있을 때)
  products: Partial<Record<ProductKey, string>>; // { sunscreen: 주소, cleansing: 주소 } 모양. 둘 다 없어도 됨 // 제품별 상품 페이지
}

// 판매처 목록. 순서대로 화면에 보입니다. 새 판매처는 { ... }, 한 덩어리를 복사해 추가하세요.
export const STORES: Store[] = [
  {
    name: 'Naver Brand Store',
    country: 'kr',
    brandUrl: 'https://brand.naver.com/neuvelif',
    products: {
      sunscreen: 'https://brand.naver.com/neuvelif/products/12128211682',
      cleansing: 'https://brand.naver.com/neuvelif/products/13725384963',
    },
  },
  {
    name: 'Coupang',
    country: 'kr',
    products: {
      sunscreen: 'https://www.coupang.com/vp/products/8955509476?itemId=26199634891',
      cleansing: 'https://www.coupang.com/vp/products/9727563099?itemId=29109768912',
    },
  },
  {
    name: 'Gmarket',
    country: 'kr',
    brandUrl: 'https://www.gmarket.co.kr/n/brandshop/neuvelif',
    products: {
      sunscreen: 'https://item.gmarket.co.kr/Item?goodscode=4529847286',
      cleansing: 'https://item.gmarket.co.kr/Item?goodscode=4879033894',
    },
  },
  {
    name: 'Hwahae',
    country: 'kr',
    products: {
      sunscreen: 'https://www.hwahae.co.kr/goods/72543',
      cleansing: 'https://www.hwahae.co.kr/goods/79890',
    },
  },
  {
    name: 'KakaoTalk Store',
    country: 'kr',
    brandUrl: 'https://store.kakao.com/neuvelif',
    products: {},
  },
  {
    name: 'Qoo10 Japan',
    country: 'jp',
    products: {
      sunscreen: 'https://www.qoo10.jp/g/1185007855',
      cleansing: 'https://www.qoo10.jp/g/1219703829',
    },
  },
];

export const PRODUCT_LABEL: Record<ProductKey, string> = {
  sunscreen: 'Sunscreen',
  cleansing: 'Cleansing milk',
};
