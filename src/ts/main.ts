import { cyan,pink,orange,defaultFont, slabFont,monoFont, longBreakClickHandler, sessionClickHandler, shortBreakClickHandler } from "../utils/utils";

const buttons: NodeListOf<Element> = document.body.querySelectorAll('[data-id = "hero__section"]');
let currentToggleElement: HTMLElement | null = null;
const settings: HTMLElement | null = document.body.querySelector('[data-id="settings"]');

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


function settingsClickHandler(e: MouseEvent) {
  const target = e.target as HTMLElement;
  const applyButton = document.body.querySelector('[data-id="apply__btn"]');

  applyButton?.addEventListener("click", () => {

    if (target.classList.contains("cyan")) {
      cyan();
    } else if (target.classList.contains("pink")) {
      pink();
    } else if (target.classList.contains("orange")) {
      orange();
    } else if (target.classList.contains("first")) {
      defaultFont()
    } else if (target.classList.contains("second")) {
      slabFont()
    } else if (target.classList.contains("third")) {
      monoFont()
    } else if (target.classList.contains("pomodoro__session")) {
      const value = (target as HTMLInputElement).value;
      sessionClickHandler(value)
    } else if (target.classList.contains("pomodoro__short-break"))  {
      const value = (target as HTMLInputElement).value;
      shortBreakClickHandler(value)
    } else if (target.classList.contains("pomodoro__long-break")) {
      const value = (target as HTMLInputElement).value;
      longBreakClickHandler(value)
    }

  });
}

settings?.addEventListener("click", (e) => {
  settingsClickHandler(e as MouseEvent);
});
