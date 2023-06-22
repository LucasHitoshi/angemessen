const checkboxes = document.querySelectorAll(`.bola-escollha-input`);
var check;
/** @type {HTMLElement[]} */ 
const next = document.querySelectorAll(`.button-avancar`);
 
   function clearRadio(radio, level) {
    //   let radio = document.getElementById("radio_btn");
      if (radio.checked == 1){
        radio.checked++;
        console.log(`checked ${radio.checked}`);
        next[level].style.backgroundColor = `green`
        
      }else{
        radio.checked=0;
        console.log(`not checked ${radio.checked}`);
      }

   }


// for (const /** @type {HTMLInputElement} */ checkbox of checkboxes) {
//     if (checkbox.checked) {
//         "faz algo ai galaio";
//     }
// }
