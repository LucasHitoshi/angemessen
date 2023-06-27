const hamburguerMenu = document.querySelector("#menu-hamburguer");
const thickFog = document.querySelector("#thick-fog");
const sideBar = document.querySelector("#side-bar");

hamburguerMenu.addEventListener("click", () => {
    if (hamburguerMenu.checked) {
        thickFog.style.display = "block";
        sideBar.style.margin = "0 0 0 0";
        thickFog.style.opacity = "1";
    } else {
        thickFog.style.display = "none";
        sideBar.style.margin = "0 0 0 -45rem";
        thickFog.style.opacity = "0";
    }
});
