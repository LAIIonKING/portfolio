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
    const link = event.target.dataset.link;
    scrollIntoView(link);
})


const topbtn = document.querySelector('.top-btn');
document.addEventListener('scroll', () => {
    if(window.scrollY >400) {
        topbtn.classList.add('visible');
    }else{
        topbtn.classList.remove('visible');
    }
})
topbtn.addEventListener('click', () => {
    scrollIntoView('#home');
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}