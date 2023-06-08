const apiURI = "./api/balls?ball_name=random";
const productCardTemplate = document.getElementById("product-card-template");
const showcaseArea = document.querySelector(".showcase");
const showMoreProducts = document.getElementById("show-more-products");

const loadMoreProducts = (numberOfProducts) => {
    for (let i = 0; i < numberOfProducts; i++) {
        const newProduct = productCardTemplate.cloneNode(true);
    
        const productInfoRequest = new Request(apiURI, { method: "GET" });
        fetch(productInfoRequest)  // <- MT OP
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong on API server!");
                }
            })
            .then((response) => {
                const productImageRequest = new Request(response.image, { method: "GET" });
                fetch(productImageRequest)  // <- MT OP TBM
                    .then((response) => response.blob())
                    .then((blob) => {
                        newProduct.querySelector(".product-image").src = URL.createObjectURL(blob);
                    });
    
                newProduct.id = "";
                newProduct.classList.remove("hide-product");
                newProduct.querySelector(".nome-produto").innerHTML = response.type;
                newProduct.querySelector(".product-material").innerHTML = response.material;
                newProduct.querySelector(".product-sport").innerHTML = response.sport;
                newProduct.querySelector(".product-brand").innerHTML = response.brand;
                newProduct.querySelector(".price").innerHTML = response.price;
                newProduct.querySelector(".to-product-page").href = `./produtos/desc?id=${response._id}`;
                
                showcaseArea.appendChild(newProduct);
            })
    }
    currShowcaseSize = +showcaseArea.style.maxHeight.replace("px", "");
    showcaseArea.style.maxHeight = `${currShowcaseSize + 1100}px`;
}

loadMoreProducts(24);

showMoreProducts.addEventListener("click", () => {
    loadMoreProducts(18);
})


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
