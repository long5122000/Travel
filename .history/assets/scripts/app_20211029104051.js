/* Show menu */
const navMenu = document.getElementById('nav-menu')
 const   navToggle = document.getElementById('nav-toggle')
    navClose = document.getElementById('nav-close')
   
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}