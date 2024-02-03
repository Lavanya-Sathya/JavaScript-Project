const bg = document.querySelector(".bg");
const text = document.querySelector(".loading-text");

let load = 0;

let increment = setInterval(blur,30);
function blur(){
    load++;
    if(load > 99){
        clearInterval(increment);
    }
    text.innerHTML = `${load}%`;
    text.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (value, inMin, inMax, outMin, outMax)=> {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}