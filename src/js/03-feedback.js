import throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';
let formData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('input', throttle(addLocaleStorage, 500));
refs.form.addEventListener('submit', onSumbit);

isHasData();

// Службові функції

function addLocaleStorage(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function onSumbit(e) {
  e.preventDefault();

  const savedData = JSON.parse(localStorage.getItem(KEY));
  e.target.reset();
  localStorage.removeItem(KEY);

  console.log(savedData);
}

function isHasData() {
  const savedValues = localStorage.getItem(KEY);
  const formData = JSON.parse(savedValues);
  if (savedValues) {
    refs.input.value = formData.email;
    refs.textarea.value = formData.message;
  }
}
