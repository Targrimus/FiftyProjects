const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentCircle = 1;
console.log(currentCircle);

next.addEventListener('click',(e)=>{
    currentCircle++;

    if (currentCircle > circles.length){
        currentCircle = circles.length;
    }

    console.log(currentCircle);
    update();
})


prev.addEventListener('click',(e)=>{
    currentCircle--;

    if (currentCircle < 1){
        currentCircle = 1;
    }

    console.log(currentCircle);

    update();
})

const update = () => {
    
    circles.forEach((e,i)=>{
        if (i < currentCircle){
            e.classList.add('active');
        }
        else{
            e.classList.remove('active')   
        }
    })
    console.log(100/circles.length*(currentCircle) + "%");
    progress.style.width = 100/(circles.length-1)*(currentCircle-1) + "%";

    if(currentCircle === 1){
        prev.disabled = true;
    }
    else if (currentCircle === circles.length) {
        next.disabled = true;
    }
    else{
        next.disabled = false;
        prev.disabled = false;
    }
}