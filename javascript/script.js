openMenu.addEventListener('click', () =>{
    menu.style.display = 'flex'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    openMenu.style.display = 'none'

    setTimeout(() =>{
        menu.style.opacity = '1'

        menu.style.right = '0'
    }, 10)
})
closeMenu.addEventListener('click', () =>{
    menu.style.opacity = '0'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    setTimeout(() =>{
        menu.removeAttribute('style')
        openMenu.removeAttribute('style')
    }, 200)
})
var menuItem = document.querySelectorAll('#menu')
function selectedLink(){
    menuItem.forEach((item)=>
    item.classList.remove('activedLink')
    )
    this.classList.add('activedLink')
}
menuItem.forEach((item) =>
    item.addEventListener('click', selectedLink)
)
var theme = document.querySelector('#theme')
var themeChange = document.querySelector('body')

theme.addEventListener('click', function(){
    theme.classList.toggle('themeChangeIcon')
    themeChange.classList.toggle('dark')
})
