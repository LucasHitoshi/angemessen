const cartItemsWrapper = document.querySelector(".items-carrinho");
const cepValidationFormFog = document.querySelector("#cep-validation-form-fog");
const paymentValidationFormFog = document.querySelector("#payment-validation-form-fog");
const closeCepValidationFormFog = document.querySelector("#exit-cep-validation-form");
const closePaymentValidationFormFog = document.querySelector("#exit-payment-validation-form");
const templateCartItem = document.querySelector("#item-cart-template");
const cepValidatorForm = document.querySelector("#cep-validator-form");
const paymentValidatorForm = document.querySelector("#payment-validator-form");
const cardPaymentOption = document.querySelector("#card");
const pixPaymentOption = document.querySelector("#pix");
const ticketPaymentOption = document.querySelector("#ticket");
const cepValidationTip = document.querySelector("#cep-validation-tip");
const sepValidationSuccess = document.querySelector("#cep-sucess-validation-result-box");
const sepValidationError= document.querySelector("#cep-error-validation-result-box");
const cepCityAndDistrict = document.querySelector("#cep-city-n-district");
const cepNeighborhood = document.querySelector("#cep-neighborhood");
const selectLocationButton = document.querySelector("#select-loc-button");
const selectPayMethod = document.querySelector("#set-payment-button");
const selectedPayMethod = document.querySelector("#selected-pay-method");
const selectedCEP = document.querySelector("#selected-cep");
const inputCEP = document.querySelector("#cep");
const API_URI_cartItems = "http://localhost:3000/cart/balls";
const API_URI_userInfo = "http://localhost:3000/api/user/session";


selectLocationButton.addEventListener("click", () => {
    cepValidationFormFog.style.display = "flex";
});

selectPayMethod.addEventListener("click", () => {
    paymentValidationFormFog.style.display = "flex";
});

closeCepValidationFormFog.addEventListener("click", () => {
    cepValidationFormFog.style.display = "none";
    inputCEP.value = "";
});

closePaymentValidationFormFog.addEventListener("click", () => {
    paymentValidationFormFog.style.display = "none";
});

cepValidatorForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cepInput = document.querySelector("#cep");
    var cep = cepInput.value.toString();
    while (/[\s|-]/.test(cep)) cep = cep.replace(/(\s|-)/, "");
    console.log(cep);

    const validantionURL = `http://localhost:3000/validate-cep?cep=${cep}`;

    const validationResult = await (await fetch(validantionURL)).json();
    const cepIsValid = validationResult.isValid;

    if (cepIsValid) {
        cepValidationTip.style.display = "none";
        sepValidationSuccess.style.display = "flex";
        sepValidationError.style.display = "none";
        
        cepCityAndDistrict.innerHTML = `${validationResult.cepInfo.localidade} - ${validationResult.cepInfo.uf}`;
        cepNeighborhood.innerHTML = validationResult.cepInfo.bairro;
        selectedCEP.innerHTML = cep;
        selectedCEP.classList.remove("not-selected");
    } else {
        cepValidationTip.style.display = "none";
        sepValidationError.style.display = "flex";
        sepValidationSuccess.style.display = "none";
        
        cepCityAndDistrict.innerHTML = "";
        cepNeighborhood.innerHTML = "";
    }

    console.log(validationResult);
});

const products = fetch(API_URI_cartItems)
    .then(response => response.json())
    .then(response => {
        if (response.length === 0) document.querySelector(".no-balls").style.display = "flex";

        console.log(response);
        
        for (const product of response) {
            console.log(product);
            const newCartProduct = templateCartItem.cloneNode(true);
            cartItemsWrapper.appendChild(newCartProduct);

            newCartProduct.id = "";
            newCartProduct.querySelector(".ball-image").src = product.image;
            newCartProduct.querySelector(".ball-sport").innerHTML = product.sport;
            newCartProduct.querySelector(".ball-name").innerHTML = product.name;
            newCartProduct.querySelector(".ball-price").innerHTML = `${product.price.value.int},${product.price.value.cent}`;
            newCartProduct.querySelector(".ball-qtty").innerHTML = product.qtty;
        }
    })
    .then(() => {
        const cartItems = document.querySelectorAll(".item-carrinho");
        const fog = document.getElementById("fog");
        
        fog.addEventListener("click", () => {
            fog.style.display = "none";
        })
        
        for (const item of cartItems) {
            const increaseButton = item.querySelector(".increase-qtty");
            const ballImage = item.querySelector(".item-carrinho > figure");
        
            increaseButton.addEventListener("click", () => {
                const qttySpan = item.querySelector(".ball-qtty");
                const currQtty = +qttySpan.innerHTML;
                if (currQtty === 99) return;
                qttySpan.innerHTML = currQtty + 1;
            });
        
            const decreaseButton = item.querySelector(".decrease-qtty");
            decreaseButton.addEventListener("click", () => {
                const qttySpan = item.querySelector(".ball-qtty");
                const currQtty = +qttySpan.innerHTML;
                if (currQtty === 1) return;
                qttySpan.innerHTML = currQtty - 1;
            });
        
            ballImage.addEventListener("click", () => {
                fog.style.display = "flex";
            })
        }
    })

const userInfo = fetch(API_URI_userInfo)
    .then(response => response.json())
    .then(response => {
        selectedPayMethod.innerHTML = response.order.payMethod
            ? ( () => {
                var data = response.order.payMethod;
                switch (data) {
                    case "card":
                        data = "Crédito";
                        break;
                    case "pix":
                        data = "PIX";
                        break;
                    case "ticket":
                        data = "Boleto";
                        break;
                    default:
                        data = "Não informado"
                        break;
                }
                selectedPayMethod.classList.remove("not-selected");
                return data;
            } )()
            : "Não informado";
        selectedCEP.innerHTML = response.endereco.cep
            ? ( () => {
                const data = response.endereco.cep;
                selectedCEP.classList.remove("not-selected");
                return data;
            } )()
            : "Não informado";
    });

inputCEP.addEventListener("input", (e) => {
    const cep = e.target.value;
    var cleanCep = cep
        .replace(/[^0-9]/, "")
        .slice(0, 8);
    e.target.value = cleanCep;
})
