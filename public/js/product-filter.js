/** @type {HTMLInputElement} */
const nameProductInput = document.getElementById("search-product");
/** @type {HTMLInputElement[]} */
const sportProductInputs = document.getElementsByName("sport_filter");
/** @type {HTMLInputElement[]} */
const materialProductInputs = document.getElementsByName("material_filter");
/** @type {HTMLInputElement[]} */
const brandProductInputs = document.getElementsByName("brand_filter");
/** @type {HTMLElement[]} */
const productCards = document.getElementsByClassName("product-card");
// setInterval(() => {
//     productCards = document.getElementsByClassName(productCardClass);
// }, 20);



nameProductInput.addEventListener("input", () => {
    const productQuery = nameProductInput.value.toLocaleLowerCase();
    if (productQuery !== "") {
        for (const /** @type {HTMLElement} */ card of productCards) {
            const productName = card
                .querySelector(".nome-produto")
                .textContent
                .toLocaleLowerCase();
            if (productName.includes(productQuery)) {
                console.log("a" + productQuery)
                card.classList.remove("hide-product");
            } else {
                card.classList.add("hide-product");
                console.log("b" + productQuery)
            }
        }
    } else {
        for (const /** @type {HTMLElement} */ card of productCards) {
            if (card.id === "product-card-template") continue;
            card.classList.remove("hide-product");
        }
    }
})

for (const sportProductInput of sportProductInputs) {
    sportProductInput.addEventListener("change", () => {
        const productSportQuery = sportProductInput.id;
        for (const /** @type {HTMLElement} */ card of productCards) {
            const productType = card
                .querySelector(".product-sport")  // TODO: Melhorar os esportes disponíveis
                .textContent
                .toLocaleLowerCase();
            if (productSportQuery === "all_sports") {
                card.classList.remove("hide-product-type");
            } else if (productType === productSportQuery) {
                card.classList.remove("hide-product-type");
            } else {
                card.classList.add("hide-product-type");
            }
        }
    })
}

for (const materialProductInput of materialProductInputs) {
    materialProductInput.addEventListener("change", () => {
        const productMaterialQuery = materialProductInput.id;
        for (const /** @type {HTMLElement} */ card of productCards) {
            const productMaterial = card
                .querySelector(".product-material")  // TODO: Melhorar os esportes disponíveis
                .textContent
                .toLocaleLowerCase();
            if (productMaterialQuery === "all_materials") {
                card.classList.remove("hide-product-material");
            } else if (productMaterial === productMaterialQuery) {
                // console.log("a" + productQuery)
                card.classList.remove("hide-product-material");
            } else {
                card.classList.add("hide-product-material");
                // console.log("b" + productQuery)
            }
        }
    })
}

for (const brandProductInput of brandProductInputs) {
    brandProductInput.addEventListener("change", () => {
        const productBrandQuery = brandProductInput.id;
        for (const /** @type {HTMLElement} */ card of productCards) {
            const productBrand = card
                .querySelector(".product-brand")  // TODO: Melhorar os esportes disponíveis
                .textContent
                .toLocaleLowerCase();
            if (productBrandQuery === "all_brands") {
                card.classList.remove("hide-product-brand");
            } else if (productBrand === productBrandQuery) {
                // console.log("a" + productQuery)
                card.classList.remove("hide-product-brand");
            } else {
                card.classList.add("hide-product-brand");
                // console.log("b" + productQuery)
            }
        }
    })
}
