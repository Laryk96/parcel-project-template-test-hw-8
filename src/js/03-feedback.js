const formRef = document.querySelector('.feedback-form');
import throttle from 'lodash.throttle';

const USERDATA_KEY = 'feedback-form-state';
const user = {};

updateUserForm();

formRef.addEventListener('input', throttle(handleChangeForm, 500));
formRef.addEventListener('submit', onSubmitForm);

function handleChangeForm(e) {
  const { name, value } = e.target;

  user[name] = value;

  localStorage.setItem(USERDATA_KEY, JSON.stringify(user));
}

function updateUserForm() {
  const user = JSON.parse(localStorage.getItem(USERDATA_KEY));

  if (!user) {
    return;
  }

  const { email, message } = formRef.elements;

  email.value = user.email;
  message.value = user.message;
}

function onSubmitForm(e) {
  e.preventDefault();

  const { isEmpty, data } = getFormValue(e.currentTarget);

  if (isEmpty) {
    return;
  }

  console.log(`Email: ${data.email}; Massage: ${data.message}`);

  localStorage.removeItem(USERDATA_KEY);
  e.currentTarget.reset();
}

function getFormValue(form) {
  const formData = new FormData(form);

  const values = [...formData.values()];
  const isEmpty = values.includes('');

  const data = Object.fromEntries(formData);

  return { isEmpty, data };
}
const promiss = new Promise(resale => resale(10));

const res = promiss.then(val => {
  console.log(val);
  return val;
});

console.log('res:', res);
setTimeout(() => {
  console.log(res);
}, 1000);
