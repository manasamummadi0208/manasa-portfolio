const modal = document.getElementById('interestModal');
const title = document.getElementById('modalTitle');
const desc = document.getElementById('modalDesc');
const close = document.getElementById('closeModal');

document.querySelectorAll('[data-title]').forEach((button) => {
  button.addEventListener('click', () => {
    title.textContent = button.dataset.title;
    desc.textContent = button.dataset.desc;
    modal.classList.remove('hidden');
  });
});

close.addEventListener('click', () => modal.classList.add('hidden'));

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add('hidden');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.add('hidden');
  }
});
