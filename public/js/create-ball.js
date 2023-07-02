const checkboxes = document.querySelectorAll(`.bola-escolha-input`);
const materialRadios = document.querySelectorAll(".select-material");
const sportRadios = document.querySelectorAll(".select-sport");
const sectionRadios = document.querySelector(".select-section");

var check = 0; //igualando o radio para não checado
var currRadio = undefined; //verificar se o radio um radio foi selecionado

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
const levels = [ // Nomeando cada etapa do crie em ordem
    "sport",
    "material",
    "section",
    "color",
    "final",
];
const radioLevels = [ // Nomeando cada etapa com radio em ordem
    "sport",
    "material",
    "section",
];
const radioLevelsObjs = [
    hiddenInputSport,
    hiddenInputMaterial,
    hiddenInputSections
];

for(let i = 0; i < 5; i++) { // Repetir a ação durante toda a fase de criação
    if(radioLevels[i] !== levels[i]) { // Verificar se é uma etapa sem radio
        buttonsNext[i].style.backgroundColor = `green` // Resposta visual para quando estiver disponível
        buttonsNext[i].addEventListener("click", () => { // Permissão para avançar
            i=counter
            create[i].style.display = "none"; // Pega a posição no array de etapas e deixa como 'display: none' para sumir
            i++
            create[i].style.display = "block"; // Pega a posição no array anterior+1 seta como 'display: block' para aparecer
            document.cookie = `createLevelCounter=${counter}`;
            document.cookie = `ballConfig=${JSON.stringify(ballConfig)}`;
        })
    } 


    function clearRadio(radio, level) { // Função ativado quando um radio é clicado
        currRadio = currRadio ? currRadio : radio;
        if (currRadio !== radio) {
            currRadio.checked = 0;
            check = 0;
        }
        
        check++;
        radio.checked = check % 2;
        
        
        if (radio.checked == 1){ // Verifica se um radio está selecionado
            buttonsNext[level].style.backgroundColor = `green` // Resposta visual para quando puder clicar
            buttonsNext[level].addEventListener("click", () => {
                counter = level; // Seta o counter com a posição da etapa atual

                const isRadioLevel = radioLevels[level] ? true : false;
                if (isRadioLevel) {
                    const currRadio = radioLevelsObjs[level];
                    const oneRadioIsChecked = document.querySelector(`.select-${levels[level]}:checked`);
                    currRadio.value = oneRadioIsChecked.value;

                    if (!oneRadioIsChecked) return;
                } 
                counter++; // Seta o counter com a posição da próxima etapa
                for (let i = 0; i < 5; i++) {
                    // Seta o display como "none" para todas as sessões
                    create[i].style.display = "none";
                }
                // Dá um display "block" pra mostrar só uma etapa
                console.log(create[counter]);
                create[counter].style.display = "block";
                document.cookie = `createLevelCounter=${counter}`;
                document.cookie = `ballConfig=${JSON.stringify(ballConfig)}`;
            })
        } else {
            buttonsNext[level].style.backgroundColor = `gray`; // Resposta visual para quando não puder clicar
        }
        currRadio = radio;
    }
}


function reset(cLevel){ // Função ativada quando uma etapa anterior for selecionada
    counter=cLevel; // Puxa e seta o número gravado em cada etapa
    for (let i = 0; i < 5; i++) {
        // Seta o display como "none" para todas as sessões
        create[i].style.display = "none";
    }
    create[counter].style.display = "block"; // Pega o número e mostra somente a etapa respectiva
    document.cookie = `createLevelCounter=${counter}`;
    document.cookie = `ballConfig=${JSON.stringify(ballConfig)}`;
}

// finalizeBall.addEventListener("click", () => {

// })
