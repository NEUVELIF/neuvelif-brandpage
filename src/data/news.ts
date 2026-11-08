// 언론 보도 — 새 기사가 나오면 맨 위에 한 줄 추가하면 됩니다.
export interface Press { date: string; outlet: string; title: string; url: string }

export const PRESS: Press[] = [
  { date: '2026.09.07', outlet: '이데일리', title: "뉴베리프, '말차 디퍼핑 클렌징 밀크' 피부과·약국·산부인과 입점", url: 'https://www.edaily.co.kr/News/Read?newsId=02551846645577824&mediaCodeNo=257' },
  { date: '2026.06.08', outlet: '데이터넷', title: "더마코스메틱 '뉴베리프', 피부시술 플랫폼 '여신티켓'과 마케팅 협력", url: 'https://www.datanet.co.kr/news/articleView.html?idxno=212180' },
  { date: '2026.05.07', outlet: '이데일리', title: '뉴베리프, 산부인과 입점과 청담 메이크업샵 채택으로 더마 케어 신뢰도 상승', url: 'https://www.edaily.co.kr/News/Read?newsId=06999526645446624&mediaCodeNo=257' },
  { date: '2026.01.30', outlet: '마이데일리', title: '뉴베리프, 네이버 패션뷰티에 공식 입점', url: 'https://www.mydaily.co.kr/page/view/2026013009490418606' },
  { date: '2025.11.20', outlet: '마이데일리', title: "뉴베리프, 론칭 3개월 만에 '화해 어워드' 선크림 부문 1위", url: 'https://www.mydaily.co.kr/page/view/2025112015485021661' },
  { date: '2025.09.01', outlet: '더퍼블릭', title: '뉴베리프, 서울 강남권 피부과 전문 병원 공식 입점', url: 'https://www.thepublic.kr/news/articleView.html?idxno=275000' },
  { date: '2025.07.31', outlet: '라이브뉴스', title: '웰니스의 시작을 알리는 뉴베리프 첫 백합 리커버리 선크림 런칭', url: 'https://www.livesnews.com/news/article.html?no=52895' },
];
