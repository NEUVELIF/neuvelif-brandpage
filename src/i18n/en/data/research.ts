// 시험 결과 요약
// 시험 하나의 틀. human 이 false 이면 사람 대상이 아닌 시험(점선 카드)으로 표시합니다.
export interface Test {
  product: 'sunscreen' | 'cleansing';
  name: string;        // 시험 이름
  result: string;      // 큰 글씨 결과
  detail: string;      // 결과 설명
  org: string;
  period: string;
  subjects: string;
  method: string;
  human: boolean;
  results?: [string, string][]; // 한 시험 안의 여러 평가
}

export const TESTS: Test[] = [
  { product: 'sunscreen', name: 'UVB protection · SPF', result: 'SPF 53.9', detail: 'Exceeds 50, the threshold for an SPF50+ label.', org: 'Korea Institute of Dermatological Sciences', period: '2025.06~07', subjects: '10 healthy adults', method: 'Applied at 2 mg/cm², exposed to UV, and erythema assessed 16–24 hours later (ISO 24444)', human: true },
  { product: 'sunscreen', name: 'UVA protection · UVAPF', result: 'UVAPF 18.6', detail: 'Meets the criterion for PA++++ (16 or higher), the highest grade.', org: 'Korea Institute of Dermatological Sciences', period: '2025.06~07', subjects: '10 healthy adults', method: 'Applied at 2 mg/cm², exposed to UVA, and pigmentation assessed 2–24 hours later (ISO 24442)', human: true },
  { product: 'sunscreen', name: 'Skin irritation · 24-hour patch', result: '0.00', detail: 'Rated ‘non-irritating’ with a mean skin irritation score of 0.00.', org: 'Elid Co., Ltd.', period: '2025.05', subjects: '34 adults', method: 'Applied to the back for 24 hours, then erythema and edema assessed 30 minutes and 24 hours after removal', human: true },
  { product: 'sunscreen', name: 'Heat soothing · skin temperature', result: '−4.85℃', detail: 'On skin warmed with infrared light, the temperature of the treated cheek dropped from 33.99℃ to 29.13℃ (a 14.27% decrease). The untreated cheek went from 34.10℃ to 33.13℃.', org: 'Elid Co., Ltd.', period: '2025.05', subjects: '22 women', method: 'After 10 minutes of infrared exposure to the face, applied to one cheek only and measured with a thermal imaging camera. This test was not performed on skin right after a procedure.', human: true },
  { product: 'sunscreen', name: 'Eye stinging · 2 weeks of use', result: '−80.27%', detail: 'The self-rated eye stinging score fell from 7.51 to 1.43 (out of 10).', org: 'Elid Co., Ltd.', period: '2025.05', subjects: '21 women who usually experience eye stinging', method: 'Applied to the whole face twice daily for 2 weeks; participants rated their own scores', human: true },
  { product: 'cleansing', name: 'Efficacy test · 4 measures of puffiness and cleansing', result: '4 assessments', detail: 'Four measures were evaluated together in a single test. All results are from right after one use.', org: 'Korea Institute of Dermatological Sciences', period: '2026.04', subjects: '22 women', method: '3D imaging after use on one side of the face (VECTRA-XT), skin brightness measured after cleansing makeup from the inner forearm (ANTERA 3D), close-up imaging of the nose wings, chin, and forehead', human: true,
    results: [['Temporary puffiness · facial volume', '−0.47 cc (untreated side +0.02 cc)'], ['Makeup cleansing · inner forearm', '96.68% improvement'], ['Blackhead area · nose wings', '−43.92%'], ['Whitehead area · chin & forehead', '−51.97%']] },
  { product: 'cleansing', name: 'Skin irritation · 24-hour patch', result: '0.00', detail: 'Rated ‘non-irritating’ with a mean skin reaction score of 0.00.', org: 'Korea Institute of Dermatological Sciences', period: '2026.05', subjects: '31 adults', method: 'Diluted to 1% per the standard for rinse-off products, patch-applied to the back for 24 hours, assessed at 30 minutes, 24 hours, and 48 hours', human: true },
  { product: 'cleansing', name: 'Eye irritation · non-human test (in vitro)', result: 'Non-irritating', detail: 'In a cell model mimicking the human cornea, cell viability was 106.4%, above the threshold (over 35%), so it was classified as non-irritating.', org: 'Korea Institute of Dermatological Sciences', period: '2026.04', subjects: 'Not a human test', method: 'Reconstructed human cornea model (OECD TG 492)', human: false },
];
