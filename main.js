const form = document.getElementById('form');
const toggleShowPassword = document.getElementById('show-password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

toggleShowPassword.addEventListener('click', (event) => {
  const spanElement = event.target.closest('.form__span');
  const password = spanElement
    .closest('.form__input-label')
    .querySelector('.form__input');
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  const imgEye = event.target;
  imgEye.classList.toggle('open-close-eye');
});
