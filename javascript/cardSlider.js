function openMessage(){
  const ms = document.getElementById('messageWindow')
  ms.classList.add('openMs')

  ms.addEventListener('click', (e) => {
    if(e.target.id == 'closeMessage' || e.target.id == 'column'){
      ms.classList.remove('openMs')
    }
  })
}