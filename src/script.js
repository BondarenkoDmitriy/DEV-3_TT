document.querySelector('.form__button').addEventListener('click', function() {
  const inputText = document.querySelector('.form__input').value;
  const outputTextContainer = document.querySelector('.output__text');
  
  outputTextContainer.innerHTML = '';
  
  inputText.split('').forEach(char => {
    const span = document.createElement('span');
    span.classList.add('output__char');
    span.textContent = char;
    outputTextContainer.appendChild(span);
  });
});

let draggedElement = null;
let isDragging = false;

document.querySelectorAll('.output__char').forEach(char => {

  char.addEventListener('mousedown', (e) => {
    draggedElement = e.target;
    isDragging = true;
    draggedElement.style.position = 'absolute';
    draggedElement.style.zIndex = 1000;
    document.body.appendChild(draggedElement);
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      draggedElement.style.left = e.pageX - draggedElement.offsetWidth / 2 + 'px';
      draggedElement.style.top = e.pageY - draggedElement.offsetHeight / 2 + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      draggedElement.style.position = 'static';
      draggedElement = null;
    }
  });
});

document.addEventListener('mouseup', (e) => {
  if (isDragging) {
    isDragging = false;
    
    const dropTarget = document.elementFromPoint(e.clientX, e.clientY);
    
    if (dropTarget && dropTarget.classList.contains('output__char')) {
      const tempText = dropTarget.textContent;
      dropTarget.textContent = draggedElement.textContent;
      draggedElement.textContent = tempText;
    }
    
    draggedElement.style.position = 'static';
    draggedElement = null;
  }
});

let selectedChars = [];

document.querySelectorAll('.output__char').forEach(char => {
  char.addEventListener('click', (e) => {
    if (e.ctrlKey) {
      char.classList.toggle('selected');
      if (char.classList.contains('selected')) {
        selectedChars.push(char);
      } else {
        selectedChars = selectedChars.filter(c => c !== char);
      }
    }
  });
});
