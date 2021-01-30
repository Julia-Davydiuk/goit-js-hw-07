// //Напиши скрипт, который выполнит следующие операции.
// // Посчитает и выведет в консоль количество категорий в
//  ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// // Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега h2) и количество
//  элементов в категории (всех вложенных в него элементов li).
// // Например для первой категории получится:
// // Категория: Животные
// // Количество элементов: 4

const elemRef = document.querySelector('#categories');
console.dir(elemRef);

const sumСategories = elemRef.childElementCount;
console.log(`В списке ${sumСategories} категории.`);

const liRef = document.querySelectorAll('.item');

const itemsRef = liRef.forEach(elem => {
const titleRef = elem.firstElementChild.textContent;
const itemRef = elem.lastElementChild.children.length;
console.log(`Категория: ${titleRef}
Количество элементов: ${itemRef}`)
});