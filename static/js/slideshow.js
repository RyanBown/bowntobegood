//let slideIndex = 1;
//showSlides(slideIndex, idSlides, idDot);

// Next/previous controls
function plusSlides(n, idSlides, idDot) {
  var activeSlide = currentSlide(idDot)
  showSlides(activeSlide+n, idSlides, idDot);
}

// Thumbnail image controls
function currentSlide(idDot) {
  var dots = document.getElementsByClassName(idDot)
  var activeSlide = 0
  for (var i = 0; i < dots.length; i++) {
    if (dots[i].className.includes(" active") ){
      activeSlide = i;
      return activeSlide
    }
  }
  return 0
}

function SetEventListenersToDots( sldClass,dotsClass){
  var dots = document.getElementsByClassName(dotsClass)
  for (var i = 0; i < dots.length; i++) {
    console.log('setting',dotsClass,'element',i)
    dots[i].addEventListener('click', function(){
      showSlides(i, sldClass, dotsClass)
      
    })
  }
 }


function showSlides(n, idSlides, idDot) {
  let i;
  let slides = document.getElementsByClassName(idSlides);
  
  let dots = document.getElementsByClassName(idDot);

  var slideIndex = 0

  var isGoToSlideOverZero = (n >= 0);
  var isGoToSlideUnderMax = (n < slides.length);

  if (isGoToSlideOverZero){
    if (isGoToSlideUnderMax){
      slideIndex = n
    }else{
      slideIndex = 0
    }
  }else{
    slideIndex = slides.length-1
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}


export {showSlides, currentSlide, plusSlides,SetEventListenersToDots }