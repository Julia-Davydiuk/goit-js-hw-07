// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
let spanRef = document.querySelector('#value');
let incrBtnRef = document.querySelector('#inc');
let decrBtnRef = document.querySelector('#dec');

incrBtnRef.addEventListener('click', (e) => {
    counterValue += 1;
    spanRef.innerText = counterValue;
});

decrBtnRef.addEventListener('click', (e) => {
  if (counterValue > 0) {
    counterValue -= 1;
    spanRef.innerText = counterValue;
  }
});