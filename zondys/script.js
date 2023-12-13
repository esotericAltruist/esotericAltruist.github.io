window.addEventListener('resize', changeStyle);

function changeStyle() { 
    var theme = document.getElementsByTagName('link')[0]; 

      // Change the value of href attribute  
      // to change the css sheet. 
      if (screen.width <= 1000) { 
          theme.setAttribute('href', 'style.css'); 
      } else { 
          theme.setAttribute('href', 'desktop-style.css'); 
      } 
} 

function changeSlide() {
    var index = 1
    var slides = document.getElementsByClassName("carousel-img");

    for (i = 1; i < slides.length; i++) {
        if (i > slides.length)
            i=1;
        
        slides[i].id = "hidden"
        slides[i-1].id = null;
}
}
