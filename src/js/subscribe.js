import Notiflix from 'notiflix';
const subscrForm = document.querySelector('#subscr-form');
const footerForm = document.querySelector('#footer-form');

const state = [];

const onSubscribeClick = (ev) => {

    ev.preventDefault();
    const email = ev.target.email.value;
    console.log(email);
    if (email) {
        state.push(email);
        Notiflix.Notify.success('Sucsess! You subscribed!');
    }

}

subscrForm.addEventListener('submit', onSubscribeClick);
footerForm.addEventListener('submit', onSubscribeClick);