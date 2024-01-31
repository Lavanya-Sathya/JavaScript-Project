
let controlWidth = document.querySelectorAll(".imgEffect");

controlWidth.forEach((img)=>{
    const imgCaption = img.querySelector(".caption");
    img.addEventListener("click",()=>{
        removeExpandClass()
        img.classList.add("imgExpand");
        imgCaption.classList.add("captionDisplay");
    })
})

function removeExpandClass(){
    controlWidth.forEach((img) => { 
        const imgCaption = img.querySelector(".caption");
        img.classList.remove("imgExpand");
        imgCaption.classList.remove("captionDisplay");
    });
}