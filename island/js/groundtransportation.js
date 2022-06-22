import { showSlides, currentSlide, plusSlides, SetEventListenersToDots} from '/static/js/slideshow.js'

import {getMenuBar, getFootNav} from './constants.js'


  window.addEventListener('load', function () {
    
    this.document.getElementById('divMenuBar').innerHTML = getMenuBar('groundtransportation.html', 'Ground Transportation')
    this.document.getElementById('divFooter').innerHTML = getFootNav();
    SetEventListenersToDots( 'sldPromo','dotPromo')
    showSlides(1, 'sldPromo','dotPromo')

  })


document.getElementById('aPrevPromo').addEventListener('click', function(){
  plusSlides(-1, 'sldPromo', 'dotPromo')
})

document.getElementById('aNextPromo').addEventListener('click', function(){
  plusSlides(1, 'sldPromo', 'dotPromo')
})