import { settingsClickHandler } from "../utils/utils";

const buttons: NodeListOf<Element> = document.body.querySelectorAll('[data-id = "hero__section"]');
let currentToggleElement: HTMLElement | null = null;
const settings: HTMLElement | null = document.body.querySelector('[data-id="settings"]');
const settingsIcon: HTMLElement | null = document.body.querySelector('[data-id="settings__icon"]');
const crossIcon: HTMLElement | null = document.body.querySelector('[data-id="cross"]');
const startBtn = document.body.querySelector('[data-id="start__btn"]');

buttons?.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const switchEle = (e.target as HTMLElement).parentNode as HTMLElement;

    if (switchEle) {

      if (currentToggleElement && currentToggleElement !== switchEle) {
        currentToggleElement.classList.remove("switch");
      }
      switchEle.classList.toggle("switch");
      currentToggleElement = switchEle;
    }

  });
});

let totalTime = 25 * 60;
function showTime() {
  let timer: HTMLElement | null = document.body.querySelector('[data-id="timer"]');
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  timer.innerText = `${minutes}: ${seconds}`
  totalTime--;
}
startBtn?.addEventListener("click", (e) => {
  setInterval(showTime, 1000)
  startBtn.innerText = "Pause"
})

settingsIcon?.addEventListener("click", () => {
  settings?.classList.add("flex")
})

crossIcon?.addEventListener("click", () => {
  settings?.classList.remove("flex")
})

