// 공식 구매처 — 입점처가 늘거나 바뀌면 이 파일만 고치면 됩니다.
export type ProductKey = 'sunscreen' | 'cleansing';

export interface Store {
  name: string;
  country: 'kr' | 'jp';
  brandUrl?: string; // 브랜드 전체 페이지 (있을 때)
  products: Partial<Record<ProductKey, string>>; // 제품별 상품 페이지
}

export const STORES: Store[] = [
  {
    name: '네이버 브랜드스토어',
    country: 'kr',
    brandUrl: 'https://brand.naver.com/neuvelif',
    products: {
      sunscreen: 'https://brand.naver.com/neuvelif/products/12128211682',
      cleansing: 'https://brand.naver.com/neuvelif/products/13725384963',
    },
  },
  {
    name: '쿠팡',
    country: 'kr',
    products: {
      sunscreen: 'https://www.coupang.com/vp/products/8955509476?itemId=26199634891',
      cleansing: 'https://www.coupang.com/vp/products/9727563099?itemId=29109768912',
    },
  },
  {
    name: 'G마켓',
    country: 'kr',
    brandUrl: 'https://www.gmarket.co.kr/n/brandshop/neuvelif',
    products: {
      sunscreen: 'https://item.gmarket.co.kr/Item?goodscode=4529847286',
      cleansing: 'https://item.gmarket.co.kr/Item?goodscode=4879033894',
    },
  },
  {
    name: '화해',
    country: 'kr',
    products: {
      sunscreen: 'https://www.hwahae.co.kr/goods/72543',
      cleansing: 'https://www.hwahae.co.kr/goods/79890',
    },
  },
  {
    name: '카카오톡 스토어',
    country: 'kr',
    brandUrl: 'https://store.kakao.com/neuvelif',
    products: {},
  },
  {
    name: '큐텐 재팬 (Qoo10)',
    country: 'jp',
    products: {
      sunscreen: 'https://www.qoo10.jp/g/1185007855',
      cleansing: 'https://www.qoo10.jp/g/1219703829',
    },
  },
];

export const PRODUCT_LABEL: Record<ProductKey, string> = {
  sunscreen: '선크림',
  cleansing: '클렌징 밀크',
};
