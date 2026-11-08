// 홈 화면의 소식 슬라이드와 시술 그룹 요약
export interface Group { label: string; desc: string; examples: string; sun: string; sunNote: string; clean: string; cleanNote: string; avoid: string; href?: string }
export interface Slide { kind: string; date: string; title1: string; title2: string; desc: string; note: string; cta1: string; href1: string; cta2: string; href2: string }

export const GROUPS: Group[] = [
      { label: '레이저 토닝·IPL·리프팅', desc: '피부 표면이 열리지 않는 레이저·빛·에너지 시술입니다. 열감과 붉은기가 생길 수 있습니다.', examples: '레이저 토닝, IPL, 울쎄라·슈링크, 써마지·인모드·올리지오, 티타늄 리프팅', sun: '시술 당일부터', sunNote: '열감이 가라앉은 뒤 얼굴 전체에 바르고 귀가합니다.', clean: '시술 당일 저녁부터', cleanNote: '미온수로 가볍게 세안합니다.', avoid: '사우나, 뜨거운 물, 격한 운동은 피하세요.' },
      { label: '레이저 제모', desc: '모공 주변이 붉어지거나 살짝 부을 수 있는 시술입니다.', examples: '얼굴·인중·바디 레이저 제모', sun: '보통 다음 날부터', sunNote: '시술 당일에는 바르지 않고 옷·모자·마스크로 가립니다.', clean: '다음 날부터', cleanNote: '당일에는 미온수 물세안 또는 병원 안내를 따릅니다.', avoid: '뜨거운 샤워와 땀나는 운동은 피하세요.' },
      { label: '아쿠아필·LDM·필링', desc: '각질층이 얇아져 피부가 예민해지는 시술입니다.', examples: '아쿠아필, 라라필·쎄라필, LDM, LED', sun: '시술 당일부터', sunNote: '이 시술 뒤에 가장 중요한 관리입니다. 매일 덧바릅니다.', clean: '시술 당일 저녁부터', cleanNote: '미온수로 가볍게 세안합니다.', avoid: '각질을 손으로 떼지 말고, 산·레티놀·스크럽은 쉬세요.' },
      { label: '보톡스·필러·스킨부스터', desc: '바늘 자국이 남고 멍이나 부기가 생길 수 있는 시술입니다.', examples: '보톡스, 필러, 리쥬란·쥬베룩 등 스킨부스터', sun: '병원이 세안을 허락한 뒤', sunNote: '손가락으로 톡톡 얹듯이 바릅니다.', clean: '병원이 세안을 허락한 뒤', cleanNote: '롤링 마사지 없이 가볍게 펴 바르고 바로 헹굽니다.', avoid: '주사 부위를 문지르거나 누르지 마세요.' },
      { label: '포텐자·MTS·프락셀', desc: '눈에 보이지 않는 미세한 통로가 남는 시술입니다. 붉은기가 1~3일 이어질 수 있습니다.', examples: '포텐자, MTS, 프락셀·피코프락셀', sun: '보통 24시간 뒤부터', sunNote: '첫 24시간은 바르지 않고 그늘·모자로 가립니다. 의료진 확인이 우선입니다.', clean: '보통 24시간 뒤부터', cleanNote: '병원 안내 전까지는 세안을 자제합니다.', avoid: '화장, 운동, 땀은 피하세요.' },
      { label: '점 제거·CO2 레이저', desc: '상처와 딱지가 생겨 보호 테이프를 붙이는 경우가 많은 시술입니다.', examples: '점·비립종·쥐젖 제거, CO2 레이저, 박피성 프락셀', sun: '상처가 아문 뒤부터', sunNote: '그전에는 상처 부위를 피해 주변 피부에만 바르고 테이프·모자로 가립니다.', clean: '병원 안내에 따라', cleanNote: '상처 부위를 피해 세안합니다.', avoid: '딱지를 떼지 말고, 진물이 많으면 병원에 문의하세요.' },
      { label: '여드름 PDT', desc: '빛에 반응하는 약을 쓰는 여드름 치료로, 치료 뒤 약 48시간 동안 빛에 매우 예민합니다.', examples: '여드름 PDT(광역동치료)', sun: '48시간 뒤부터 매일', sunNote: '치료 뒤 48시간은 선크림만으로 부족합니다. 실내에 머물고 햇빛을 피합니다.', clean: '병원 안내에 따라', cleanNote: '48시간 이후에는 평소대로 씁니다.', avoid: '외출이 꼭 필요하면 모자와 옷으로 가리세요.' }
    ];

// 자세한 가이드 페이지가 있는 그룹만 링크를 겁니다.
GROUPS[0].href = '/guide/laser-ipl-lifting/';

export const SLIDES: Slide[] = [
      { kind: '브랜드', date: '', title1: '시술 전후의 피부를 위한', title2: '더마 스킨케어', desc: '레이저, 리프팅, 주사 시술 뒤 언제 선크림을 바르고 언제 세안할지 시술별로 정리했습니다. 나를 아끼는 마음은 피부에서 시작됩니다.', note: '', cta1: '내 시술 가이드 찾기', href1: '#guide', cta2: '제품 보기', href2: '#products' },
      { kind: '신제품', date: '2026.09', title1: '말차 디퍼핑 클렌징 밀크', title2: '출시', desc: '롤링 마사지로 쓰는 300mL 밀크 클렌저입니다. 인체적용시험에서 메이크업 세정률 96.68%를 확인했습니다.', note: '한국피부과학연구원 인체적용시험, 여성 22명, 팔 안쪽에 바른 메이크업 기준', cta1: '제품 보기', href1: '/products/matcha-depuffing-cleansing-milk/', cta2: '구매처', href2: '#buy' },
      { kind: '수상', date: '2025.11', title1: '2025 하반기 화해 어워드', title2: '선케어 부문(선크림/로션) 진정 카테고리 1위', desc: '백합 리커버리 선크림이 화해 사용자의 리뷰와 평점을 바탕으로 선정되는 화해 어워드에서 수상했습니다.', note: '', cta1: '선크림 보기', href1: '#products', cta2: '소식 보기', href2: '#news' },
      { kind: '협업', date: '2026.06', title1: '피부시술 플랫폼 여신티켓과', title2: '마케팅 협력', desc: '피부 시술을 찾는 분들이 시술 전후 관리 정보도 함께 만날 수 있도록 여신티켓과 협력합니다.', note: '', cta1: '시술별 가이드', href1: '#guide', cta2: '소식 보기', href2: '#news' }
    ];
