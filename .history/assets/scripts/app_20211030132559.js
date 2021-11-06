/* Show menu */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
   
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/* Menu Hidden */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remove Menu when click item nav*/
const navLink = document.querySelectorAll('.nav__link');  
function linkAction(){
    const navMenu = document.getElementById('nav-menu'); 
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click', linkAction));

/* change backgroud header*/

function scrollHeader(){
    const nav = document.getElementById('header'); 
    if(this.scrollY >=100) header.classList.add('scroll-header');else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/* Swiper discover */
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/* Play video */
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon= document.getElementById('video-icon')

    function playPause() {
        if(videoFile.paused) {
            videoFile.play()
            videoIcon.classList.add('ri-pause-line')
            videoIcon.classList.remove('ri-play-line')
        }
    }
    videoButton.addEventListener('click', playPause)