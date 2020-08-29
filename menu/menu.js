const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
const sublist = document.querySelector('.sublist');
const pages = document.querySelector('.pages');

burger.addEventListener('click', function () {
    this.classList.toggle('toggle');
    navList.classList.toggle('nav-active');
});

pages.addEventListener('click', function() {
    sublist.classList.toggle('subnav-active');
});