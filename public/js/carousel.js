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
    if(carouselCount<0) {
        carouselCount=carouselImages.length - 1;
    }
});

carouselRightButton.addEventListener("click", () => {
    // if (carouselCount > carouselImages.length - 1) return;
    console.log(carouselCount);
    carouselCount++;
    if(carouselCount==carouselImages.length) {
        carouselCount=0;
    }
});

setInterval(() => {
    for (let i = 0; i < carouselImages.length; i++) {
        carouselImages[i].style.zIndex = 1;
    }
    carouselImages[carouselCount].style.zIndex = 10;
}, 1);
