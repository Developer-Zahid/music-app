const playBtn = document.querySelector("#playBtn");
const playBtnIcon = document.querySelector("#playBtnIcon");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const playIndicator = document.querySelector("#playIndicator");

playBtn.addEventListener("click", function(){
    this.classList.toggle("active");
    playIndicator.classList.toggle("playing");
    if(playBtn.classList.contains("active")){
        playBtnIcon.setAttribute("class", "music-app-icon-pause")
    } else{
        playBtnIcon.setAttribute("class", "music-app-icon-play")
    }
});

window.addEventListener("load",function() {
    const elem = document.documentElement;
    setTimeout(function(){
        elem.requestFullscreen()
    }, 0);
});