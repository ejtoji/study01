const body = document.querySelector("body");
<<<<<<< HEAD

const img_nmuber = 3;

function paintImage()

function genRandom(){
    const nmmber = Math.floor(math.genRandom * 5);
    return number
=======
const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `unsplash_${imgNumber + 1}.jpg`;
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
>>>>>>> AE120505
}

function init(){
    const randomNumber = genRandom();
<<<<<<< HEAD
}
init();
=======
    paintImage(randomNumber);
}
init();
>>>>>>> AE120505
