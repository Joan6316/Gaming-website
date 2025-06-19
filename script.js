const nextbutton=document.querySelector(".next-btn");
const video=document.querySelector(".hero-video");

const movieList= [ "videos/hero-1.mp4", "videos/hero-2.mp4", "videos/hero-3.mp4", "videos/hero-4.mp4", "videos/hero-5.mp4","videos/hero-6.mp4"];

let index=0;
nextbutton.addEventListener("click",function(){
    index += 1
    video.src = movieList[index];
    if(index === 5){
        index =- 1;
    }
})


