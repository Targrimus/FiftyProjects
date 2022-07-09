const input = document.querySelector('.input');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click',(e )=>{
    search.classList.toggle('active');
})