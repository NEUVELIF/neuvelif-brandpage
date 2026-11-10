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
  { product: 'sunscreen', name: 'UVBカット・SPF', result: 'SPF 53.9', detail: 'SPF50+表示の基準である50を超えました。', org: '韓国皮膚科学研究院', period: '2025.06~07', subjects: '健康な成人10名', method: '2mg/cm²を塗布後に紫外線を照射し、16〜24時間後に紅斑を判定（ISO 24444）', human: true },
  { product: 'sunscreen', name: 'UVAカット・UVAPF', result: 'UVAPF 18.6', detail: '最高等級であるPA++++の基準（16以上）に該当します。', org: '韓国皮膚科学研究院', period: '2025.06~07', subjects: '健康な成人10名', method: '2mg/cm²を塗布後にUVAを照射し、2〜24時間後に色素沈着を判定（ISO 24442）', human: true },
  { product: 'sunscreen', name: '皮膚刺激・24時間パッチ', result: '0.00', detail: '平均皮膚刺激スコア0.00で「無刺激」の判定を受けました。', org: 'ELID社', period: '2025.05', subjects: '成人34名', method: '背中に24時間貼付してはがした後、30分後・24時間後に紅斑・浮腫を判定', human: true },
  { product: 'sunscreen', name: '熱刺激の鎮静・皮膚温度', result: '−4.85℃', detail: '赤外線で温めた肌で、塗った側の頬の温度が33.99℃から29.13℃に下がりました（減少率14.27%）。塗らなかった側は34.10℃から33.13℃でした。', org: 'ELID社', period: '2025.05', subjects: '女性22名', method: '顔に赤外線を10分照射した後、片側の頬だけに塗り、サーモグラフィーカメラで測定。施術直後の肌で行った試験ではありません。', human: true },
  { product: 'sunscreen', name: '目のしみ・2週間使用', result: '−80.27%', detail: '目のしみの自己評価スコアが7.51点から1.43点に下がりました（10点満点）。', org: 'ELID社', period: '2025.05', subjects: '普段から目のしみを感じる女性21名', method: '1日2回、顔全体に2週間使用し、本人がスコアで評価', human: true },
  { product: 'cleansing', name: '効能試験・むくみと洗浄の4項目', result: '4項目の評価', detail: '1回の試験で4つの項目を同時に評価しました。いずれも1回使用直後の結果です。', org: '韓国皮膚科学研究院', period: '2026.04', subjects: '女性22名', method: '顔の片側に使用後に3D撮影（VECTRA-XT）、腕の内側のメイクを洗浄した後に皮膚の明るさを測定（ANTERA 3D）、小鼻・あご・額を拡大撮影', human: true,
    results: [['一時的なむくみ・顔の体積', '−0.47cc（使用しなかった側 +0.02cc）'], ['メイク洗浄・腕の内側', '改善率96.68%'], ['黒ずみ（ブラックヘッド）面積・小鼻', '−43.92%'], ['白ニキビ（ホワイトヘッド）面積・あご・額', '−51.97%']] },
  { product: 'cleansing', name: '皮膚刺激・24時間パッチ', result: '0.00', detail: '平均皮膚反応スコア0.00で「無刺激」の判定を受けました。', org: '韓国皮膚科学研究院', period: '2026.05', subjects: '成人31名', method: '洗い流す製品の基準に合わせて1%に希釈し、背中に24時間パッチ貼付、30分・24時間・48時間後に判定', human: true },
  { product: 'cleansing', name: '眼刺激・非ヒト試験（in vitro）', result: '非刺激', detail: 'ヒトの角膜を模した細胞モデルで細胞生存率106.4%となり、基準（35%超）を上回ったため非刺激と判定されました。', org: '韓国皮膚科学研究院', period: '2026.04', subjects: 'ヒトを対象とした試験ではありません', method: '再生ヒト角膜モデル（OECD TG 492）', human: false },
];
