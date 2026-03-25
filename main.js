document.addEventListener('DOMContentLoaded', () => {
  const triangle = document.getElementById('triangle');
  const dropdown = document.getElementById('nav-dropdown');

  triangle.addEventListener('click', () => {
    triangle.classList.toggle('rotate');
    dropdown.classList.toggle('active');
  });
});