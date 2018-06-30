$(document).ready(function(){

  $(".showIt").hide();

})

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("picture");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



// upload feature

function loadImage(ev) {
  const album = document.getElementById("album");
  for (i = 0; i < ev.target.files.length; ++i) {
    console.log(ev.target.files[i]);
    let thumb = document.createElement("img");
    thumb.className += "picture cursor";
    thumb.style.width=("17%")
    thumb.src = URL.createObjectURL(ev.target.files[i]);
    album.appendChild(thumb);
    const bigCont = document.getElementById("container")
    let full = document.createElement("div")
    full.className += "mySlides";
    bigCont.appendChild(full)
    let bigImg = document.createElement("img")
    bigImg.className += "full"
    bigImg.src = URL.createObjectURL(ev.target.files[i])

  }
}
