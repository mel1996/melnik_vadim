const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            function numberAppend(d) {
                return (d < 10) ? '0' + d.toString() : d.toString();
            }
            return `
                <span>${numberAppend(current)}</span>
                <div class="divider"></div> 
                <span>${numberAppend(total)}</span>`; 
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// menu
const burgerIcon = document.getElementById('burger');
const closeIcon = document.getElementById('close');
const nav = document.getElementById('nav');

const showNode = (node) => node.classList.add('open');
const hideNode = (node) => node.classList.remove('open');


burgerIcon.addEventListener('click', () => showNode(nav));
closeIcon.addEventListener('click', () => hideNode(nav));