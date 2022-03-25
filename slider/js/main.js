let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let items = document.querySelectorAll('.item')
let activ = 0
// items[0].classList.remove("active")
// items[1].classList.add("active")

next.addEventListener('click', (e)=>{
    e.preventDefault()
    if(activ==2){
        activ=0
        items[activ].classList.add('active')
        items[activ+2].classList.remove('active')
    }
    else{
    items[activ+1].classList.add('active')
    items[activ].classList.remove('active')
    activ++
    }
   
})

prev.addEventListener('click', (e)=>{
    e.preventDefault()
    if(activ==0){
        activ=2
        items[activ].classList.add('active')
        items[activ-2].classList.remove('active')
    }
    else{
    items[activ-1].classList.add('active')
    items[activ].classList.remove('active')
    activ--
    }
    
})