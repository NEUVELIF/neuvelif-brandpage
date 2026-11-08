// 칩(버튼)을 누르면 해당 내용만 보여 주는 공통 동작.
// 모든 내용은 HTML에 들어 있고, 자바스크립트가 없으면 전부 펼쳐져 보입니다.
// 선택된 칩(ON)과 선택 안 된 칩(OFF)의 모양
const ON = 'border: 1px solid #12324F; background: #12324F; color: #FFFFFF; font-weight: 700';
const OFF = 'border: 1px solid #B9C9D6; background: #FFFFFF; color: #12324F; font-weight: 500';

// 페이지 안의 data-picker 묶음을 모두 찾아 동작을 붙입니다.
// HTML 쪽 약속:
//   data-picker  → 칩과 내용을 감싸는 묶음
//   data-pick    → 누르는 칩(버튼)
//   data-panel   → 칩과 짝을 이루는 내용
//   data-param   → 주소의 ?g=3 처럼 처음에 열 번호를 받을 이름
export function initPickers() {
  document.querySelectorAll<HTMLElement>('[data-picker]:not([data-ready])').forEach((root) => {
    root.dataset.ready = '1';  // 같은 묶음에 동작이 두 번 붙지 않도록 표시
    const chips = [...root.querySelectorAll<HTMLButtonElement>('[data-pick]')];
    const panels = [...root.querySelectorAll<HTMLElement>('[data-panel]')];
    // show(i): i번째 칩을 '선택됨'으로 바꾸고, i번째 내용만 보이게 합니다.
    const show = (i: number) => {
      chips.forEach((c, k) => {
        c.setAttribute('aria-pressed', String(k === i));
        c.setAttribute('style', `${c.dataset.base}; ${k === i ? ON : OFF}`);
      });
      panels.forEach((p, k) => (p.hidden = k !== i));
    };
    chips.forEach((c, k) => c.addEventListener('click', () => show(k)));
    // 주소에 ?g=3 같은 값이 있으면 그 번호부터 보여 줍니다. (예: 다른 페이지에서 특정 시술로 바로 연결)
    let start = 0;
    const param = root.dataset.param;
    if (param) {
      const v = Number(new URLSearchParams(location.search).get(param));
      if (Number.isInteger(v) && v >= 0 && v < panels.length) start = v;
    }
    show(start);
  });
}
