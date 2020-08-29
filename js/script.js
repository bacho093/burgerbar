const slides = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

next.addEventListener('click', function() {
    nextSlide();
});
prev.addEventListener('click', function() {
    prevSlide();
});

function nextSlide() {
    if(index == slides.length - 1)
    {
        index = 0; 
    }
    else {
        index++;
    }
    changeSlide();
}

function prevSlide() {
    if(index == 0) {
        index = slides.length - 1;
    }
    else {
        index--;
    }
    changeSlide();
}

function changeSlide() {
    for(let i = 0; i<slides.length; i++)
    {
        slides[i].classList.remove('slide-active');
    }
    slides[index].classList.add('slide-active')
}