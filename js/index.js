const hamburguer = document.querySelector('#hamburguer')
const nav = document.querySelector('#hb-nav')

hamburguer.addEventListener('click', (event) => {
    event.preventDefault()
    if(nav.classList.contains('close')){
        nav.classList.remove('close')    
        nav.classList.add('open')    
    } else {
        nav.classList.remove('open')    
        nav.classList.add('close')    
    }
})