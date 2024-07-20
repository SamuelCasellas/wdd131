const modalOverlay = document.querySelector('.overlay');
const form = document.querySelector('form');
const closeBtn = document.getElementById('close-modal');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   openPopup();
// });

closeBtn.addEventListener('click', () => closePopup());

function openPopup() {
  Array.from(document.querySelectorAll('input'))
    .concat(Array.from(document.querySelectorAll('textarea')))
    .forEach(el => el.value = '');
  modalOverlay.classList.add('open');
}

function closePopup() {
  modalOverlay.classList.remove('open');
}

