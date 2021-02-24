// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('input');

inputRef.addEventListener('input', e => {
const value = e.target.value;
console.dir(value); 

const spanRef = document.querySelector('#name-output');
  if(!value) {
      spanRef.textContent = 'незнакомец';
  } else {
      spanRef.textContent = value;
  };
});