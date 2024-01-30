
let controlWidth = document.querySelectorAll(".imgEffect");

controlWidth.forEach((img)=>{
    img.addEventListener("click",()=>{
        removeExpandClass()
        img.classList.add("imgExpand");
    })
})

function removeExpandClass(){
    controlWidth.forEach((img) => { 
        img.classList.remove("imgExpand");
    });
}
