
const sounds = [
  "bang",
  "drumroll",
  "failure",
  "grunge",
  "hiphop",
  "tribe",
  "typical",
  "whoosh",
  "sun",
];

sounds.forEach( sound =>{
    const btn = document.createElement("button");
    btn.classList.add("btn")
    btn.innerHTML = sound;
     btn.addEventListener("click", () => {
        stopSong();
       document.getElementById(sound).play();
     });
    document.getElementById("buttonsGrp").appendChild(btn);
   

} )
function stopSong(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}

const stop = document.getElementById("stop");
stop.addEventListener("click",()=>{
    stopSong();
})