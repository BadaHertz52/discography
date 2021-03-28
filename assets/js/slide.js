//변수 지정
const sliderWrapper = document.getElementsByClassName('mv_container');
const sliderContainer = document.getElementsByClassName('slider-container');
const slides = document.getElementsByClassName('slide');
const slideCount = slides.length ;
const navPrev = document.getElementById('prev');
const navNext = document.getElementById('next')
;
let currentIndex=0 ;
let topHeight =0 ; 

//슬라이드의 높이 확인, 가장 높은 슬라이드의 높이를 부모(slider-container ,container)의 높이로 지정
function calculateTallSlide () {
  for (let i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight ) {
      topHeight = slides[i].offsetHeight;
    }
    sliderWrapper[0].style.height = topHeight +'px' ;
    sliderContainer[0].style.height = topHeight + 'px' ;
    
  }}
  calculateTallSlide ();
//슬라이드가 있으면  slide를 가로로 배열
function rowSlide() {for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = i * 125 +'%';
} } 
rowSlide();
//슬라이드 이동 함수 , slide-container을 이동시킴
function goToSlide (idx) {
  sliderContainer[0].style.left =-125 * idx +'%';
  sliderContainer[0].classList.add('animated');
  currentIndex = idx;
  updateNav();
  }
goToSlide(0);

function updateNav() {
    if (currentIndex == 0) {
      navPrev.classList.add('disabled');
    } 
    else {
      navPrev.classList.remove('disabled');
    };

    if (currentIndex == slideCount-1 ) {
      navNext.classList.add('disabled');
    } 
    else {
      navNext.classList.remove('disabled');
    }
    
  }
  
//버튼을 클릭하여 슬라이드 이동시키기
navPrev.addEventListener(
  'click' ,function (event){
       event.preventDefault();
    goToSlide(currentIndex -1);
    console.log(currentIndex);
  }
) ;

navNext.addEventListener(
  'click' ,function (event){
      event.preventDefault();
    goToSlide(currentIndex + 1);
    console.log(currentIndex);
  }
);