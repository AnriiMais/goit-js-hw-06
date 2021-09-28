// Напиши скрипт, который изменяет цвета фона элемента < body >
// через инлайн стиль при клике на button.change - color и выводит
// значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// getRandomHexColor();
// console.log("getRandomHexColor", getRandomHexColor());

const changeColorBtn = document.querySelector(".change-color");
const colorLog = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  const randomColor = getRandomHexColor();
  console.log("randomColor:", randomColor);
  document.querySelector("body").style.backgroundColor = randomColor;
  colorLog.textContent = randomColor;
}
