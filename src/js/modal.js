const refs = {
  closeBtn: document.querySelector('.js-modal-close'),
  openBtn: document.querySelector('.js-modal-open'),
  modal: document.querySelector('.js-modal'),
  formEl: document.querySelector('.js-form'),
};

refs.openBtn.addEventListener('click', toggleModal);
refs.closeBtn.addEventListener('click', toggleModal);
refs.formEl.addEventListener('submit', onSubmit);

const message = 'Поле обязательно для заполнения';

function toggleModal() {
  refs.formEl.reset();
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('blocked-body');
}

function onSubmit(e) {
  e.preventDefault();
  const name = e.target.name;
  const phone = e.target.phone;
  const email = e.target.email;
  console.log(phone.value);
  if (name.value.trim().length === 0) {
    name.classList.add('modal__input_error');
    name.setAttribute('placeholder', message);
    return;
  } else if (phone.value.trim().length === 0) {
    phone.classList.add('modal__input_error');
    phone.setAttribute('placeholder', message);
    return;
  } else if (email.value.trim().length === 0) {
    email.classList.add('modal__input_error');
    email.setAttribute('placeholder', message);
    return;
  } else {
    toggleModal();
  }
}
