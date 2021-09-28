// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsElemBox = document.querySelector('#ingredients');
const ingredientsEl = ingredients.map(item => {

  const liElem = document.createElement('li');
  liElem.textContent = item;
  // console.log("item", item)
  
  liElem.classList.add('item');

  return liElem;
});
// console.log("ingredientsEl", ingredientsEl);
ingredientsElemBox.append(...ingredientsEl);
