// Напиши скрипт который, при наборе текста в инпуте 
// input#name - input(событие input), подставляет его текущее 
// значение в span#name - output.Если инпут пустой, в спане должна 
// отображаться строка "Anonymous".
// =============================================================
const inputEl = document.querySelector('#name-input');
let outEl = document.querySelector('#name-output');
const defaultTextInput = outEl.textContent;
inputEl.addEventListener('input', onInputField);
function onInputField(event) {
    outEl.textContent = event.currentTarget.value;
    if (outEl.textContent === '') {outEl.textContent = defaultTextInput};
    // console.log("outEl.textContent", outEl.textContent)
}
