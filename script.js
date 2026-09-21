document.getElementById('year').textContent = new Date().getFullYear();

const dialog = document.getElementById('lightbox');
const dialogImage = document.getElementById('lightbox-image');
const closeButton = dialog.querySelector('.lightbox-close');

document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.lightbox;
    dialogImage.alt = button.dataset.alt || '';
    dialog.showModal();
  });
});

closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  dialogImage.src = '';
  dialogImage.alt = '';
});
