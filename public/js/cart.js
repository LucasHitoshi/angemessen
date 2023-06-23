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

