// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть
// по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением
// о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.Для доступа к элементам формы
// используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей
// формы методом reset.

const formNode = document.querySelector(".login-form");
const inputNodeArr = document.querySelectorAll("input");

formNode.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formObj = {};
  const formElem = event.currentTarget.elements;
  if (formElem.email.value === "" || formElem.password.value === "")
    alert("Все поля должны быть заполнены");
  else {
    inputNodeArr.forEach((elNode) => {
      formObj[elNode.name] = elNode.value;
    });
    console.log("formObj", formObj);
  }
  event.currentTarget.reset();
}
