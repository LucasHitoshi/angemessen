/** @type {HTMLElement} */
const carousel = document.getElementById("carousel");
/** @type {HTMLElement} */
const carouselLeftButton = document.getElementById("left-button");
/** @type {HTMLElement} */
const carouselRightButton = document.getElementById("right-button");
/** @type {HTMLElement[]} */
const carouselImages = document.getElementsByClassName("carousel-img");
var carouselCount = 0;

carouselLeftButton.addEventListener("click", () => {
    // if (carouselCount < 0) return;
    carouselCount--;
    console.log(carouselCount);
    if(carouselCount<0) { // Verifica se voltou mais posições do que o carrrossel possuí
        carouselCount=carouselImages.length - 1; // Avança para a última imagem
    }
});

carouselRightButton.addEventListener("click", () => {
    // if (carouselCount > carouselImages.length - 1) return;
    console.log(carouselCount);
    carouselCount++;
    if(carouselCount==carouselImages.length) { // Verifica se avançou mais posições do que o carrrossel possuí
        carouselCount=0; // Volta para a primeira imagem
    }
});

setInterval(() => {
    for (let i = 0; i < carouselImages.length; i++) {
        carouselImages[i].style.zIndex = 1;
    }
    carouselImages[carouselCount].style.zIndex = 10;
}, 1);
