// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputElRange = document.querySelector("#font-size-control");
const textFontChangeEl = document.querySelector("#text");

inputElRange.addEventListener("input", onInputFormRange);

function onInputFormRange(event) {
  console.log(event);
  textFontChangeEl.style.fontSize = `${event.currentTarget.value}px`;
}
