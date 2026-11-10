// 언론 보도 — 새 기사가 나오면 맨 위에 한 줄 추가하면 됩니다.
// 기사 하나 = 날짜, 언론사, 제목, 주소
export interface Press { date: string; outlet: string; title: string; url: string }

export const PRESS: Press[] = [
  { date: '2026.09.07', outlet: 'Edaily', title: "NEUVELIF's ‘Matcha Depuffing Cleansing Milk’ now stocked at dermatology clinics, pharmacies, and OB-GYN clinics", url: 'https://www.edaily.co.kr/News/Read?newsId=02551846645577824&mediaCodeNo=257' },
  { date: '2026.06.08', outlet: 'Datanet', title: "Dermocosmetic brand NEUVELIF partners with skin-procedure platform ‘Yeoshin Ticket’ on marketing", url: 'https://www.datanet.co.kr/news/articleView.html?idxno=212180' },
  { date: '2026.05.07', outlet: 'Edaily', title: 'NEUVELIF builds derma-care credibility with OB-GYN clinic placements and adoption by a Cheongdam makeup shop', url: 'https://www.edaily.co.kr/News/Read?newsId=06999526645446624&mediaCodeNo=257' },
  { date: '2026.01.30', outlet: 'MyDaily', title: 'NEUVELIF officially launches on Naver Fashion Beauty', url: 'https://www.mydaily.co.kr/page/view/2026013009490418606' },
  { date: '2025.11.20', outlet: 'MyDaily', title: "NEUVELIF wins No. 1 in the sunscreen category at the Hwahae Awards just three months after launch", url: 'https://www.mydaily.co.kr/page/view/2025112015485021661' },
  { date: '2025.09.01', outlet: 'The Public', title: 'NEUVELIF now officially stocked at dermatology clinics in Seoul\'s Gangnam area', url: 'https://www.thepublic.kr/news/articleView.html?idxno=275000' },
  { date: '2025.07.31', outlet: 'Live News', title: 'NEUVELIF launches its first product, Backhap Recovery Sunscreen, marking the start of wellness', url: 'https://www.livesnews.com/news/article.html?no=52895' },
];
