
const btnHeader = document.querySelector('#btn-header');
const btnHero = document.querySelector('#btn-hero');
const btnOffers = document.querySelector('#btn-offers');
const backdrop = document.querySelector('.backdrop');
const title = document.querySelector('.modal__title');
const form = document.querySelector('.order');
const modalText = document.querySelector('.modal__text ');

const state = [];

const onOrderBtnClick = () => {

    const onSummitForm = (ev) => {
        const name = ev.target.name.value;
        const phone = ev.target.phone.value;
        const email = ev.target.email.value;
        ev.preventDefault();
        if (name && phone && email) {
            sucsess();
            state.push({
                name,
                phone,
                email
            });
        }

    }

    form.addEventListener('submit', onSummitForm)

    backdrop.style.display = 'block';
    const btnClose = document.querySelector('#btn-close');

    btnClose.addEventListener('click', () => {
        backdrop.style.display = 'none';
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            backdrop.style.display = 'none';
        }
    }
    )
    backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop)
            backdrop.style.display = 'none';
    });
};

btnHeader.addEventListener('click', onOrderBtnClick);
btnHero.addEventListener('click', onOrderBtnClick);
btnOffers.addEventListener('click', onOrderBtnClick);

function sucsess() {
    form.style.display = 'none';
    title.style.display = 'none';
    modalText.style.display = 'flex';

}