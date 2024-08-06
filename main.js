const form = document.getElementById('form');
const toggleShowPassword = document.getElementById('show-password');
const imgEye = document.getElementById('img-eye');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

toggleShowPassword.addEventListener('click', () => {
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  imgEye.classList.toggle('open-close-eye');
});
