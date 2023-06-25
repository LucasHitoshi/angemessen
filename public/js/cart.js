const cartItemsWrapper = document.querySelector(".items-carrinho");
const templateCartItem = document.querySelector("#item-cart-template");
const API_URI_cartItems = "http://localhost:3000/cart/balls";


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
