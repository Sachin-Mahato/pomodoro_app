import { selectSession, settingsClickHandler } from "../utils/utils";
const buttons: NodeListOf<Element> = document.body.querySelectorAll('.session');
const settings: HTMLElement | null = document.body.querySelector('[data-id="settings"]');
const settingsIcon: HTMLElement | null = document.body.querySelector('[data-id="settings__icon"]');
const crossIcon: HTMLElement | null = document.body.querySelector('[data-id="cross"]');
const startBtn = document.body.querySelector('[data-id="start__btn"]');
const pauseBtn = document.body.querySelector('[data-id="stop__btn"]');
let countDown: number | undefined;
let isRunning = false;
let minutes: number;
let seconds: number;


function start() {
  if (!isRunning) {
    isRunning = true;

    const timerElement: HTMLElement | null = document.body.querySelector('[data-id="timer"]');
    if (timerElement) {
      const timeText = timerElement.innerText.trim(); // Get and trim the text content
      const [initialMinutes, initialSeconds] = timeText.split(':').map(Number); // Split and convert to numbers
      minutes = initialMinutes || 0; // Default to 0 if parsing fails
      seconds = initialSeconds || 0; // Default to 0 if parsing fails
    } else {
      // Default values if the timer element is not found
      minutes = 25;
      seconds = 0;
    }

    countDown = setInterval(updateCountDown, 1000);
  }
}
function stop() {
  isRunning = false;
  if (countDown !== undefined) {
    clearInterval(countDown)
  }
}


function updateCountDown() {
  let timer = document.body.querySelector('[data-id="timer"]');
  const soundEffect: HTMLAudioElement | null = document.body.querySelector('.myAudio');

  if (minutes === 0 && seconds === 0) {
    stop();
    if (soundEffect) {
      soundEffect.play()
    }
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59
  } else {
    seconds--;
  }

  if (timer) {
    timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

}


startBtn?.addEventListener("click", () => {
  if(!isRunning) {
    start();
    pauseBtn?.classList.remove("block-btn");
    startBtn?.classList.add("block-btn")
  }
})

pauseBtn?.addEventListener("click", () => {
  stop()
  pauseBtn.classList.add("block-btn");
  startBtn?.classList.remove("block-btn");
})


buttons?.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget as HTMLElement;
    if (target) {
      stop();
      pauseBtn?.classList.add("block-btn")
      startBtn?.classList.remove("block-btn")
    selectSession(target)
    }
    // stop() // fix the bug when i click on start button and then i click again to go to suppose a short brake or long break , it was starting from the previous session but now it's stopped and start from new session instead of old session
  });
});



settingsIcon?.addEventListener("click", () => {
  settings?.classList.add("flex")
})

crossIcon?.addEventListener("click", () => {
  settings?.classList.remove("flex")
})

settings?.addEventListener("click", (e: MouseEvent) => {
  settingsClickHandler(e)
})

