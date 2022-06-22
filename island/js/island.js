import { showSlides, currentSlide, plusSlides, SetEventListenersToDots} from '/static/js/slideshow.js'

import {getMenuBar, getFootNav} from './constants.js'

import {ResizeImagesToFitRatio} from '/static/js/main.js'


  window.addEventListener('load', function () {
    
    this.document.getElementById('divMenuBar').innerHTML = getMenuBar('island.html', 'Home');
    this.document.getElementById('divFooter').innerHTML = getFootNav();
    SetEventListenersToDots( 'sldPromo','dotPromo')
    SetEventListenersToDots( 'sldEvent','dotEvent')
    showSlides(1, 'sldPromo','dotPromo')
    showSlides(1, 'sldEvent','dotEvent')

  })



 document.getElementById('aPrevEvent').addEventListener('click', function(){
  plusSlides(-1, 'sldEvent', 'dotEvent')
})

document.getElementById('aNextEvent').addEventListener('click', function(){
  plusSlides(1, 'sldEvent', 'dotEvent')
})

document.getElementById('aPrevPromo').addEventListener('click', function(){
  plusSlides(-1, 'sldPromo', 'dotPromo')
})

document.getElementById('aNextPromo').addEventListener('click', function(){
  plusSlides(1, 'sldPromo', 'dotPromo')
})