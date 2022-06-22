
import {getMenuBar, getFootNav} from './constants.js'


  window.addEventListener('load', function () {
    
    this.document.getElementById('divMenuBar').innerHTML = getMenuBar('markets.html', 'Markets')
    this.document.getElementById('divFooter').innerHTML = getFootNav();

  })

