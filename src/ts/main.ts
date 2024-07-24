const buttons: NodeListOf<Element> = document.body.querySelectorAll('[data-id = "hero__section"]');
let timer: HTMLElement | null = document.body.querySelector('[data-id = "timer"]');
let currentToggleElement: HTMLElement | null = null;

buttons?.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const switchEle = (e.target as HTMLElement).parentNode as HTMLElement;
    
    if ((e.target as HTMLElement).innerHTML  === 'short break') {
      if (timer) {
        timer.innerText = '5:00'
      }
    } else if ((e.target as HTMLElement).innerText === 'long break') {
      if (timer) {
        timer.innerText = '15:00'
      }
    } else {
      if (timer) {
        timer.innerText = '25:00'
      }
    }
    if (switchEle) {
      if (currentToggleElement && currentToggleElement !== switchEle) {
        currentToggleElement.classList.remove('switch');
      }
      switchEle.classList.toggle('switch');
      currentToggleElement = switchEle
    }
  })

})