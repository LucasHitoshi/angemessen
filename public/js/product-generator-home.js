const apiURI = "./api/balls?ball_name=random&ball_qtty=24";  // TODO: Trocar 'ball_name' por 'ball_id'
const productCardTemplate = document.getElementById("product-card-template");
const showcaseArea = document.querySelector(".showcase");
const showMoreProducts = document.getElementById("show-more-products");

    const productInfoRequest = new Request(apiURI, { method: "GET" });
    fetch(productInfoRequest)  // <- MT OP
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                return response.json();
            } else {
                throw new Error("Something went wrong on API server!");
            }
        })
        .then((response) => {
            console.log(response);
            response.forEach(product => {
                const newProduct = productCardTemplate.cloneNode(true);
                const productImageRequest = new Request(product.image, { method: "GET" });
                fetch(productImageRequest)  // <- MT OP TBM
                    .then((product) => product.blob())
                    .then((blob) => {
                        /** @type {HTMLImageElement} */
                        const newProductImage = newProduct.querySelector(".product-image");
                        const newProductLoadingEffect = newProduct.querySelector(".loading");
                        newProductImage.src = URL.createObjectURL(blob);

                        const loaded = () => {
                            newProductImage.style.visibility = "visible";
                            newProductLoadingEffect.style.display = "none";
                        }

                        if (newProductImage.complete) {
                            loaded();
                        } else {
                            newProductImage.addEventListener("load", loaded);
                        }
                    });
    
                newProduct.id = "";
                newProduct.classList.remove("hide-product");
                newProduct.querySelector(".nome-produto").innerHTML = product.name;
                newProduct.querySelector(".product-image").src = product.image;
                newProduct.querySelector(".product-material").innerHTML = product.material;
                newProduct.querySelector(".product-sport").innerHTML = product.sport;
                newProduct.querySelector(".product-brand").innerHTML = product.brand;
                newProduct.querySelector(".price").innerHTML = `${product.price.value.int},${product.price.value.cent}`;
                newProduct.querySelector(".money-sign").innerHTML = product.price.sign;
                newProduct.querySelector(".to-product-page").href = `./produtos/${product._id}/desc`;
                
                showcaseArea.appendChild(newProduct);
            });
        })



