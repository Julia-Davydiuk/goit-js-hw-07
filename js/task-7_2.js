//Напиши скрипт, который для каждого элемента массива ingredients создаст 
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
//  Для создания DOM-узлов используй document.createElement().
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const newLiRef = ingredients.map(text => {
     const itemsRef = document.createElement('li');
     itemsRef.textContent = text;
     return itemsRef;
  });

 const ulRef = document.querySelector('#ingredients');
ulRef.append(...newLiRef)