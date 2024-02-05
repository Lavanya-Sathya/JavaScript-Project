const left = document.querySelector(".left-container");
const right = document.querySelector(".right-container");

left.addEventListener("mouseover",()=>{
    left.style.flex = "75%";
    right.style.flex = "25%";
})
left.addEventListener("mouseout", () => {
  left.style.flex = "50%";
  right.style.flex = "50%";
});
right.addEventListener("mouseover", () => {
  left.style.flex = "25%";
  right.style.flex = "75%";
});
right.addEventListener("mouseout", () => {
  left.style.flex = "50%";
  right.style.flex = "50%";
});