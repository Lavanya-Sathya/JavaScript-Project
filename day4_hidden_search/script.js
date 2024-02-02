const searchCont = document.getElementById("searchCont");
const btn = document.querySelector(".search");
const input = document.querySelector(".input");
const container = document.querySelector(".container")
btn.addEventListener("click",()=>{
    searchCont.classList.toggle("active");
    container.classList.toggle("activeCont");
    input.focus()
})