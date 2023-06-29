const checkboxes = document.querySelectorAll(`.bola-escolha-input`);
const materialRadios = document.querySelectorAll(".select-material");
const sportRadios = document.querySelectorAll(".select-sport");
const sectionRadios = document.querySelector(".select-section");

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
// tipo: "",
// material: "",
// tamanho: 0
var ballConfig = {
    sport: [
        {
            "name": "Futebol",
            "price": {
                "sign": "R$",
                "value": 39.90
            },
            "view": {
                "image": "/api/images?ball_type=futebol",
                "plainImage": "/api/plain-image?ball_type=futebol"
            }
        },
        {
            "name": "Basquete",
            "price": {
                "sign": "R$",
                "value": 69.90
            },
            "view": {
                "image": "/api/images?ball_type=basquete",
                "plainImage": "/api/plain-image?ball_type=basquete"
            }
        },
        {
            "name": "Volêi",
            "price": {
                "sign": "R$",
                "value": 39.90
            },
            "view": {
                "image": "/api/images?ball_type=volei",
                "plainImage": "/api/plain-image?ball_type=Volêi"
            }
        }
    ],
    material: [
        {
            "name": "couro",
            "price": {
                "sign": "R$",
                "value": 109.90
            },
            "image": "/api/images?ball_type=futebol"
        },
        {
            "name": "borracha",
            "price": {
                "sign": "R$",
                "value": 49.90
            },
            "image": "/api/images?ball_type=futebol"
        },
        {
            "name": "madeira",
            "price": {
                "sign": "R$",
                "value": 159.90
            },
            "image": "/api/images?ball_type=futebol"
        }
    ],
    section: [
        {
            "name": "clássico",
            "image": "/api/images?ball_type=futebol"
        }
    ]
};

/** @type {HTMLElement} */
var buttonsNext = document.getElementsByClassName("button-avancar");
/** @type {HTMLElement[]} */
var create = document.querySelectorAll(".create-level");
/** @type {HTMLElement[]} */
var progress = document.getElementsByClassName("place-holder");

create[counter].style.display = "block";
const levels = [
    "sport",
    "material",
    "section",
    "color",
    "final",
]
const radioLevels = [
    "sport",
    "material",
    "section",
]
for(let i = 0; i < 5; i++){
if(radioLevels[i] !== levels[i]){
    buttonsNext[i].style.backgroundColor = `green`
    console.log("opa")
    buttonsNext[i].addEventListener("click", () => {
        create[i].style.display = "none";
        i++
        create[i].style.display = "block";
        document.cookie = `createLevelCounter=${counter}`;
        document.cookie = `ballConfig=${JSON.stringify(ballConfig)}`;
    })
} 


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
            
            
            // const isRadioLevel = levels[level] ? true : false;
            

            // if (isRadioLevel) {
            //     const oneRadioIsChecked = document.querySelector(`.select-${levels[level]}:checked`);
            //     console.log(oneRadioIsChecked);
                
            //     if (!oneRadioIsChecked) return;
            // } 

            const isRadioLevel = radioLevels[level] ? true : false;
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
    // })
}
