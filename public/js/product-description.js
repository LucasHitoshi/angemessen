const buyButton = document.getElementById("buy-button");
const kartButton = document.getElementById("kart-button");
const productInfoCard = document.getElementById("ball-information");
const ballName = productInfoCard.querySelector("#ball-name");
const ballDescription = productInfoCard.querySelector("#ball-description");
const ballOldPrice = productInfoCard.querySelector("#old-ball-price");
const ballPrice = productInfoCard.querySelector("#ball-price");
const ballClassification = document.querySelectorAll("#stars-classification ul li");
const ballQttyClassifications = document.getElementById("qtty-classifications");
const ballSpecifications = document.getElementById("ball-specifications");
const ballSpecificationTemplate = document.getElementById("ball-specification-template");
const productID = document.URL.split('/')[document.URL.split('/').length - 2];
const productAPI_URL = `./../../api/ball/${productID}`;
const ballSmallImages = document.querySelectorAll(".small-img-bola")
const ballImages = document.querySelector(".img-ball")

const productInfoRequest = new Request(productAPI_URL, { method: "GET" });
fetch(productInfoRequest)
    .then(response => response.json())
    .then(productInfo => {
        ballName.innerHTML = productInfo.name;
        ballPrice.innerHTML = `${productInfo.price.value.int},${productInfo.price.value.cent}`;
        // ballQttyClassifications.innerHTML = productInfo.ballQttyClassifications;
        // ballPrice.innerHTML = productInfo.price.value.cent;
        ballImages.src = productInfo.image;
        // ballSmallImages.src = productInfo.image;
        ballDescription.innerHTML = productInfo.description
        ballOldPrice.innerHTML = `${productInfo.price.value.int + 30},${productInfo.price.value.cent}`

        for (const ballImage of ballSmallImages) {
            console.log(ballImage)
            ballImage.src = productInfo.image;
        }
    })

// const productInfo = 
