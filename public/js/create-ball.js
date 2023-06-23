const checkboxes = document.querySelectorAll(`.bola-escollha-input`);
const materialRadios = document.querySelectorAll(".select-material");
const sportRadios = document.querySelectorAll(".select-sport");
const sectionRadios = document.querySelectorAll(".select-section");

var check = 0;
var currRadio = undefined;

const parsedCookies = document.cookie
    .split("; ")
    .map((cookie) => {
        const parsedCookie = {}
        const cookieInfo = cookie.split("=");
        parsedCookie[`${cookieInfo[0]}`] = cookieInfo[1];
        return parsedCookie;
    })
    .reduce((parsedCookies, currCookie) => {
        if (!parsedCookies) parsedCookies = {};
        parsedCookies[Object.keys(currCookie)[0]] = Object.values(currCookie)[0];
        return parsedCookies;
    }, {})

if (!parsedCookies.createLevelCounter) {
    console.log("não tem cookie");
    document.cookie = "createLevelCounter=0";
    var counter = 0;
} else {
    console.log(`tem cookie: '${parsedCookies.createLevelCounter}'`);
    var counter = parsedCookies.createLevelCounter;
}

/**
 * @namespace Mano
 * @type {Object}
 * @property {string} tipo
 * @property {string} material
 * @property {number} tamanho
 */
var ballConfig = {
    tipo: "",
    material: "",
    tamanho: 0
}

/** @type {HTMLElement} */
var buttonsNext = document.getElementsByClassName("button-avancar");
/** @type {HTMLElement[]} */
var create = document.querySelectorAll(".create-level");
/** @type {HTMLElement[]} */
var progress = document.getElementsByClassName("place-holder");

create[counter].style.display = "block";

function clearRadio(radio, level) {
    currRadio = currRadio ? currRadio : radio;
    if (currRadio !== radio) {
        currRadio.checked = 0;
        check = 0;
    }
    
    check++;
    radio.checked = check % 2;
    
    if (radio.checked == 1){
        console.log(`checked ${radio.checked}`);
        buttonsNext[level].style.backgroundColor = `green`
        buttonsNext[level].addEventListener("click", () => {
            counter = level;
            console.log("nos sab mt");
            const levels = [
                "sport",
                "material",
                "gomo",
            ]
            
            const isRadioLevel = levels[level] ? true : false;
            
            if (isRadioLevel) {
                const oneRadioIsChecked = document.querySelector(`.select-${levels[level]}:checked`);
                console.log(oneRadioIsChecked);
                
                if (!oneRadioIsChecked) return;
            }
            
            console.log("vdd manja mt slk", level);
            counter++;
            for (let i = 0; i < 5; i++) {
                // Seta o display como "none" para todas as sessões
                create[i].style.display = "none";
            }
            // Dá um display "block" pra mostrar só uma
            console.log(create[counter]);
            create[counter].style.display = "block";
            document.cookie = `createLevelCounter=${counter}`;
            document.cookie = `ballConfig=${JSON.stringify(ballConfig)}`;
        })
        
    } else {
        console.log(`not checked ${radio.checked}`);
        buttonsNext[level].style.backgroundColor = `gray`

    }
    currRadio = radio;
}


function reset(cLevel){
    counter=cLevel;
    for (let i = 0; i < 5; i++) {
        // Seta o display como "none" para todas as sessões
        create[i].style.display = "none";
    }
    create[counter].style.display = "block";
    document.cookie = `createLevelCounter=${counter}`;
    document.cookie = `ballConfig=${JSON.stringify(ballConfig)}`;
}


for (let i = 0; i < buttonsNext.length; i++) {
    // buttonsNext[i].addEventListener("click", () => {
    //     counter++;
    //     console.log(counter);
    //     for (let i = 0; i < 5; i++) {
    //         // Seta o display como "none" para todas as sessões
    //         create[i].style.display = "none";
    //     }
    //     // Dá um display "block" pra mostrar só uma
    //     create[counter].style.display = "block";
    //     document.cookie = `createLevelCounter=${counter}`;
    //     document.cookie = `ballConfig=${JSON.stringify(ballConfig)}`;
    // 
}
