'use strict'

//Make navbar transparent when it is on top 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar__dark');
    } else{
        navbar.classList.remove('navbar__dark');
    }
}) 

//scrolling smooth when tapping on the navbarmenuitem
const navbarMenu = document.querySelector('.navbar__menu');
document.addEventListener('click', (event) => {
    console.log(event.target.dataset.link);
    const link = event.target.dataset.link;
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
})