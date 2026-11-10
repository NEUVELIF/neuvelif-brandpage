// 홈 화면의 소식 슬라이드와 시술 그룹 요약
// Group: 홈 '어떤 시술을 받으셨나요?'의 시술 그룹 하나
export interface Group { label: string; desc: string; examples: string; sun: string; sunNote: string; clean: string; cleanNote: string; avoid: string; href?: string }
// Slide: 홈 맨 위 소식 슬라이드 한 장 (kind=작은 꼬리표, title1·title2=두 줄 제목, href=버튼 주소)
// img: 배경 이미지 이름(선택). 'hero-brand' 라고 적으면 public/images/hero/ 폴더의
//      hero-brand-pc-1280.webp · hero-brand-pc-2048.webp (PC용, 가로:세로 = 8:3)
//      hero-brand-mo-800.webp  · hero-brand-mo-1080.webp (휴대폰용, 4:3) 을 찾아 씁니다. 없으면 남색 배경.
// tone: 배너 바탕색(선택). 휴대폰에서 이미지 아래 글자 칸의 색이자, 이미지가 뜨기 전 잠깐 보이는 색입니다.
//       이미지 아래쪽 가장자리 색에 맞추면 이미지와 글자 칸이 자연스럽게 이어집니다. 없으면 남색(#12324F).
export interface Slide { kind: string; date: string; title1: string; title2: string; desc: string; note: string; cta1: string; href1: string; cta2: string; href2: string; img?: string; tone?: string }

export const GROUPS: Group[] = [
      { label: 'レーザートーニング・IPL・リフトアップ', desc: '肌表面を開かないレーザー・光・エネルギー系の施術です。ほてりと赤みが出ることがあります。', examples: 'レーザートーニング、IPL、ウルセラ・シュリンク、サーマクール・インモード・オリジオ、チタニウムリフティング', sun: '施術当日から', sunNote: 'ほてりが落ち着いたら顔全体に塗ってから帰宅します。', clean: '施術当日の夜から', cleanNote: 'ぬるま湯でやさしく洗顔します。', avoid: 'サウナ、熱いお湯、激しい運動は避けてください。' },
      { label: 'レーザー脱毛', desc: '毛穴の周りが赤くなったり、少し腫れたりすることがある施術です。', examples: '顔・鼻下・ボディのレーザー脱毛', sun: '通常翌日から', sunNote: '施術当日は塗らず、服・帽子・マスクで覆います。', clean: '翌日から', cleanNote: '当日はぬるま湯のみで洗うか、クリニックの指示に従います。', avoid: '熱いシャワーと汗をかく運動は避けてください。' },
      { label: 'アクアピール・LDM・ピーリング', desc: '角質層が薄くなり、肌が敏感になる施術です。', examples: 'アクアピール、ララピール・セラピール、LDM、LED', sun: '施術当日から', sunNote: 'この施術の後で最も大切なケアです。毎日塗り直します。', clean: '施術当日の夜から', cleanNote: 'ぬるま湯でやさしく洗顔します。', avoid: '角質を手ではがさず、酸・レチノール・スクラブはお休みしてください。' },
      { label: 'ボトックス・フィラー・スキンブースター', desc: '針の跡が残り、あざや腫れが出ることがある施術です。', examples: 'ボトックス、フィラー、リジュラン・ジュベルックなどのスキンブースター', sun: 'クリニックから洗顔の許可が出てから', sunNote: '指先でトントンとのせるように塗ります。', clean: 'クリニックから洗顔の許可が出てから', cleanNote: 'くるくるマッサージをせずにやさしく広げ、すぐに洗い流します。', avoid: '注射部位をこすったり押したりしないでください。' },
      { label: 'ポテンツァ・ダーマペン・フラクセル', desc: '目に見えない微細な穴が残る施術です。赤みが1〜3日続くことがあります。', examples: 'ポテンツァ、ダーマペン（MTS）、フラクセル・ピコフラクセル', sun: '通常24時間後から', sunNote: '最初の24時間は塗らずに、日陰や帽子で覆います。医師の確認が優先です。', clean: '通常24時間後から', cleanNote: 'クリニックの指示があるまでは洗顔を控えます。', avoid: 'メイク・運動・汗は避けてください。' },
      { label: 'ほくろ除去・CO2レーザー', desc: '傷とかさぶたができ、保護テープを貼ることが多い施術です。', examples: 'ほくろ・稗粒腫・スキンタグの除去、炭酸ガス（CO2）レーザー、アブレイティブ・フラクセル', sun: '傷がふさがってから', sunNote: 'それまでは傷の部分を避けて周りの肌だけに塗り、テープ・帽子で覆います。', clean: 'クリニックの指示に従って', cleanNote: '傷の部分を避けて洗顔します。', avoid: 'かさぶたをはがさず、浸出液が多い場合はクリニックにご相談ください。' },
      { label: 'ニキビのPDT', desc: '光に反応する薬を使うニキビ治療で、治療後約48時間は光にとても敏感になります。', examples: 'ニキビのPDT（光線力学療法）', sun: '48時間後から毎日', sunNote: '治療後48時間は日焼け止めだけでは不十分です。室内で過ごし、日光を避けます。', clean: 'クリニックの指示に従って', cleanNote: '48時間以降はいつもどおり使います。', avoid: 'どうしても外出が必要な場合は、帽子と服で覆ってください。' }
    ];

// 그룹마다 자세한 가이드 페이지로 연결합니다 (순서는 src/data/guides.ts 와 같음).
const SLUGS = ['laser-ipl-lifting', 'laser-hair-removal', 'aquapeel-ldm-peeling', 'botox-filler-skinbooster', 'potenza-mts-fraxel', 'mole-removal-co2-laser', 'acne-pdt'];
GROUPS.forEach((g, i) => { g.href = `/ja/guide/${SLUGS[i]}/`; });

export const SLIDES: Slide[] = [
      { kind: 'ブランド', date: '', title1: '施術前後の肌のための', title2: 'ダーマスキンケア', desc: 'レーザー、リフティング、注射施術の後、いつ日焼け止めを塗り、いつ洗顔するかを施術別にまとめました。自分を大切にする心は、肌から始まります。', note: '', cta1: '自分の施術ガイドを探す', href1: '#guide', cta2: '製品を見る', href2: '/ja/products/', img: 'hero-brand', tone: '#313130' },
      { kind: '新製品', date: '2026.09', title1: '抹茶PDRN デパフィング クレンジング発売', title2: '', desc: 'くるくるマッサージで使う300mLのミルククレンザーです。ヒト試験でメイク洗浄率96.68%を確認しました。', note: '韓国皮膚科学研究院によるヒト試験、女性22名、腕の内側に塗ったメイクで評価', cta1: '製品を見る', href1: '/ja/products/matcha-depuffing-cleansing-milk/', cta2: '購入先', href2: '/ja/products/matcha-depuffing-cleansing-milk/#buy', img: 'hero-matcha', tone: '#242a02' },
      { kind: '受賞', date: '2025.11', title1: '2025年下半期 ファへアワード', title2: 'サンケア部門（日焼け止め／ローション）鎮静カテゴリー1位', desc: 'リリーリカバリーサンクリームが、ファへユーザーのレビューと評価をもとに選ばれるファへアワードで受賞しました。', note: '', cta1: '日焼け止めを見る', href1: '/ja/products/backhap-recovery-sunscreen/', cta2: 'ニュースを見る', href2: '/ja/news/', img: 'hero-award', tone: '#4d4d4d' }
    ];
