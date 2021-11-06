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
        }else{
            videoFile.pause()
            videoIcon.classList.add('ri-play-line')
            videoIcon.classList.remove('ri-pause-line')
        }
    }
    videoButton.addEventListener('click', playPause)

    function finalVideo(){
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
    videoFile.addEventListener('ended',finalVideo)

    function scrollUp(){
        const scrollUp= document.getElementById('scroll-up');
        if(this.scrollY >=200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll',scrollUp)

    // Scroll section active link
    const sections = document.querySelectorAll('section[id]')
    function scrollActive(){
        const scrollY = window.pageYOffset
        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
                document.querySelector('.nav__menu a[href*='+sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*='+sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)

    /* Dark light theme */
    const themeButton=document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'ri-sun-line'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme = () => {
        document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }
    const getCurrentIcon = () =>{
        themeButton.classList.contains('icon-theme') ? 'ri-moon-line' : 'ri-sun-line'
    }

    if(selectedTheme){
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove' ](darkTheme)
        themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    }
    themeButton.addEventListener('click', () =>{
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })