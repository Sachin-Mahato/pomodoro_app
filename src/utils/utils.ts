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

function sessionClickHandler(value: string)  {
  let timer: HTMLElement | null = document.body.querySelector('[data-id="timer"]'); 
  const pomodoroSession: HTMLElement | null = document.body.querySelector('[data-id="pomodoro"]')
  pomodoroSession?.addEventListener("click", () => {
    if (timer) {
      timer.innerText = `${value}:00`
    } else {
      console.log("Something went wrong in the session ClickHandler")
    }
  })

}

function shortBreakClickHandler(value: string) {
  let timer: HTMLElement | null = document.body.querySelector('[data-id="timer"]'); 
  const shortBreak: HTMLElement | null = document.body.querySelector('[data-id="short__break"]')

  shortBreak?.addEventListener("click", () => {
    if (timer) {
      timer.innerText = `${value}:00`
    } else {
      console.log("Something went wrong in the session ClickHandler")
    }
  })

}

function longBreakClickHandler(value: string) {

  let timer: HTMLElement | null = document.body.querySelector('[data-id="timer"]'); 
  const longBreak: HTMLElement | null = document.body.querySelector('[data-id="long__break"]')

  longBreak?.addEventListener("click", () => {
    if (timer) {
      timer.innerText = `${value}:00`
    } else {
      console.log("Something went wrong in the session ClickHandler")
    }
  })
}


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
export {pink, cyan, orange, defaultFont, monoFont, slabFont, sessionClickHandler, longBreakClickHandler, shortBreakClickHandler, settingsClickHandler}
