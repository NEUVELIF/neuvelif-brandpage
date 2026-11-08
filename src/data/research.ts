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
  { product: 'sunscreen', name: '자외선B 차단 · SPF', result: 'SPF 53.9', detail: 'SPF50+ 표시 기준인 50을 넘었습니다.', org: '한국피부과학연구원', period: '2025.06~07', subjects: '건강한 성인 10명', method: '2mg/cm² 바른 뒤 자외선을 쬐고 16~24시간 뒤 홍반 판정 (ISO 24444)', human: true },
  { product: 'sunscreen', name: '자외선A 차단 · UVAPF', result: 'UVAPF 18.6', detail: '가장 높은 등급인 PA++++ 기준(16 이상)에 해당합니다.', org: '한국피부과학연구원', period: '2025.06~07', subjects: '건강한 성인 10명', method: '2mg/cm² 바른 뒤 자외선A를 쬐고 2~24시간 뒤 색소 침착 판정 (ISO 24442)', human: true },
  { product: 'sunscreen', name: '피부 자극 · 24시간 첩포', result: '0.00', detail: '평균 피부자극도 0.00으로 ‘무자극’ 판정을 받았습니다.', org: '㈜엘리드', period: '2025.05', subjects: '성인 34명', method: '등 부위에 24시간 붙였다 뗀 뒤 30분, 24시간 후 홍반·부종 판정', human: true },
  { product: 'sunscreen', name: '열 자극 진정 · 피부 온도', result: '−4.85℃', detail: '적외선으로 데운 피부에서 바른 쪽 볼 온도가 33.99℃에서 29.13℃로 내려갔습니다(감소율 14.27%). 바르지 않은 쪽은 34.10℃에서 33.13℃였습니다.', org: '㈜엘리드', period: '2025.05', subjects: '여성 22명', method: '얼굴에 적외선을 10분 쬔 뒤 한쪽 볼에만 바르고 열화상 카메라로 측정. 시술 직후 피부에서 한 시험은 아닙니다.', human: true },
  { product: 'sunscreen', name: '눈시림 · 2주 사용', result: '−80.27%', detail: '눈시림 자가 평가 점수가 7.51점에서 1.43점으로 줄었습니다(10점 만점).', org: '㈜엘리드', period: '2025.05', subjects: '평소 눈시림을 느끼는 여성 21명', method: '하루 2번 얼굴 전체에 2주 사용, 본인이 점수로 평가', human: true },
  { product: 'cleansing', name: '효능 시험 · 붓기와 세정 4가지', result: '4가지 평가', detail: '한 번의 시험에서 네 가지를 함께 평가했습니다. 모두 1회 사용 직후 결과입니다.', org: '한국피부과학연구원', period: '2026.04', subjects: '여성 22명', method: '얼굴 한쪽 사용 후 3D 촬영(VECTRA-XT), 팔 안쪽 메이크업 세정 후 피부 밝기 측정(ANTERA 3D), 콧방울·턱·이마 확대 촬영', human: true,
    results: [['일시적 붓기 · 얼굴 부피', '−0.47cc (사용하지 않은 쪽 +0.02cc)'], ['메이크업 세정 · 팔 안쪽', '개선율 96.68%'], ['블랙헤드 면적 · 콧방울', '−43.92%'], ['화이트헤드 면적 · 턱·이마', '−51.97%']] },
  { product: 'cleansing', name: '피부 자극 · 24시간 첩포', result: '0.00', detail: '평균 피부반응도 0.00으로 ‘무자극’ 판정을 받았습니다.', org: '한국피부과학연구원', period: '2026.05', subjects: '성인 31명', method: '씻어내는 제품 기준에 맞춰 1%로 희석해 등 부위에 24시간 첩포, 30분·24시간·48시간 판정', human: true },
  { product: 'cleansing', name: '눈 자극 · 비인체 시험(in vitro)', result: '비자극', detail: '사람 각막을 본뜬 세포 모델에서 세포 생존율 106.4%로, 기준(35% 초과)을 넘어 비자극으로 판정됐습니다.', org: '한국피부과학연구원', period: '2026.04', subjects: '사람 대상 시험이 아닙니다', method: '인공 각막 모델 (OECD TG 492)', human: false },
];
