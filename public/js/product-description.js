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

const productInfoRequest = new Request(productAPI_URL, { method: "GET" });
fetch(productInfoRequest)
    .then(response => response.json())
    .then(productInfo => {
        ballName.innerHTML = productInfo.type;
        ballPrice.innerHTML = productInfo.price;
        // ballQttyClassifications.innerHTML = productInfo.ballQttyClassifications;
        ballPrice.innerHTML = productInfo.price;
    })

// const productInfo = 
