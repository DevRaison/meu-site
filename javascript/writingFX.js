function startWrite(elemento){
    const textList = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textList.forEach((letter, i) => {
        setTimeout(()=>{
            elemento.innerHTML += letter;
          }, 30 * i)
    });
}
const title = document.querySelector('.writing');
startWrite(title);