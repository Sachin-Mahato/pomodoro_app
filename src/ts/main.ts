const buttons: NodeListOf<Element> = document.body.querySelectorAll(
  '[data-id = "hero__section"]'
);

let timer: HTMLElement | null = document.body.querySelector(
  '[data-id = "timer"]'
);
let currentToggleElement: HTMLElement | null = null;
const colorCheckboxes: NodeListOf<Element> = document.body.querySelectorAll(
  '[data-id = "checkboxes"]'
);
const applyButton: HTMLButtonElement | null = document.body.querySelector(
  '[data-id="apply__btn"]'
);
const settings: HTMLElement | null = document.body.querySelector(
  '[data-id="settings"]'
);

buttons?.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const switchEle = (e.target as HTMLElement).parentNode as HTMLElement;

    if ((e.target as HTMLElement).innerHTML === "short break") {
      if (timer) {
        timer.innerText = "5:00";
      }
    } else if ((e.target as HTMLElement).innerText === "long break") {
      if (timer) {
        timer.innerText = "15:00";
      }
    } else {
      if (timer) {
        timer.innerText = "25:00";
      }
    }
    if (switchEle) {
      if (currentToggleElement && currentToggleElement !== switchEle) {
        currentToggleElement.classList.remove("switch");
      }
      switchEle.classList.toggle("switch");
      currentToggleElement = switchEle;
    }
  });
});

const cyan = (): void => {
  const innerCircle = document.body.querySelector('[data-id="inner"]');
  const orangeCheckbox = document.body.querySelector(".orange");
  const pinkCheckbox = document.body.querySelector(".pink");
  const cyanCheckbox = document.body.querySelector(".cyan");
  innerCircle?.classList.add("border-cyan");
  innerCircle?.classList.remove("border-orange");
  innerCircle?.classList.remove("border-pink");
  orangeCheckbox?.classList.remove("checked");
  pinkCheckbox?.classList.remove("checked");
  cyanCheckbox?.classList.add("checked");
};

const pink = (): void => {
  const innerCircle = document.body.querySelector('[data-id="inner"]');
  const orangeCheckbox = document.body.querySelector(".orange");
  const pinkCheckbox = document.body.querySelector(".pink");
  const cyanCheckbox = document.body.querySelector(".cyan");
  innerCircle?.classList.add("border-pink");
  innerCircle?.classList.remove("border-cyan");
  innerCircle?.classList.remove("border-orange");
  pinkCheckbox?.classList.add("checked");
  cyanCheckbox?.classList.remove("checked");
  orangeCheckbox?.classList.remove("checked");
};

const orange = (): void => {
  const innerCircle = document.body.querySelector('[data-id="inner"]');
  const orangeCheckbox = document.body.querySelector(".orange");
  const pinkCheckbox = document.body.querySelector(".pink");
  const cyanCheckbox = document.body.querySelector(".cyan");
  innerCircle?.classList.add("border-orange");
  innerCircle?.classList.remove("border-cyan");
  innerCircle?.classList.remove("border-pink");
  orangeCheckbox?.classList.add("checked");
  cyanCheckbox?.classList.remove("checked");
  pinkCheckbox?.classList.remove("checked");
};

const defaultFont = ():void => {
  const body = document.body;
  const defaultFont = body.querySelector(".settings__fonts-default");
  const slabFont = body.querySelector(".settings__fonts-slab");
  const monoFont = body.querySelector(".settings__fonts-mono");
  body.classList.add("default");
  body.classList.remove("slab");
  body.classList.remove("mono");
  defaultFont?.classList.add("cover");
  slabFont?.classList.remove("cover");
  monoFont?.classList.remove("cover");
}
const slabFont = (): void => {
  const body = document.body;
  const defaultFont = body.querySelector(".settings__fonts-default");
  const slabFont = body.querySelector(".settings__fonts-slab");
  const monoFont = body.querySelector(".settings__fonts-mono");

  body.classList.add("slab");
  body.classList.remove("default");
  body.classList.remove("mono");
  slabFont?.classList.add("cover");
  monoFont?.classList.remove("cover");
  defaultFont?.classList.remove("cover");
};

const monoFont = (): void => {
  const body = document.body;
  const defaultFont = body.querySelector(".settings__fonts-default");
  const slabFont = body.querySelector(".settings__fonts-slab");
  const monoFont = body.querySelector(".settings__fonts-mono");

  body.classList.add("mono");
  body.classList.remove("slab");
  body.classList.remove("default");
  monoFont?.classList.add("cover");
  slabFont?.classList.remove("cover");
  defaultFont?.classList.remove("cover");
};

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
    }
  });
}

settings?.addEventListener("click", (e) => {
  settingsClickHandler(e as MouseEvent);
});
