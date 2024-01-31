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
