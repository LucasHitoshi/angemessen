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
            "image": "/api/images?ball_type=basquete",


            "material": [
                {
                    "name": "couro",
                    "price": {
                        "sign": "R$",
                        "value": 109.90
                    },
                    "image": "/api/material_image?material=couro",
                    "section": [
                        {
                            "name": "clássico",
                            "image": "/api/plain-image?ball_type=basquete",
                        }
                    ]
                },
                {
                    "name": "borracha",
                    "price": {
                        "sign": "R$",
                        "value": 49.90
                    },
                    "image": "/api/material_image?material=borracha",
                    "section": [
                        {
                            "name": "clássico",
                            "image": "/api/plain-image?ball_type=basquete",
                        },
                        {
                            "name": "moderna",
                            "image": "/api/plain-image?ball_type=modern_basquete"
                        }
                    ]
                },
                {
                    "name": "eva",
                    "price": {
                        "sign": "R$",
                        "value": 29.90
                    },
                    "image": "/api/material_image?material=eva",
                    "section": [
                        {
                            "name": "clássico",
                            "image": "/api/plain-image?ball_type=basquete",
                        },
                    ]
                },
                {
                    "name": "madeira",
                    "price": {
                        "sign": "R$",
                        "value": 159.90
                    },
                    "image": "/api/material_image?material=madeira"
                }
            ],



            "section": [
                {
                    "name": "clássico",
                    "image": "/api/plain-image?ball_type=basquete",
                },
                {
                    "name": "moderna",
                    "image": "/api/plain-image?ball_type=modern_basquete"
                }
            ]
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
            "image": "/api/material_image?material=couro"
        },
        {
            "name": "borracha",
            "price": {
                "sign": "R$",
                "value": 49.90
            },
            "image": "/api/material_image?material=borracha"
        },
        {
            "name": "eva",
            "price": {
                "sign": "R$",
                "value": 29.90
            },
            "image": "/api/material_image?material=eva"
        },
        {
            "name": "madeira",
            "price": {
                "sign": "R$",
                "value": 159.90
            },
            "image": "/api/material_image?material=madeira"
        }
    ]
};

const buttonsNext = document.getElementsByClassName("button-avancar");
const create = document.querySelectorAll(".create-level");
const progress = document.getElementsByClassName("place-holder");
const finalizeBall = document.querySelector("#create-level");
const hiddenInputSport = document.querySelector("#hidden-input-sport");
const hiddenInputMaterial = document.querySelector("#hidden-input-material");
const hiddenInputSections = document.querySelector("#hidden-input-sections");
const hiddenInputColors = document.querySelector("#hidden-input-colors");


create[counter].style.display = "block";
const levels = [
    "sport",
    "material",
    "section",
    "color",
    "final",
];
const radioLevels = [
    "sport",
    "material",
    "section",
];
const radioLevelsObjs = [
    hiddenInputSport,
    hiddenInputMaterial,
    hiddenInputSections
];

for(let i = 0; i < 5; i++) {
    if(radioLevels[i] !== levels[i]) {
        buttonsNext[i].style.backgroundColor = `green`
        console.log("opa")
        buttonsNext[i].addEventListener("click", () => {
            i=counter
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
                // console.log("nos sab mt");

                const isRadioLevel = radioLevels[level] ? true : false;
                if (isRadioLevel) {
                    const currRadio = radioLevelsObjs[level];

                    const oneRadioIsChecked = document.querySelector(`.select-${levels[level]}:checked`);
                    currRadio.value = oneRadioIsChecked.value;
                    // console.log(oneRadioIsChecked);
                    // console.log(currRadio.value);
                    
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
            buttonsNext[level].style.backgroundColor = `gray`;
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

// finalizeBall.addEventListener("click", () => {

// })
