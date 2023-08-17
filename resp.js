burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navright=document.querySelector('.navright')
navlist=document.querySelector('.navlist')


burger.addEventListener('click',()=>{
    navright.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})