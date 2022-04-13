const slides = document.getElementsByClassName('slider__slide');
const arrowLeft = document.querySelector('.slider__arrow_left');
const arrowRight = document.querySelector('.slider__arrow_right');
let slideIndex = 1;

arrowLeft.addEventListener('click', minusSlide);
arrowRight.addEventListener('click', plusSlide);

function plusSlide(e) {
  e.preventDefault();
  slideIndex += 1;
  showSlides(slideIndex);
}
function minusSlide(e) {
  e.preventDefault();
  slideIndex -= 1;
  showSlides(slideIndex);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

showSlides(slideIndex);

const intervalIndex = setInterval(() => {
  slideIndex += 1;
  showSlides(slideIndex);
}, 4000);
