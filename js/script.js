//  function slidePic() {
//      let pic = document.querySelectorAll('#slider>div')
//      for (let i = 0; i < pic.length; i++) {
//          pic[i].style.backgroundImage = `url('../img/slide${i}.png')`
//      }
//  }
//  slidePic()

/*let images = ["img/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg", "img/image.png", "img/hero_banner.png"];
let img = document.querySelector('#mainBackground');
let sliderNumbers = document.querySelectorAll('#sliderNumbers>div')
let count = 0
let countM = 1
function myFunction() {
       if(count == 0){
           countM = 1
       }
        img.setAttribute("style", `background-image: url(${images[count+=countM]})`)
        sliderNumbers[count].setAttribute("style", `width: 20px; background-color: white;`)
    if (count === images.length) {
        countM = -1
        sliderNumbers[count].setAttribute("style", `width: 8px; background-color: rgba(255, 255, 255, 0.53);`)
    }
    setInterval(myFunction, 3000)
}
myFunction()*/


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("myslides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}