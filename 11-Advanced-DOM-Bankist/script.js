'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

document.querySelectorAll('.nav__link').forEach(el => el.addEventListener('click',function(e){
  e.preventDefault();
}));

document.querySelector('.nav__links').addEventListener('click',function(e){
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
});

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  if(!clicked.classList.contains('operations__tab--active')){
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');    
    tabsContent.forEach(content => content.classList.remove('operations__content--active'));
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
  }
});



console.log(document.querySelector('h1').textContent);
console.log(document.querySelector('h1').previousElementSibling);



const slides =  document.querySelectorAll('.slide');
const btnLeft =  document.querySelector('.slider__btn--left');
const btnRight =  document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;
console.log(dotsContainer);

const createDots = function(){
  slides.forEach((_,i) => dotsContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${i}"></button`));
}
createDots();

dotsContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
    dotsContainer.querySelectorAll('.dots__dot').forEach(child => child.classList.remove('dots__dot--active'));
    goToSlide(e.target.dataset.slide);
    e.target.classList.add('dots__dot--active');
  }
})

const goToSlide = function(slide) {
  slides.forEach((s,i) => {
    s.style.transform = `translate(${(i - slide) * 100}%`;
  });
}
goToSlide(0);

const nextSlide = function() {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else curSlide++;
  goToSlide(curSlide);
}
const prevSlide = function() {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else curSlide--;
  goToSlide(curSlide);
}
btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click', prevSlide);
document.addEventListener('keydown', function(e){
  e.key === 'ArrowRight' && nextSlide();
  e.key === 'ArrowLeft' && prevSlide();
});

// const styleSection = function(entries,observer){
//   const [entry] = entries;
//   console.log(entry);
//   if(entry.isIntersecting){
//     entry.target.classList.remove('section--hidden');
//     observer.unobserve(entry.target);
//   }
  
// }

// const sectionObserver = new IntersectionObserver(styleSection,{
//   root:null,
//   threshold: 0.1,
// });

// const sections = document.querySelectorAll('.section');
// sections.forEach(section => {
//   sectionObserver.observe(section);
//   section.classList.add('section--hidden');
// });
