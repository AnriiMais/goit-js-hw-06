//
// Напиши скрипт который:

// 1.Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item.
// 2.Для каждого элемента li.item в списке ul#categories, найдет и выведет 
// в консоль текст заголовка элемента(тега < h2 >) и количество элементов 
// в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
// 

console.log('Number of categories: ', document.querySelectorAll('h2').length);


const allItems = document.querySelectorAll('.item');

allItems.forEach(item => console.log('Category: ',
    item.querySelector('h2').textContent,'\nElements: ', item.querySelectorAll('li').length
));

