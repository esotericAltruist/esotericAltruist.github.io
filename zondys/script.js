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
