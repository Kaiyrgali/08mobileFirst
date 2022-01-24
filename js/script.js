const burger = document.querySelector('.menu__burger');
const burgerBlock = document.querySelector('.burger-block');
const burgerClose = document.querySelector('.burger-close');
const main = document.querySelector('main');



burger.onclick = function() {
    burgerBlock.style.display = 'block';
};

burgerClose.onclick = function() {
    burgerBlock.style.display = 'none';
};

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(burgerBlock) || e.composedPath().includes(burger);
    if ( ! click ) {

        console.log('Вне блока!');
        burgerBlock.style.display = 'none'
        ;
    }
  })