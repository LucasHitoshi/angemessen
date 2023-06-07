var counter = 0;

/**
 * @namespace Mano
 * @type {Object}
 * @property {string} tipo
 * @property {string} material
 * @property {number} tamanho
 */
var ballConfig = {
    tipo: undefined,
    tamanho: undefined,
    material: undefined
}

/** @type {HTMLElement} */
var buttonsNext = document.getElementsByClassName("button-avancar");
/** @type {HTMLElement[]} */
var create = document.getElementsByClassName("create");
var progress = document.getElementsByClassName("place-holder")

create[counter].style.display = "block";
function reset(cLevel){
    counter=cLevel;
    for (let i = 0; i < 5; i++) {
        // Seta o display como "none" para todas as sessões
        create[i].style.display = "none";
    }
    create[counter].style.display = "block";
}

for (let i = 0; i < buttonsNext.length; i++) {
    buttonsNext[i].addEventListener("click", () => {
        counter++;
        console.log(counter);
        for (let i = 0; i < 5; i++) {
            // Seta o display como "none" para todas as sessões
            create[i].style.display = "none";
        }
        create[counter].style.display = "block";
        
    })
}
