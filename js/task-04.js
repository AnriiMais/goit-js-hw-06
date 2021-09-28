// Счетчик состоит из спана и кнопок, которые, при клике,
//     должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее 
// значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай 
// или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
// ============================================================//
let counterValue = 0;
// let currentValue = document.querySelector('#value').textContent;
console.log("counterValue =", counterValue, typeof (counterValue));
const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log("decrementBtn", decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log("incrementBtn", incrementBtn);

decrementBtn.addEventListener('click', onDecrementBtnClick);
function onDecrementBtnClick(event) {
    console.log('click')
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
}
incrementBtn.addEventListener('click', onIncrementBtnClick);
function onIncrementBtnClick(event) {
    console.log('click')
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}
