// 시술 그룹별 가이드 — 모든 그룹 페이지가 이 자료 하나로 만들어집니다.
// 병원 안내가 항상 우선입니다.
import laserProcs from './procedures-laser.json';

// Proc: 시술 하나 (시술 뒤 피부, 선크림·클렌징 시작 시점과 방법, 피할 것, 제품 안내)
export interface Proc { name: string; alias: string; skin: string; sunWhen: string; sunHow: string[]; cleanWhen: string; cleanHow: string[]; avoid: string[]; product: string[] }
export interface Point { text: string; src?: string }
// Guide: 시술 그룹 페이지 하나에 들어가는 내용 전체
// 이 목록(GUIDES)에 그룹을 하나 추가하면 페이지가 자동으로 하나 더 생깁니다. (src/pages/guide/[slug]/index.astro)
export interface Guide {
  slug: string;
  label: string;          // 그룹 이름
  short: string;          // 카드에 쓰는 한 줄 요약
  kicker: string;
  examples: string;
  lead: string;           // 첫 문단 (<strong> 사용)
  cards: { sun: [string, string]; clean: [string, string]; keep: [string, string] };
  skin: string;
  timeline: [string, string, string, string][];
  avoid: string[];
  notes: { title: string; text: string }[];
  sunPoints: Point[];
  cleanPoints: Point[];
  why: { label: string; title: string; bullets: string[] };
  faq: [string, string][];
  sources: { title: string; url?: string }[];
  procs: Proc[];
  modified: string;
}

// 여러 그룹에서 똑같이 쓰는 문장은 이름을 붙여 한 번만 적어 둡니다. (고칠 때 한 곳만 고치면 됨)
const SPF: Point = { text: 'SPF50+ PA++++ blocks both UVA and UVB.', src: 'Clinical test: SPF 53.9, UVAPF 18.6 (Korea Institute of Dermatological Sciences, 10 participants)' };
const SUN_IRR: Point = { text: 'Mean skin irritation score of 0.00 in a 24-hour patch test, classified as non-irritating.', src: '(Elid Co., Ltd., 34 participants)' };
const MILK_IRR: Point = { text: 'Skin irritation score of 0.00 in a 24-hour patch test (classified as non-irritating).', src: '(Korea Institute of Dermatological Sciences, 31 participants)' };
const MILK_TYPE: Point = { text: 'A milk-type cleanser you simply spread on and rinse off — no foaming needed.' };
const ORGANIC = { title: 'If you were advised to use a mineral sunscreen', text: 'NEUVELIF Backhap Recovery Sunscreen uses chemical (organic) filters. If your clinic recommended a mineral sunscreen (zinc oxide or titanium dioxide), follow your clinic\'s advice.' };
const NO_WOUND = { title: 'Do not apply to wounds', text: 'The labels of both products say, ‘Avoid use on areas with wounds.’ Wait until scabs, oozing areas, or taped areas have healed before using them there.' };
const SUN_GENERAL = [
  'After laser or light treatments or peels, skin is more sensitive to UV, so redness and pigmentation (brown marks that appear after a procedure) develop more easily.',
  'Tanned skin has a higher risk of post-procedure pigmentation, so many doctors advise reducing UV exposure even before the procedure.',
];
const NOT_PRODUCT = 'This describes sun protection in general and does not refer to the effect of any specific product.';
const SRC_LEE = { title: 'Lee KWA et al., Importance of Using Sunscreen After Light or Laser Facial Treatment: A Literature Review, Life (2025)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12471997' };
const SRC_KR = { title: 'Post-procedure instructions published by clinics in Korea (checked November 2026)' };
const FAQ_ORGANIC: [string, string] = ['My dermatologist told me to use a mineral sunscreen. Can I use the NEUVELIF sunscreen?', 'Please follow your doctor\'s advice. NEUVELIF Backhap Recovery Sunscreen uses chemical (organic) filters. Some clinics recommend a mineral sunscreen for a while after procedures that leave tiny channels in the skin.'];

