const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.innerHTML = document.body.classList.contains('dark-mode')
    ? '<i class="bi bi-brightness-high"></i> Light'
    : '<i class="bi bi-moon-stars"></i> Dark';
});