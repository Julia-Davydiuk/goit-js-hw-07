// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

//Вешаете слушатель на инпут, слушаете событие input и value подставляете в фонт-сайз спана)
const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', (e) => {
    spanRef.style.fontSize = e.target.value + 'px';
});
