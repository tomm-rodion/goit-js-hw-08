import { throttle } from 'lodash';
const form = document.querySelector('.feedback-form');
console.log(form);
const inputEmail = document.querySelector('input');
const textarea = document.querySelector('textarea');
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
const LOCALSTORAGE_KEY = 'feedback-form-state';

function onFormInput(e) {
  const formData = { email: inputEmail.value, message: textarea.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function valueStorage() {
  const parselocaleStorageData = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEY)
  );
  if (parselocaleStorageData) {
    inputEmail.value = parselocaleStorageData.email;
    textarea.value = parselocaleStorageData.message;
  } else {
    inputEmail.value = '';
    textarea.value = '';
  }
}

valueStorage();
