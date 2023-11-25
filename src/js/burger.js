const btnBurger = document.querySelector('.burger-menu');
const navigation = document.querySelector('.header__navigation-block ');
const icon = document.querySelector('.icon-close');
const list = document.querySelector('.navigation__list-header');
const items = document.querySelectorAll('.navigation__item-header');
const nav = document.querySelector('.navigation-header');

const onBurgerClick = () => {
    navigation.classList.add('open');
    icon.style.display = 'block';
    list.classList.add('open-list');
    nav.classList.add('nav-open');
    items.forEach(el => { el.classList.add('open-item') })

    icon.addEventListener('click', () => {
        navigation.classList.remove('open');
        icon.style.display = 'none';
        list.classList.remove('open-list');
        nav.classList.remove('nav-open');
        items.forEach(el => { el.classList.remove('open-item') })

    })
}

btnBurger.addEventListener('click', onBurgerClick);