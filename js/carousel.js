const carousel = document.getElementById("carousel");
const carouselLeftButton = document.getElementById("left-button");
const carouselRightButton = document.getElementById("right-button");
const carouselImages = document.getElementsByClassName("carousel-img");
var carouselCount = 0;

carouselLeftButton.addEventListener("click", () => {
    if (carouselCount === 0) return;
    carouselCount--;
});

carouselRightButton.addEventListener("click", () => {
    if (carouselCount === carouselImages.length - 1) return;
    carouselCount++;
});

setInterval(() => {
    for (let i = 0; i < carouselImages.length; i++) {
        carouselImages[i].style.zIndex = 1;
    }
    carouselImages[carouselCount].style.zIndex = 10;
}, 1);
