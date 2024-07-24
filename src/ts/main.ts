const buttons: NodeList = document.body.querySelectorAll('[data-id = "hero__section"]') 

buttons?.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target)
  })
})