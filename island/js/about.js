

import {getMenuBar, getFootNav} from './constants.js'

  window.addEventListener('load', function () {
    this.document.getElementById('divMenuBar').innerHTML = getMenuBar('about.html', 'About');
    this.document.getElementById('divFooter').innerHTML = getFootNav();

  })

