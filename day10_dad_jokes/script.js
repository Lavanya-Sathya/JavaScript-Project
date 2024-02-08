const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokebtn");

jokeBtn.addEventListener("click",getJokes);
getJokes();

function getJokes(){
    const config = {
        headers:{
            'Accept' : 'application/json'
        }
    }
    fetch("https://icanhazdadjoke.com/",config)
    .then((res)=>res.json())
    .then((data) => {
        joke.innerHTML = data.joke
    });
}
