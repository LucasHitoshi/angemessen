const checkboxes = document.querySelectorAll(`.bola-escolha-input`);
const materialRadios = document.querySelectorAll(".select-material");
const sportRadios = document.querySelectorAll(".select-sport");
const sectionRadios = document.querySelector(".select-section");
const customBallSport = document.querySelector("#sport");
const customBallMaterial = document.querySelector("#material");
const customBallSections = document.querySelector("#sections");
const sectionOptionName = document.querySelector("#section-name");
const materialOptionName = document.querySelector("#material-name");
const sportOptionName = document.querySelector("#ball-name")
/** @type {HTMLImageElement} */
const optionSelectedSport = document.querySelector("#ball-image");
const optionSelectedMaterial = document.querySelector("#material-image");
const optionSelectedSections = document.querySelector("#section-image");

customBallSport.innerHTML = "Nenhuma opção selecionada";
customBallMaterial.innerHTML = "Nenhuma opção selecionada";
customBallSections.innerHTML = "Nenhuma opção selecionada";

var check = 0; //igualando o radio para não checkado
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
    }, {});

if (!parsedCookies.createLevelCounter) {
    console.log("não tem cookie");
    document.cookie = "createLevelCounter=0";
    var counter = 0;
} else {
    console.log(`tem cookie: '${parsedCookies.createLevelCounter}'`);
    var counter = parsedCookies.createLevelCounter;
}

/**
 * Simplesmente os dados da bola customizada
 * @namespace Mano
 * @type {Object}
 * @property {string} sport
 * @property {string} material
 * @property {string} sections
 */
const customBall = {
    sport: null,
    material: null,
    section: null
};


const buttonsNext = document.getElementsByClassName("next-button");
const create = document.querySelectorAll(".create-level");
const progress = document.getElementsByClassName("place-holder");
const finalizeBall = document.querySelector("#create-level");
const hiddenInputSport = document.querySelector("#hidden-input-sport");
const hiddenInputMaterial = document.querySelector("#hidden-input-material");
const hiddenInputSections = document.querySelector("#hidden-input-sections");
const hiddenInputColors = document.querySelector("#hidden-input-colors");
const imageCreate = document.querySelectorAll(".lateral-criar > div");
const sectionOptionImage = document.querySelector("#option-image-section");


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
        buttonsNext[i].style.backgroundColor = `green`; // Resposta visual para quando estiver disponível
        buttonsNext[i].addEventListener("click", () => { // Permissão para avançar
            i=counter
            create[i].style.display = "none"; // Pega a posição no array de etapas e deixa como 'display: none' para sumir
            i++
            create[i].style.display = "block"; // Pega a posição no array anterior+1 seta como 'display: block' para aparecer
            document.cookie = `createLevelCounter=${counter}`;
            document.cookie = `customBall=${JSON.stringify(customBall)}`;
        })
    } 


    function clearRadio(radio, level) { // Função ativado quando um radio é clicado
        currRadio = currRadio ? currRadio : radio;
        if (currRadio !== radio) {
            currRadio.checked[level] = 0;
            check = 0;
        }
        
        check++;
        radio.checked = check % 2;
        console.log(`level: ${level} radio: ${radio.checked} check: ${check}`);

        if (radio.checked == 1){ // Verifica se um radio está selecionado
            buttonsNext[level].style.backgroundColor = `green` // Resposta visual para quando puder clicar
            optionSelectedSport.src = `./api/images?ball_type=${radio.value}`;
            optionSelectedMaterial.src = `./api/material_image?material=${radio.value}`;
            optionSelectedSections.src = `../api/plain_image?ball_type=${customBall.sport}`
            sectionOptionName.innerHTML = `${radio.value}`
            sportOptionName.innerHTML = `${radio.value}`
            materialOptionName.innerHTML = `${radio.value}`
            

            imageCreate[level].style.display = "block"
            buttonsNext[level].addEventListener("click", () => {
                counter = level; // Seta o counter com a posição da etapa atual
                
                const isRadioLevel = radioLevels[level] ? true : false;
                if (isRadioLevel) {
                    const currRadio = radioLevelsObjs[level];
                    const oneRadioIsChecked = document.querySelector(`.select-${levels[level]}:checked`);
                    currRadio.value = oneRadioIsChecked.value;
                    
                    console.log(`${customBall.sport}`)
                    customBall[radioLevels[level]] = currRadio.value;

                    console.log(customBall);
                    // PEGAR AS CAIXAS DO html q estão as infos da bola customizada
                    customBallSport.innerHTML = `Bola de ${customBall.sport}`;
                    customBallMaterial.innerHTML = `${customBall.material}`;
                    customBallSections.innerHTML = `${customBall.section}`;
                    
                    document.querySelector("#final-ball-image").src = `http://localhost:3000/api/images?ball_type=${customBall.sport}`;
                    document.querySelector("#final-plain-ball-image").src = `http://localhost:3000/api/plain_image?ball_type=${customBall.sport}`;

                    sectionOptionImage.src = `./api/plain_image?ball_type=${customBall.sport}`;

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
                document.cookie = `customBall=${JSON.stringify(customBall)}`;
            })
            
        } else {
            buttonsNext[level].style.backgroundColor = `gray`; // Resposta visual para quando não puder clicar
            optionSelectedSport.src = `./api/images?ball_type=null`
            imageCreate[level].style.display = "none"
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
    document.cookie = `customBall=${JSON.stringify(customBall)}`;
    optionSelectedSport.src = `./api/images?ball_type=${customBall.sport}`;
    sportOptionName.innerHTML = `${customBall.sport}`
    optionSelectedMaterial.src = `./api/images?ball_type=${customBall.material}`;
    materialOptionName.innerHTML = `${customBall.material}`
    optionSelectedSections.src = `./api/images?ball_type=${customBall.section}`;
    sectionOptionImageOptionName.innerHTML = `${customBall.section}`
    
}
