const ballsQueryLimit = +document.currentScript.src.split("?")[1].replace("limit=", "");
const apiURI = `./api/balls?ball_name=random&limit=${ballsQueryLimit}`;  // TODO: Trocar 'ball_name' por 'ball_id'
const productCardTemplate = document.querySelector("#product-card-template");
const showcaseArea = document.querySelector("#product-list");
const showMoreProducts = document.querySelector("#show-more-products");

const loadMoreProducts = (/* numberOfProducts */) => {
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
                newProduct.querySelector(".price").innerHTML = `${Math.floor(product.price.value.int*0.6)},${product.price.value.cent}`;
                newProduct.querySelector(".money-sign").innerHTML = product.price.sign;
                newProduct.querySelector(".to-product-page").href = `./produtos/${product._id}/desc`;
                newProduct.querySelector(".ver-sport-icon").src = `http://localhost:3000/assets/icons/${product.sport}-icon.png`;
                newProduct.querySelector(".ver-material-icon").src = `http://localhost:3000/assets/icons/${product.material}-icon.png`;
                newProduct.querySelector(".ver-brand-icon").src = `http://localhost:3000/assets/icons/${product.brand}-icon.png`;
                newProduct.querySelector(".hor-sport-icon").src = `http://localhost:3000/assets/icons/${product.sport}-icon.png`;
                newProduct.querySelector(".hor-material-icon").src = `http://localhost:3000/assets/icons/${product.material}-icon.png`;
                newProduct.querySelector(".hor-brand-icon").src = `http://localhost:3000/assets/icons/${product.brand}-icon.png`;
                newProduct.querySelector(".operation-button-wrapper > a.buy-now").href = `http://localhost:3000/buy-now/${product._id}`;
                newProduct.querySelector(".operation-button-wrapper > a.to-cart").href = `http://localhost:3000/add-to-cart/${product._id}`;
                
                showcaseArea.appendChild(newProduct);

                console.log(showcaseArea)
            });
        })

    currShowcaseSize = +showcaseArea.style.maxHeight.replace("px", "");
    showcaseArea.style.maxHeight = `${currShowcaseSize + 1100}px`;
}

loadMoreProducts();

showMoreProducts ? showMoreProducts.addEventListener("click", () => {
    loadMoreProducts();
}) : null;

// Victor: *Simbologias estranhas*
// Lucas: q isso vitin
// Victor: olha lá embaixo

// TODO: Não apagar esse salve
// Victor: salvado
// Victor: Você viu que é obrigatório o documento estar comentado?

// Lucas: vi sim
// Lucas: mas cara, vamos fazer um código bonito e bem léxico, assim quem ler vai entender e não vai ser necessário comentário pra caramba
// Lucas: além disso, tu viu que a gente tem um folder chamado: "docs"? lá é onde a gente temq  botar a documentação da API, da página de CRIE, etc
// Lucas: pq a gente n tá conversando pelo dc? 
// Victor: não existe motivo para conversar lá
// Lucas: P O É T I C O
// Lucas: se liga na tech que eu vou digitar aqui nessa arquivo: 'fetch'
// Victor: não to ligated nessa tech
// Lucas: ela pega dados de uma API via requisão HTTP (get, post, etc)
// Victor: hmmm
// Lucas: aqui eu vou pegar os dados do produto pela nossa api
// Victor: bora deixar essa conversa pra sora ver
// Lucas: claro po
// Lucas: SORA, TE AMO, DÁ UMA NOTA EXTRA PRA GENTE
// Victor: O que é que tá acontecendo no terminal?
// Lucas: eu to fazendo requisições pra nossa API, daí tá poluindo mt, vou apagar o 'console.log' lá