// 시술 그룹 7개. slug 는 주소에 쓰이는 이름입니다. (예: /guide/acne-pdt/)
export const GUIDES: Guide[] = [
  {
    slug: 'laser-ipl-lifting',
    label: 'Laser toning, IPL & lifting',
    short: 'Sunscreen from the same day',
    kicker: 'Ulthera, Thermage, laser toning and more',
    examples: 'Laser toning, IPL, Ulthera/Shurink, Thermage/InMode/Oligio, Titanium lifting, ONDA lifting, vascular lasers',
    lead: 'After laser toning, IPL, or lifting, sunscreen is usually applied <strong>from the same day, once the warmth has subsided</strong>. Wash your face <strong>gently with lukewarm water from that evening</strong>. If your clinic\'s instructions differ, follow your clinic.',
    cards: { sun: ['From the day of the procedure', 'Once the warmth subsides, apply to the whole face before heading home.'], clean: ['From the evening of the procedure', 'Wash gently with lukewarm water.'], keep: ['Avoid heat', 'Avoid saunas, hot water, and strenuous exercise.'] },
    skin: 'There is no wound on the skin surface, but warmth and redness may last from a few hours to about a day. After IPL, dark spots may temporarily darken and then flake off like dead skin.',
    timeline: [
      ['Day of the procedure', 'Once the warmth subsides, apply to the whole face before heading home', 'Wash gently with lukewarm water in the evening', 'Avoid saunas, hot water, and strenuous exercise'],
      ['Days 1–3', 'Apply 30 minutes before going out and reapply every 2–3 hours', 'Morning and evening wash', 'Pause exfoliants, scrubs, and retinol'],
      ['Day 4 to week 2', 'Keep applying carefully', 'As usual', 'Don\'t pick at darkened spots'],
      ['After 2 weeks', 'Make it a daily habit', 'As usual', 'Avoid tanning before your next session'],
    ],
    avoid: ['Rubbing the treated area hard', 'Hot water, saunas', 'Exfoliation'],
    notes: [ORGANIC],
    sunPoints: [
      SPF,
      { text: 'These procedures cover the whole face, so you will apply it near the eyes too. After 21 women who usually experience eye stinging used it for 2 weeks, their eye stinging score fell by 80.27%.', src: '(Elid Co., Ltd.)' },
      { text: 'In a test where skin temperature was raised with infrared light, the cheek it was applied to cooled by 4.85℃ right away.', src: '(Elid Co., Ltd., 22 women. This test was not performed on skin right after a procedure.)' },
      { text: 'A triple-function cosmetic for UV protection, brightening, and wrinkle improvement.' },
    ],
    cleanPoints: [MILK_TYPE, MILK_IRR, { text: 'The label suggests finishing with a light cold-water rinse. For a few days after radiofrequency lifting, rinse with lukewarm water instead.' }],
    why: { label: 'WHY SUN PROTECTION', title: 'Why is sun protection<br>more important after a procedure?', bullets: [SUN_GENERAL[0], 'Consistent sun protection is recommended even after non-ablative lasers.', SUN_GENERAL[1], NOT_PRODUCT] },
    faq: [
      ['When can I start applying sunscreen after a procedure?', 'It depends on the procedure. After laser toning, IPL, or lifting, which leave the skin surface intact, you can usually apply it the same day. After procedures that leave tiny channels in the skin, usually after 24 hours. After procedures that leave scabs, once the wound has healed. If your clinic\'s instructions differ, follow your clinic.'],
      ['When can I start using the cleansing milk after a procedure?', 'Start once your clinic says you may wash your face. After laser toning, IPL, or lifting, you can usually wash gently with lukewarm water from the evening of the same day. After injections, use it without massaging once the time advised by your clinic has passed.'],
      FAQ_ORGANIC,
    ],
    sources: [
      SRC_LEE,
      { title: 'MDedge, Tips for avoiding, taming most postlaser complications (presented at AAD 2018)', url: 'https://mdedge.com/content/tips-avoiding-taming-most-postlaser-complications' },
      { title: 'Medical News Today, HIFU facial', url: 'https://www.medicalnewstoday.com/articles/hifu-facial' },
      { title: 'Sand Lake Dermatology, IPL photofacial instructions', url: 'https://www.sandlakedermatology.com/storage/app/media/ipl20photofacial20instructions.pdf' },
      { title: 'Cosmetic Laser Dermatology, IPL photofacial', url: 'https://clderm.com/what-to-expect-before-during-and-after-ipl-photofacial-treatment/' },
      SRC_KR,
    ],
    procs: laserProcs as Proc[],
    modified: '2026-11-08',
  },
  {
    slug: 'laser-hair-removal',
    label: 'Laser hair removal',
    short: 'Sunscreen usually from the next day',
    kicker: 'Laser hair removal on the face, upper lip, and body',
    examples: 'Laser hair removal on the face, upper lip, and body',
    lead: 'After laser hair removal, sunscreen is usually applied <strong>from the next day</strong>. On the day of the procedure, cover up with clothing, a hat, or a mask, and wash <strong>with lukewarm water only that day, or as your clinic advises</strong>. If your clinic\'s instructions differ, follow your clinic.',
    cards: { sun: ['Usually from the next day', 'Do not apply on the day; cover up with clothing, a hat, or a mask.'], clean: ['From the next day', 'On the day, rinse with lukewarm water only or follow your clinic\'s instructions.'], keep: ['Avoid heat and friction', 'Avoid hot showers and exercise that makes you sweat.'] },
    skin: 'The skin around the follicles may turn red or swell slightly. Since this procedure is done over several sessions, care between sessions matters too.',
    timeline: [
      ['Day of the procedure', 'Do not apply; cover up with clothing, a hat, or a mask', 'Lukewarm water rinse only, or as your clinic advises', 'Avoid hot showers and exercise that makes you sweat'],
      ['From the next day', 'Apply carefully to sun-exposed areas such as the face and arms', 'As usual', 'No waxing or tweezing'],
      ['Between sessions', 'Every day', 'As usual', 'Avoid tanning'],
    ],
    avoid: ['Rubbing the treated area hard', 'Hot showers, saunas', 'Waxing, tweezing', 'Tanning'],
    notes: [],
    sunPoints: [SPF, SUN_IRR, { text: 'It is made for areas exposed to UV, such as the face and neck. From the next day, you can also apply it to sun-exposed treated areas such as the arms and legs.' }],
    cleanPoints: [MILK_TYPE, MILK_IRR],
    why: { label: 'WHY SUN PROTECTION', title: 'Why avoid UV<br>throughout your hair removal course', bullets: ['Many doctors advise avoiding UV before and after laser hair removal, because tanned skin is more prone to redness or pigment changes after treatment.', 'Since the procedure is done over several sessions, it is best to keep up daily sun protection between sessions too.', NOT_PRODUCT] },
    faq: [
      ['Can I apply sunscreen on the day of laser hair removal?', 'Many clinics advise not applying it on the day of the procedure, covering up with clothing, a hat, or a mask instead, and starting from the next day. Follow your clinic\'s instructions.'],
      ['Can I apply sunscreen to treated areas on my body?', 'Backhap Recovery Sunscreen is made for areas exposed to UV, such as the face and neck. From the next day, you can also apply it to sun-exposed treated areas such as the arms and legs. If your skin is sensitive, try it on a small area first.'],
      ['How should I care for my skin between sessions?', 'Use sun protection every day and avoid tanning, waxing, and tweezing. For care before your next session, follow your clinic\'s instructions.'],
    ],
    sources: [
      { title: 'Kormedi, Aftercare after hair removal, Botox, peeling, and laser treatments at a dermatology clinic (advice from a dermatologist)', url: 'https://kormedi.com/1198068/' },
      SRC_LEE,
      SRC_KR,
    ],
    procs: [
      {
        name: 'Laser hair removal on the face, upper lip, and body', alias: 'Laser hair removal',
        skin: 'The skin around the follicles may turn red or swell slightly.',
        sunWhen: 'Usually from the next day',
        sunHow: ['Do not apply on the day of the procedure; cover up with clothing, a hat, or a mask.', 'From the next day, apply it not only to your face but also to sun-exposed treated areas such as the arms and legs.', 'Applying it every day, even between sessions, is an important habit.'],
        cleanWhen: 'As usual from the next day',
        cleanHow: ['On the day of the procedure, rinse with lukewarm water only or follow your clinic\'s instructions.', 'From the next day, cleanse with the rolling massage as usual. If redness remains, spread it on lightly and rinse.'],
        avoid: ['Avoid hot showers and exercise that makes you sweat.', 'Avoid waxing, tweezing, and tanning between sessions.'],
        product: ['SPF50+ PA++++; skin irritation score of 0.00 in a 24-hour patch test (Elid Co., Ltd., 34 participants).', 'The cleansing milk is a milk-type cleanser you spread on without foaming.'],
      },
    ],
    modified: '2026-11-08',
  },
  {
    slug: 'aquapeel-ldm-peeling',
    label: 'AquaPeel, LDM & peels',
    short: 'Sunscreen from the same day',
    kicker: 'AquaPeel, Lalapeel, LDM, LED',
    examples: 'AquaPeel, Lalapeel / LHA peel / Cerapeel, LDM, LED',
    lead: 'After AquaPeel or a peel, applying sunscreen <strong>from the day of the procedure</strong> is the most important aftercare. Wash your face <strong>gently with lukewarm water from that evening</strong>. If your clinic\'s instructions differ, follow your clinic.',
    cards: { sun: ['From the day of the procedure', 'The most important aftercare for these procedures. Reapply daily.'], clean: ['From the evening of the procedure', 'Use lukewarm water; spread on without foaming and rinse.'], keep: ['Leave flaking skin alone', 'Don\'t peel off flakes by hand, and pause acids, retinol, and scrubs.'] },
    skin: 'The outer skin layer becomes thinner, so stinging, tightness, and light flaking may occur for a few days. LDM and LED usually cause almost no irritation.',
    timeline: [
      ['Day of the procedure', 'Right away (the most important aftercare in this group)', 'Gently with lukewarm water in the evening', 'Don\'t peel off flakes by hand'],
      ['Days 1–7', 'Every day, reapply every 2–3 hours', 'Morning and evening', 'Pause acids (AHA/BHA), retinol, and scrubs'],
      ['After that', 'Every day', 'As usual', 'Avoid tanning before your next session'],
    ],
    avoid: ['Peeling off flakes by hand', 'Acids (AHA/BHA), retinol, scrubs', 'Scrubbing your face hard'],
    notes: [],
    sunPoints: [SPF, SUN_IRR],
    cleanPoints: [{ text: 'It spreads over flaking skin without foaming.' }, { text: '100% of survey respondents said their skin ‘stays moisturized without feeling tight’ after washing.', src: '(22 women, self-assessment right after one use)' }, MILK_IRR],
    why: { label: 'WHY SUN PROTECTION', title: 'Why sun protection matters most<br>after a peel', bullets: ['After a peel, the outer skin layer becomes thinner and skin may become more sensitive to UV.', 'Consistent sun protection is recommended even after light peels.', SUN_GENERAL[1], NOT_PRODUCT] },
    faq: [
      ['Can I apply sunscreen on the day of an AquaPeel?', 'Yes, clinics usually advise applying it from the day of the procedure. The outer skin layer is thinner, so sun protection is especially important. If stinging is severe, check with your clinic first.'],
      ['My skin is flaking after a peel. Can I do the rolling massage with the cleansing milk?', 'While your skin is flaking, keep the rolling massage short and light, and don\'t peel off flakes by hand. Spread it on without foaming and rinse with lukewarm water.'],
      ['I only had LDM or LED. Is there anything special to watch for?', 'They usually cause almost no irritation, so you can use the sunscreen and cleansing milk as usual. If you had them along with another procedure, follow the guidance for that procedure.'],
    ],
    sources: [
      { title: 'American Academy of Dermatology (AAD), Chemical peels: FAQs', url: 'https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-faqs' },
      SRC_LEE,
      SRC_KR,
    ],
    procs: [
      {
        name: 'AquaPeel', alias: 'Hydro peeling',
        skin: 'The outer skin layer becomes thinner, so you may feel stinging or tightness.',
        sunWhen: 'From the day of the procedure',
        sunHow: ['Apply right away on the day of the procedure. This is the most important aftercare in this group.', 'Apply 30 minutes before going out and reapply every 2–3 hours.'],
        cleanWhen: 'From the evening of the procedure',
        cleanHow: ['Wash gently with lukewarm water.', 'Spread it on without foaming, then rinse.'],
        avoid: ['Pause acids (AHA/BHA), retinol, and scrubs for about a week.'],
        product: ['Sunscreen: skin irritation score of 0.00 in a 24-hour patch test (Elid Co., Ltd., 34 participants).', 'Cleansing milk: 100% said skin ‘stays moisturized without feeling tight’ (22 women, self-assessment right after one use).'],
      },
      {
        name: 'Lalapeel, LHA peel, Cerapeel', alias: 'Epidermal peels',
        skin: 'Stinging, tightness, and light flaking may occur for a few days.',
        sunWhen: 'From the day of the procedure',
        sunHow: ['Apply every day from the day of the procedure.', 'Don\'t rub over flaking skin; lay it on gently with your palms.'],
        cleanWhen: 'From the evening of the procedure',
        cleanHow: ['While your skin is flaking, keep the rolling massage short and light.', 'Don\'t peel off flakes by hand.'],
        avoid: ['Pause acids, retinol, and scrubs.'],
        product: ['A milk-type cleanser you spread on without foaming.', 'SPF50+ PA++++ blocks both UVA and UVB.'],
      },
      {
        name: 'LDM·LED', alias: 'Ultrasound care · Light care',
        skin: 'They usually cause almost no irritation.',
        sunWhen: 'As usual from the day of the procedure',
        sunHow: ['Apply as usual.'],
        cleanWhen: 'As usual',
        cleanHow: ['Cleanse with the rolling massage as usual.'],
        avoid: ['If you had it along with another procedure, follow the guidance for that procedure.'],
        product: ['Use them in your usual order.'],
      },
    ],
    modified: '2026-11-08',
  },
  {
    slug: 'botox-filler-skinbooster',
    label: 'Botox, fillers & skin boosters',
    short: 'After your clinic allows face washing',
    kicker: 'Botox, fillers, Rejuran, Juvelook and more',
    examples: 'Botox, fillers, skin boosters such as Rejuran and Juvelook, contouring and fat-dissolving injections, acne inflammation injections',
    lead: 'After injections, start sunscreen and face washing <strong>once your clinic allows you to wash your face</strong>. This is usually between a few hours and the next day, and it varies by clinic. The most important thing is <strong>not to rub or press the injection sites</strong>.',
    cards: { sun: ['After your clinic allows face washing', 'Pat it on gently with your fingertips.'], clean: ['After your clinic allows face washing', 'Spread it on lightly without the rolling massage and rinse right away.'], keep: ['No rubbing', 'Do not rub or press the injection sites.'] },
    skin: 'Injection marks, bruising, swelling, and small bumps (skin boosters) may last a few days. The most important thing is not to rub or press the injection sites so the product or filler does not spread from where it was placed.',
    timeline: [
      ['Right after the procedure', 'Do not apply', 'Do not wash', 'Don\'t touch the treated area'],
      ['After your clinic allows face washing (usually a few hours to the next day)', 'Pat on gently with your fingertips', 'Spread on lightly with your palms and rinse right away without the rolling massage', 'Avoid rubbing, massage, and pressing on your face'],
      ['Weeks 1–2', 'Every day', 'As usual (keep avoiding massage on injection sites)', 'Avoid saunas, alcohol, and facial massage treatments'],
    ],
    avoid: ['Rubbing or pressing injection sites', 'Facial massage, rolling massage', 'Saunas, alcohol'],
    notes: [{ title: 'Use the cleansing milk without rolling', text: 'The basic way to use Matcha Depuffing Cleansing Milk is with a rolling massage. After injections, skip the rolling: spread it on lightly with your palms and rinse right away.' }],
    sunPoints: [{ text: 'A lotion texture that is easy to pat on and spread thinly with your fingertips.' }, { text: '100% of survey respondents said it ‘absorbs naturally without a greasy feel.’', src: '(22 women, self-assessment right after application)' }, SPF],
    cleanPoints: [{ text: 'A milk-type cleanser you can spread on and rinse off without foaming or rubbing.' }, MILK_IRR],
    why: { label: 'WHY NO RUBBING', title: 'Why shouldn\'t you rub<br>injection sites?', bullets: ['Injected products or fillers may spread or shift from where they were placed, so many clinics advise not rubbing or pressing the area for a while after the procedure.', 'When you can start washing varies widely by clinic — ‘after a few hours,’ ‘from the next day,’ and so on. Always follow the instructions of the clinic that treated you.', 'Even while bruising or redness remains, protect your skin from UV as usual when you go out.'] },
    faq: [
      ['Can I wash my face on the day I get Botox?', 'Wash your face after the time advised by your clinic has passed. Clinics differ — some say after a few hours, others from the next day. When washing, do not rub or press the injection sites.'],
      ['Can I use the cleansing milk after skin boosters (such as Rejuran)?', 'You can use it once your clinic allows face washing. Spread it on lightly with your palms without the rolling massage and rinse right away. Do not press or squeeze the small bumps.'],
      ['I was told to massage after contouring injections — is that right?', 'Massage instructions for contouring and fat-dissolving injections vary by clinic. If your clinic did not recommend massage, use the cleansing milk without rolling as well.'],
    ],
    sources: [
      { title: 'American Society of Plastic Surgeons (ASPS), What not to do after getting facial filler', url: 'https://www.plasticsurgery.org/news/articles/what-not-to-do-after-getting-facial-filler' },
      { title: 'Cleveland Clinic, Botox aftercare', url: 'https://health.clevelandclinic.org/botox-aftercare' },
      { title: 'Medical News Today, Botox aftercare', url: 'https://www.medicalnewstoday.com/articles/drugs-botox-aftercare' },
      { title: 'Doctor Now, Precautions after skin booster treatments', url: 'https://doctornow.co.kr/content/magazine/03607d21d0fd4f00ad6348d5cde9d9c0' },
      SRC_KR,
    ],
    procs: [
      {
        name: 'Botox', alias: 'Wrinkles, square jaw, skin Botox',
        skin: 'Injection marks and mild bruising or swelling may occur. The most important thing is not to rub the treated area so the product doesn\'t spread.',
        sunWhen: 'After your clinic allows face washing',
        sunHow: ['Pat it on gently with your fingertips.', 'Do not rub the injection sites.'],
        cleanWhen: 'After your clinic allows face washing',
        cleanHow: ['Spread it on lightly with your palms and rinse right away without rolling.', 'After square-jaw Botox, especially avoid massaging the jaw area.'],
        avoid: ['If your clinic tells you not to lie down for a few hours, follow that advice.', 'Avoid saunas, alcohol, and facial massage.'],
        product: ['A milk-type cleanser you can use without rubbing.', 'Sunscreen: 100% said it ‘absorbs naturally without a greasy feel’ (22 women, self-assessment).'],
      },
      {
        name: 'Fillers', alias: 'Hyaluronic acid fillers and more',
        skin: 'Swelling, bruising, and tenderness may last a few days. Do not press or rub so the filler stays in place.',
        sunWhen: 'After your clinic allows face washing',
        sunHow: ['Pat it on gently with your fingertips.'],
        cleanWhen: 'After your clinic allows face washing',
        cleanHow: ['Spread it on without rolling and rinse right away.', 'After washing, pat dry gently instead of pressing with a towel.'],
        avoid: ['Avoid saunas, alcohol, and facial massage treatments for 1–2 weeks.', 'If your clinic tells you not to sleep face down, follow that advice.'],
        product: ['A milk-type cleanser you can use without rubbing.', 'The sunscreen is a lotion texture that is easy to spread thinly.'],
      },
      {
        name: 'Skin boosters', alias: 'Rejuran, Juvelook, glow-boosting hydration injections, salmon (PDRN) injections and more',
        skin: 'Bumpy injection marks may last 1–2 days.',
        sunWhen: 'After your clinic allows face washing',
        sunHow: ['Clinics differ widely — ‘after 2–3 hours,’ ‘from the next day,’ or ‘same day is fine.’ Always follow the instructions of the clinic that treated you.', 'Once allowed, pat it on gently with your fingertips.'],
        cleanWhen: 'After your clinic allows face washing',
        cleanHow: ['Spread it on without rolling and rinse right away.'],
        avoid: ['Do not press or squeeze the bumpy marks.', 'Avoid saunas and alcohol.'],
        product: ['The matcha PDRN in the cleansing milk is an ingredient of a rinse-off cleanser and is different from skin booster injections.', 'Skin irritation score of 0.00 in a 24-hour patch test (Korea Institute of Dermatological Sciences, 31 participants).'],
      },
      {
        name: 'Contouring & fat-dissolving injections', alias: 'Contouring injections',
        skin: 'Swelling and bruising may occur.',
        sunWhen: 'After your clinic allows face washing',
        sunHow: ['Once face washing is allowed, apply as usual.'],
        cleanWhen: 'As your clinic advises (some say it is fine after 2–3 hours)',
        cleanHow: ['Clinics give opposite massage instructions: some recommend light massage, others say to avoid massage for 3–5 days.', 'If your clinic did not recommend massage, use it without rolling.'],
        avoid: ['Avoid saunas.'],
        product: ['A milk-type cleanser you can spread on and rinse off without rolling.'],
      },
      {
        name: 'Acne inflammation injections', alias: 'Acne injections',
        skin: 'Injected acne spots may stay red for a few days.',
        sunWhen: 'After your clinic\'s go-ahead',
        sunHow: ['Don\'t rub the injection sites; lay it on gently.'],
        cleanWhen: 'After your clinic\'s go-ahead',
        cleanHow: ['Don\'t rub or squeeze the injection sites; spread it on lightly and rinse.'],
        avoid: ['Don\'t squeeze or touch your acne.'],
        product: ['Cleansing milk: skin irritation score of 0.00 in a 24-hour patch test (Korea Institute of Dermatological Sciences, 31 participants).', 'Sunscreen: skin irritation score of 0.00 in a 24-hour patch test (Elid Co., Ltd., 34 participants).'],
      },
    ],
    modified: '2026-11-08',
  },
  {
    slug: 'potenza-mts-fraxel',
    label: 'Potenza, MTS & Fraxel',
    short: 'Sunscreen usually after 24 hours',
    kicker: 'Potenza, MTS, Fraxel, spicule peels and more',
    examples: 'Potenza, MTS, Fraxel/Pico Fraxel, scar subcision, spicule peels',
    lead: 'After Potenza, MTS, or Fraxel, sunscreen is usually applied <strong>after 24 hours, once your doctor confirms</strong>. Many clinics advise applying nothing other than the products they provide for the first 24 hours, and you should <strong>hold off on washing until your clinic says so</strong>.',
    cards: { sun: ['Usually after 24 hours', 'For the first 24 hours, do not apply; stay in the shade and wear a hat. Your doctor\'s confirmation comes first.'], clean: ['Usually after 24 hours', 'Hold off on washing until your clinic says so; once you start, use it without rolling.'], keep: ['Rest from irritants', 'Avoid makeup, exercise, and sweating, and pause retinol, acids, and vitamin C for at least 3 days.'] },
    skin: 'Microscopic channels invisible to the eye remain, and redness may last 1–3 days. Many clinics advise applying nothing to the skin for the first 24 hours.',
    timeline: [
      ['First 24 hours', 'Do not apply; stay in the shade and wear a hat (only products from your clinic)', 'Hold off on washing until your clinic says so', 'Avoid makeup, exercise, and sweating'],
      ['After 24 hours (with your doctor\'s OK)', 'Start applying; be especially thorough for 2 weeks', 'Gently with lukewarm water, without rolling', 'Pause retinol, acids, and vitamin C for at least 3 days'],
      ['After 1 week', 'Every day', 'As usual', 'Exfoliate only after your doctor confirms'],
    ],
    avoid: ['Makeup, exercise, and sweating during the first 24 hours', 'Peeling off fine flakes by hand', 'Retinol, acids, vitamin C (at least 3 days)'],
    notes: [ORGANIC],
    sunPoints: [SPF, SUN_IRR, { text: 'It uses chemical (organic) filters. If you were advised to use a mineral sunscreen, follow your clinic\'s advice.' }],
    cleanPoints: [{ text: 'A milk-type cleanser you can spread on and rinse off right away without foaming or rubbing.' }, MILK_IRR],
    why: { label: 'WHY SUN PROTECTION', title: 'Sun protection after procedures<br>that leave tiny channels', bullets: [SUN_GENERAL[0], 'Even after you start applying sunscreen once the first 24 hours have passed, many clinics recommend especially thorough sun protection for about 2 weeks.', SUN_GENERAL[1], NOT_PRODUCT] },
    faq: [
      ['When can I start sunscreen after MTS?', 'Usually after 24 hours, once your doctor confirms. For the first 24 hours, apply nothing other than the products your clinic provides, and stay in the shade and wear a hat.'],
      FAQ_ORGANIC,
      ['I have fine flaking after Fraxel. How should I wash my face?', 'Don\'t peel off the flakes by hand. Spread the cleansing milk on without rolling and rinse right away with lukewarm water. Put off exfoliation until your doctor says it\'s okay.'],
    ],
    sources: [
      { title: 'Healthline, Microneedling aftercare', url: 'https://www.healthline.com/health/beauty-skin-care/microneedling-aftercare' },
      { title: 'Vujevich Dermatology, Microneedling aftercare', url: 'https://www.vucare.com/?p=2322' },
      { title: 'Eternal Dermatology, Microneedling aftercare instructions', url: 'https://eternaldermatology.com/?p=4997' },
      { title: 'Berkshire Aesthetics, Microneedling aftercare guide', url: 'https://berkshireaesthetics.com/guides/microneedling-aftercare-guide' },
      SRC_LEE,
      SRC_KR,
    ],
    procs: [
      {
        name: 'MTS', alias: 'Microneedling',
        skin: 'Microscopic channels invisible to the eye remain, and redness may last 1–3 days.',
        sunWhen: 'Usually after 24 hours (with your doctor\'s OK)',
        sunHow: ['For the first 24 hours, do not apply; stay in the shade and wear a hat. Use only the products your clinic provides.', 'After 24 hours, start applying once your doctor confirms, and be especially thorough for 2 weeks.'],
        cleanWhen: 'After your clinic\'s go-ahead (usually after 24 hours)',
        cleanHow: ['Hold off on washing until your clinic says so.', 'Once you start, use lukewarm water, spread it on without rolling, and rinse right away. Avoid massage for about 2 weeks.'],
        avoid: ['Avoid makeup, exercise, and sweating.', 'Pause retinol, acids, and vitamin C for at least 3 days.'],
        product: ['It uses chemical (organic) filters. If you were advised to use a mineral sunscreen, follow your clinic\'s advice.', 'SPF50+ PA++++; skin irritation score of 0.00 in a 24-hour patch test (Elid Co., Ltd., 34 participants).'],
      },
      {
        name: 'Potenza', alias: 'RF microneedling, Virtue RF and more',
        skin: 'Similar to MTS, but radiofrequency heat is added, so there may be a little more redness and warmth.',
        sunWhen: 'Usually after 24 hours (with your doctor\'s OK)',
        sunHow: ['Follow the same rule as MTS: for the first 24 hours, do not apply and keep covered.', 'Once you start applying, be especially thorough for 2 weeks.'],
        cleanWhen: 'After your clinic\'s go-ahead (usually after 24 hours)',
        cleanHow: ['Spread it on without rolling and rinse right away with lukewarm water.', 'Skip the cleansing milk\'s ‘cold-water finish’ tip for a few days.'],
        avoid: ['Avoid makeup, exercise, and sweating.', 'Pause retinol, acids, and vitamin C for at least 3 days.'],
        product: ['A milk-type cleanser you spread on without foaming; skin irritation score of 0.00 in a 24-hour patch test (Korea Institute of Dermatological Sciences, 31 participants).'],
      },
      {
        name: 'Fraxel & Pico Fraxel', alias: 'Non-ablative fractional lasers',
        skin: 'Tiny dot-like marks and redness appear, and fine flaking may follow a few days later.',
        sunWhen: 'Usually after 24 hours (with your doctor\'s OK)',
        sunHow: ['Start following the same rule as MTS.', 'Don\'t rub over fine flakes; lay it on gently.'],
        cleanWhen: 'After your clinic\'s go-ahead (usually after 24 hours)',
        cleanHow: ['Spread it on without rolling and rinse right away.', 'Don\'t peel off fine flakes.'],
        avoid: ['Exfoliate only after your doctor confirms.'],
        product: ['SPF50+ PA++++ blocks both UVA and UVB.'],
      },
      {
        name: 'Scar subcision', alias: 'Scar treatment',
        skin: 'Bruising and swelling may last 1–2 weeks (similar to injection procedures).',
        sunWhen: 'After your clinic allows face washing',
        sunHow: ['Don\'t press on bruised areas; pat it on gently.'],
        cleanWhen: 'After your clinic allows face washing',
        cleanHow: ['Spread it on without rolling and rinse right away.'],
        avoid: ['Don\'t press on bruised areas.'],
        product: ['A milk-type cleanser you can use without rubbing.'],
      },
      {
        name: 'Spicule peels', alias: 'Seaweed (spicule) peels',
        skin: 'Microscopic needle-like particles remain in the skin, so tingling, redness, dryness, and fine flaking may occur for 1–3 days.',
        sunWhen: 'After your clinic\'s go-ahead',
        sunHow: ['Start applying after your clinic\'s go-ahead.', 'Some clinics recommend a mineral sunscreen; in that case, follow your clinic\'s advice.'],
        cleanWhen: 'After your clinic\'s go-ahead (some clinics say not to wash for the first 24 hours)',
        cleanHow: ['Once you start, spread it on without rolling and rinse right away.', 'Never rub.'],
        avoid: ['Don\'t peel off flakes.', 'Pause retinol and acids.'],
        product: ['It uses chemical (organic) filters. If you were advised to use a mineral sunscreen, follow your clinic\'s advice.'],
      },
    ],
    modified: '2026-11-08',
  },
  {
    slug: 'mole-removal-co2-laser',
    label: 'Mole removal & CO2 laser',
    short: 'Sunscreen once the wound has healed',
    kicker: 'Removal of moles, milia, and lentigines; ablative lasers and more',
    examples: 'Removal of moles, milia, and skin tags, CO2 laser, lentigo and freckle lasers, ablative Fraxel, semi-permanent eyebrows',
    lead: 'After procedures that leave wounds and scabs, such as mole removal or CO2 laser, <strong>do not apply sunscreen to the wound</strong>. Apply only to the surrounding skin and cover with tape or a hat, then <strong>once the wound has healed</strong> (usually about 1–2 weeks, confirmed by your doctor), apply carefully over the treated area as well.',
    cards: { sun: ['Once the wound has healed', 'Until then, avoid the wound, apply only to the surrounding skin, and cover with tape or a hat.'], clean: ['As your clinic advises', 'Wash while avoiding the wound and tape.'], keep: ['Leave scabs alone', 'Don\'t pick off scabs; if there is a lot of oozing, contact your clinic.'] },
    skin: 'Small wounds and scabs form, and hydrocolloid (moist-healing) patches are often worn for anywhere from a few days to about 2 weeks.',
    timeline: [
      ['While tape or scabs remain', 'Do not apply to the wound. Apply only to the surrounding skin and cover with tape or a hat', 'As your clinic advises, avoiding the wound', 'Don\'t pick off scabs; contact your clinic if there is a lot of oozing'],
      ['Once the wound has healed (usually 1–2 weeks, confirmed by your doctor)', 'Carefully over the treated area too, for at least 2 months', 'As usual', 'Be especially careful with UV while new skin is pink'],
    ],
    avoid: ['Applying products over wounds, scabs, or tape', 'Picking off scabs by hand', 'Exposing pink new skin to direct sunlight'],
    notes: [NO_WOUND],
    sunPoints: [{ text: 'SPF50+ PA++++ as an everyday sunscreen once the wound has healed.', src: 'Clinical test: SPF 53.9, UVAPF 18.6 (Korea Institute of Dermatological Sciences, 10 participants)' }, SUN_IRR, { text: '95.5% of survey respondents said it ‘finishes clean with no white cast.’', src: '(21 of 22 women, self-assessment right after application)' }],
    cleanPoints: [{ text: 'A milk-type cleanser you can use as usual once the wound has healed. While the wound is present, avoid that area.' }, MILK_IRR],
    why: { label: 'WHY SUN PROTECTION', title: 'Why should pink new skin<br>avoid UV after healing?', bullets: ['Pink new skin after a wound heals is sensitive to UV, so many doctors recommend thorough sun protection for at least about 2 months.', 'One study found less pigmentation in the group that started using sunscreen right after ablative laser treatment.', 'The American Academy of Dermatology advises avoiding the sun completely until the skin heals after a deep peel, and applying sunscreen every day once it has healed.', NOT_PRODUCT] },
    faq: [
      ['When can I start sunscreen after mole removal?', 'Once the wound has healed (usually about 1–2 weeks, confirmed by your doctor), apply it over the treated area too. Until then, avoid the wound, apply only to the surrounding skin, and cover with tape or a hat.'],
      ['Can I apply sunscreen over the tape?', 'Do not apply it over tape or on the wound. Apply only to the skin around the tape, and block the sun with a hat or mask.'],
      ['How should I care for pink skin after the scab falls off?', 'Be especially careful with UV while the new skin is pink. Apply carefully over the treated area, reapply every 2–3 hours, and keep this up for at least about 2 months.'],
    ],
    sources: [
      { title: 'Kormedi, Aftercare after hair removal, Botox, peeling, and laser treatments at a dermatology clinic (advice from a dermatologist)', url: 'https://kormedi.com/1198068/' },
      { title: 'Manuskiatti W et al., The use of sunscreen starting on the first day after ablative fractional skin resurfacing, JEADV', url: 'https://repository.li.mahidol.ac.th/handle/123456789/34169' },
      { title: 'American Academy of Dermatology (AAD), Chemical peels: FAQs', url: 'https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-faqs' },
      { title: 'American Society of Plastic Surgeons (ASPS), Laser skin resurfacing recovery', url: 'https://plasticsurgery.org/cosmetic-procedures/laser-skin-resurfacing/recovery' },
      SRC_KR,
    ],
    procs: [
      {
        name: 'Removal of moles, milia, skin tags, and warts', alias: 'CO2 laser',
        skin: 'Small wounds and scabs form, and tape is worn for a few days.',
        sunWhen: 'Once the wound has healed (usually about 1 week, confirmed by your doctor)',
        sunHow: ['Do not apply to the wound. Apply only to the surrounding skin and cover with tape or a hat.', 'Once healed, apply carefully over the treated area as well for at least 2 months.'],
        cleanWhen: 'As your clinic advises',
        cleanHow: ['Wash while avoiding the wound and tape.', 'Once healed, use it as usual.'],
        avoid: ['Don\'t pick off scabs. If there is a lot of oozing, contact your clinic.', 'Be especially careful with UV while the new skin is pink.'],
        product: ['SPF50+ PA++++ as an everyday sunscreen once healed; skin irritation score of 0.00 in a 24-hour patch test (Elid Co., Ltd., 34 participants).', '95.5% said it ‘finishes clean with no white cast’ (21 of 22 women, self-assessment).'],
      },
      {
        name: 'Lentigo & freckle lasers', alias: 'Pigment treatments that leave scabs',
        skin: 'As with mole removal, scabs form and then fall off.',
        sunWhen: 'Once the scabs have fallen off and the skin has healed',
        sunHow: ['Apply following the same rule as mole removal.', 'After the scabs fall off, apply especially carefully over the pink new skin.'],
        cleanWhen: 'As your clinic advises',
        cleanHow: ['While scabs remain, wash while avoiding those areas.'],
        avoid: ['Don\'t pick off scabs.'],
        product: ['SPF50+ PA++++ blocks both UVA and UVB.'],
      },
      {
        name: 'Ablative Fraxel', alias: 'Ablative fractional lasers',
        skin: 'Wounds take longer to heal.',
        sunWhen: 'Every day once healed',
        sunHow: ['Until healed, avoid the wounds and stay out of the sun altogether.', 'Once healed, apply carefully every day.'],
        cleanWhen: 'Follow the washing method set by your clinic',
        cleanHow: ['Follow the washing method set by your clinic first.'],
        avoid: ['Avoid the sun until healed.'],
        product: ['Do not apply while wounds are present.'],
      },
      {
        name: 'Medium-depth or deeper peels', alias: 'Deep peels',
        skin: 'The skin peels off and takes time to heal.',
        sunWhen: 'Every day once healed',
        sunHow: ['The American Academy of Dermatology advises avoiding the sun completely until the skin heals, and applying sunscreen every day once it has healed.'],
        cleanWhen: 'As your clinic advises',
        cleanHow: ['Follow the washing method set by your clinic.'],
        avoid: ['Don\'t pull off peeling skin.'],
        product: ['Do not apply while wounds are present.'],
      },
      {
        name: 'Semi-permanent eyebrows', alias: 'Semi-permanent makeup',
        skin: 'Swelling, redness, and itching occur, and scabs form.',
        sunWhen: 'Avoid the brows; once healed, apply up to the brow area',
        sunHow: ['Apply while avoiding the brow area.', 'Once healed, apply around the brows as well.'],
        cleanWhen: 'Avoid the brow area for about a week',
        cleanHow: ['For about a week, wash while avoiding the brow area.'],
        avoid: ['Avoid alcohol, hot saunas, and strenuous exercise for a week.', 'Don\'t pick off scabs. Touch-ups are usually done about a month later.'],
        product: ['Sunscreen: eye stinging score fell by 80.27% after 2 weeks of use (21 women who usually experience eye stinging; Elid Co., Ltd.).'],
      },
    ],
    modified: '2026-11-08',
  },
  {
    slug: 'acne-pdt',
    label: 'Acne PDT',
    short: 'Every day from 48 hours',
    kicker: 'Acne photodynamic therapy (PDT)',
    examples: 'Acne PDT (photodynamic therapy)',
    lead: 'For about <strong>48 hours after acne PDT (photodynamic therapy), sunscreen alone cannot protect your skin</strong>. Stay indoors, avoid sunlight and bright windows, and apply sunscreen every day <strong>from 48 hours onward</strong>.',
    cards: { sun: ['Every day from 48 hours', 'For 48 hours after treatment, sunscreen alone is not enough. Stay indoors and avoid sunlight.'], clean: ['As your clinic advises', 'After 48 hours, use as usual.'], keep: ['Avoid light', 'If you must go out, cover up with a hat and clothing.'] },
    skin: 'In this treatment a light-sensitive medication is applied and then activated with light, so for about 48 hours afterward your skin is extremely sensitive to sunlight and bright lighting. Flaking and redness may last about a week.',
    timeline: [
      ['48 hours after treatment', 'Sunscreen alone is not enough. Stay indoors and avoid sunlight and bright windows', 'As your clinic advises', 'If you must go out, cover up with a hat and clothing'],
      ['After 48 hours', 'Carefully every day', 'As usual', 'Flaking and redness may last about a week'],
    ],
    avoid: ['Sunlight and bright windows during the 48 hours after treatment', 'Peeling off flakes by hand'],
    notes: [{ title: 'For 48 hours, sunscreen is no substitute', text: 'For 48 hours after treatment, no sunscreen can replace avoiding light. Staying indoors during this time is what matters most.' }],
    sunPoints: [{ text: 'SPF50+ PA++++ as an everyday sunscreen after the 48 hours have passed.', src: 'Clinical test: SPF 53.9, UVAPF 18.6 (Korea Institute of Dermatological Sciences, 10 participants)' }, SUN_IRR],
    cleanPoints: [{ text: 'Some clinics ask you to come for treatment without makeup or sunscreen. You can remove them with the cleansing milk.' }, MILK_IRR],
    why: { label: 'WHY AVOID LIGHT', title: 'Why avoid light for<br>48 hours after PDT?', bullets: ['Because the medication used reacts to light, your skin stays sensitive even to sunlight and bright indoor lighting for about 48 hours after treatment.', 'International clinics and acne information sites advise that sunscreen alone cannot protect the skin during this period and that light itself should be avoided.', 'After 48 hours, keep up daily sun protection.'] },
    faq: [
      ['If I apply sunscreen on the day of PDT, can I go out?', 'No. For about 48 hours after treatment, sunscreen alone is not enough. Stay indoors, and if you must go out, cover up with a hat and clothing.'],
      ['Can I wear sunscreen when I go for PDT?', 'Some clinics ask you to come without makeup or sunscreen. Follow your clinic\'s instructions and, if needed, remove them with the cleansing milk before you go.'],
      ['Can I use the products as usual after 48 hours?', 'Yes. From 48 hours onward, apply sunscreen every day and use the cleansing milk as usual. Flaking and redness may last about a week, so don\'t peel off flakes.'],
    ],
    sources: [
      { title: 'Acne.org, Photodynamic therapy', url: 'https://www.acne.org/?p=6848' },
      { title: 'Kaiser Permanente, Photodynamic therapy', url: 'https://espanol.kaiserpermanente.org/content/dam/kporg/mhw/pdf/photodynamic_therapy.pdf' },
      { title: 'WE Dermatology, Photodynamic therapy care instructions', url: 'https://www.wederm.com/wp-content/uploads/2025/12/AQUA-Photodynamic-Care-Instructions.pdf' },
      SRC_KR,
    ],
    procs: [
      {
        name: 'Acne PDT', alias: 'Photodynamic therapy',
        skin: 'Because of the light-sensitive medication, your skin is extremely sensitive to sunlight and bright lighting for about 48 hours.',
        sunWhen: 'Every day from 48 hours',
        sunHow: ['For 48 hours, sunscreen alone is not enough. Stay indoors and avoid windows and sunlight.', 'Apply carefully every day from 48 hours onward.'],
        cleanWhen: 'As your clinic advises',
        cleanHow: ['Use as usual from 48 hours onward.'],
        avoid: ['If you must go out, cover up with a hat and clothing.', 'Flaking and redness may last about a week. Don\'t peel off flakes.'],
        product: ['Before 48 hours have passed, no product can replace blocking out light.', 'After 48 hours, protect your skin from UV every day with SPF50+ PA++++.'],
      },
    ],
    modified: '2026-11-08',
  },
];

export const guideHref = (slug: string) => `/en/guide/${slug}/`;

// 시술 전 관리 (모든 시술 공통)
export const PRE_CARE: [string, string, string][] = [
  ['From 2 weeks before the procedure', 'Avoid UV so your skin doesn\'t tan.', 'Apply sunscreen daily and reapply every 2–3 hours'],
  ['Morning of the procedure', 'Many clinics ask you to arrive without makeup or sunscreen.', 'Remove makeup and sunscreen with the cleansing milk'],
];
