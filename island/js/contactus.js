

import {getMenuBar, getFootNav} from './constants.js'

  window.addEventListener('load', function () {
    this.document.getElementById('divMenuBar').innerHTML = getMenuBar('contactus.html', 'Contact Us');
    this.document.getElementById('divFooter').innerHTML = getFootNav();

  })

