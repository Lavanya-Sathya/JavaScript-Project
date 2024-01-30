const cardHeader = document.querySelectorAll(".cardHeader");
const cardHover = document.querySelectorAll(".cardHover");


cardHeader.forEach((card)=>{
    card.addEventListener("mouseover",()=>{
        card.classList.add("cardHeaderOpacity");
    });
    card.addEventListener("mouseout", () => {
      card.classList.remove("cardHeaderOpacity");
    });
})


// const cardHeaders = document.querySelectorAll(".cardHeader");

// cardHeaders.forEach((card) => {
//   const cardHover = card.querySelector(".cardHover");

//   card.addEventListener("mouseover", () => {
//     cardHover.classList.add("cardHoverOpacity");
//     card.classList.add("cardHeaderOpacity");
//   });

//   card.addEventListener("mouseout", () => {
//     cardHover.classList.remove("cardHoverOpacity");
//     card.classList.remove("cardHeaderOpacity");
//   });
// });