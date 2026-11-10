// 언론 보도 — 새 기사가 나오면 맨 위에 한 줄 추가하면 됩니다.
// 기사 하나 = 날짜, 언론사, 제목, 주소
export interface Press { date: string; outlet: string; title: string; url: string }

export const PRESS: Press[] = [
  { date: '2026.09.07', outlet: 'Edaily', title: "NEUVELIF、『抹茶PDRN デパフィング クレンジング』を皮膚科・薬局・産婦人科で取り扱い開始", url: 'https://www.edaily.co.kr/News/Read?newsId=02551846645577824&mediaCodeNo=257' },
  { date: '2026.06.08', outlet: 'Datanet', title: "ダーマコスメ『NEUVELIF』、美容施術プラットフォーム『女神チケット』とマーケティング提携", url: 'https://www.datanet.co.kr/news/articleView.html?idxno=212180' },
  { date: '2026.05.07', outlet: 'Edaily', title: 'NEUVELIF、産婦人科での取り扱いと清潭（チョンダム）のメイクアップショップでの採用でダーマケアの信頼が向上', url: 'https://www.edaily.co.kr/News/Read?newsId=06999526645446624&mediaCodeNo=257' },
  { date: '2026.01.30', outlet: 'MyDaily', title: 'NEUVELIF、NAVERファッションビューティーに公式出店', url: 'https://www.mydaily.co.kr/page/view/2026013009490418606' },
  { date: '2025.11.20', outlet: 'MyDaily', title: "NEUVELIF、ローンチから3か月で『ファへアワード』日焼け止め部門1位", url: 'https://www.mydaily.co.kr/page/view/2025112015485021661' },
  { date: '2025.09.01', outlet: 'The Public', title: 'NEUVELIF、ソウル江南エリアの皮膚科専門クリニックで公式取り扱い開始', url: 'https://www.thepublic.kr/news/articleView.html?idxno=275000' },
  { date: '2025.07.31', outlet: 'Live News', title: 'ウェルネスの始まりを告げる、NEUVELIF初のリリーリカバリーサンクリームがローンチ', url: 'https://www.livesnews.com/news/article.html?no=52895' },
];
