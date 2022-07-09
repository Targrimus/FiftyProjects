const panels = document.querySelectorAll(".panel");

panels.forEach((v,i)=>{
    v.addEventListener('click',(e)=>{
        clickEvent(e.target);
    })
})

const clickEvent = (e) => {
    panels.forEach((v)=>{
        v.style.flex = 0.2;
        v.classList.remove('active');
    })

    e.style.flex = 5;
    e.classList.add('active');
}

