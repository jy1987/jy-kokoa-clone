const body = document.querySelector("body");

const IMG_NUMBER = 7;
let initNum = 1;

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function paintImage() {
  genRandom();
  console.log(genRandom());
  setInterval(genRandom, 3000);
  const k = number;
  const image = new Image();
  image.src = `images/${k}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

/*function makeAllImg() {
  for (var i = 1; i < IMG_NUMBER; i += 1) {
    paintImage(i);
  }
}*/
function init() {
  paintImage();
}

init();
