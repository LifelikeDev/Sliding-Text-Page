const slider = document.querySelector('.slider');
const active = document.querySelector('.active');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const line4 = document.querySelector('.line4');

line1.addEventListener('click', () => {
    slider.style.transform = 'translateX(0)';
    active.style.top = '0em';
});
line2.addEventListener('click', () => {
    slider.style.transform = 'translateX(-50em)';
    active.style.top = '5em';
});
line3.addEventListener('click', () => {
    slider.style.transform = 'translateX(-100em)';
    active.style.top = '10em';
});
line4.addEventListener('click', () => {
    slider.style.transform = 'translateX(-150em)';
    active.style.top = '15em';
});