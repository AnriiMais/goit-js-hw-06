// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте
// data - length.
// Если введено подходящее количество символов, то border инпута 
// становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.
// =========================================================
const inputElem = document.querySelector('#validation-input');
inputElem.addEventListener('blur', onInputFocusLost);
function onInputFocusLost(event) {
    inputElem.classList.remove('valid', 'invalid');
    if (inputElem.value.length === Number(inputElem.dataset.length)) {
        inputElem.classList.add('valid');
    } else inputElem.classList.add('invalid');
}