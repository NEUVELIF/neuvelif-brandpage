// 칩(버튼)을 누르면 해당 내용만 보여 주는 공통 동작.
// 모든 내용은 HTML에 들어 있고, 자바스크립트가 없으면 전부 펼쳐져 보입니다.
const ON = 'border: 1px solid #12324F; background: #12324F; color: #FFFFFF; font-weight: 700';
const OFF = 'border: 1px solid #B9C9D6; background: #FFFFFF; color: #12324F; font-weight: 500';

export function initPickers() {
  document.querySelectorAll<HTMLElement>('[data-picker]:not([data-ready])').forEach((root) => {
    root.dataset.ready = '1';
    const chips = [...root.querySelectorAll<HTMLButtonElement>('[data-pick]')];
    const panels = [...root.querySelectorAll<HTMLElement>('[data-panel]')];
    const show = (i: number) => {
      chips.forEach((c, k) => {
        c.setAttribute('aria-pressed', String(k === i));
        c.setAttribute('style', `${c.dataset.base}; ${k === i ? ON : OFF}`);
      });
      panels.forEach((p, k) => (p.hidden = k !== i));
    };
    chips.forEach((c, k) => c.addEventListener('click', () => show(k)));
    let start = 0;
    const param = root.dataset.param;
    if (param) {
      const v = Number(new URLSearchParams(location.search).get(param));
      if (Number.isInteger(v) && v >= 0 && v < panels.length) start = v;
    }
    show(start);
  });
}
