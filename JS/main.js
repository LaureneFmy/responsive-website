let burger = document.getElementById('burger');

console.log(burger.id.toUpperCase());

burger.addEventListener('click', onBurgerClick);

function onBurgerClick() {

    let navbar = document.querySelector('.navbar');

    navbar.classList.toggle('toggle')

}

