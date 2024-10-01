document.querySelector('.form__button').addEventListener('click', function() {
  const inputText = document.querySelector('.form__input').value;
  const outputTextContainer = document.querySelector('.output__text');
  
  outputTextContainer.innerHTML = ''; // Очищення попереднього тексту
  
  // Додавання кожної літери як окремого елементу
  inputText.split('').forEach(char => {
    const span = document.createElement('span');
    span.classList.add('output__char');
    span.textContent = char;
    outputTextContainer.appendChild(span);
  });
});
