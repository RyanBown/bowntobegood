
function getMenuBar(webpage, pagename){
    var menubar = `   <div class="navbar">
    <a href="island.html" class="logo">Taniti</a>
    <a id="aActive" class="active" href="` + webpage + `">` + pagename + `</a>
    <div class="dropdown">
      <button class="dropbtn">Attractions
       
      </button>
      <div class="dropdown-content">
        <a href="restaurants.html">Restaurants</a>
        <a href="lodging.html">Lodging</a>
        <a href="entertainment.html">Entertainment</a>
        <a href="sightseeing.html">Sightseeing</a>
        <a href="transportation.html">Transportation</a>
        <a href="groundtransportation.html">Ground Transportation</a>
        <a href="markets.html">Markets</a>
      </div>
    </div>
    <a href="faq.html">FAQs</a>
    <a href="about.html">About</a>
    <a href="contactus.html">Contact Us</a>

  </div>
  <br>`

  return menubar

  /* <i class="fa fa-caret-down"></i> */
}

function getFootNav(){
    var footer = ` <div class="column bi" style="background-color:#333;height: 60px; ">
          
    <p class ="footercontact">Contact Us at</p>
    <p class ="footercontact"><a class="footerlink" href="mailto:island@bowntobegood.com">island@bowntobegood.com</a></p>
  </div>
  
  <div class="column bi" style="background-color:#333;height: 60px; color:#FFF ">
    <a id="facebook" href="#facebook" class="fa fa-facebook"></a>
    <a id="twitter" href="#twitter" class="fa fa-twitter"></a>
    <a id="youtube" href="#youtube" class="fa fa-youtube"></a>
    <a id="instagram" href="#" class="fa fa-instagram"></a>
  </div> `

  return footer

}


export {getMenuBar, getFootNav}
  