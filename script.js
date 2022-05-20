var imgSlider = document.getElementsByClassName("imgSlider");

var suivant = document.querySelector(".suivant");
var precedent = document.querySelector(".precedent");

var sizeImg = imgSlider.length;

compteur = 0;

function retirerClassImg() {
  for (i = 0; i < sizeImg; i++) {
    imgSlider[i].classList.remove("active");
  }
}

suivant.addEventListener("click", function () {
  compteur++;
  retirerClassImg();
  if (compteur >= sizeImg) {
    compteur = 0;
  }
  imgSlider[compteur].classList.add("active");
});

precedent.addEventListener("click", function () {
  compteur--;
  retirerClassImg();
  if (compteur < 0) {
    compteur = sizeImg - 1;
  }
  imgSlider[compteur].classList.add("active");
});

window.addEventListener("keydown", function (event) {
  if (event.key == "ArrowRight") {
    compteur++;
    retirerClassImg();
    if (compteur >= sizeImg) {
      compteur = 0;
    }
    imgSlider[compteur].classList.add("active");
    console.log(event);
  } else if (event.key == "ArrowLeft") {
    compteur--;
    retirerClassImg();
    if (compteur < 0) {
      compteur = sizeImg - 1;
    }
    imgSlider[compteur].classList.add("active");
  }
});

setInterval(function () {
  compteur++;
  retirerClassImg();
  if (compteur >= sizeImg) {
    compteur = 0;
  }
  imgSlider[compteur].classList.add("active");
}, 5000);
