// let once = false;
// update();
// window.addEventListener('scroll', () => {
//     if (!once) {
//         update();
//     }
// });

// function update() {
//     if (isInViewport(el, 50)) {
//         el.classList.add(binding.value);
//         if (binding.arg === 'once') {
//             once = true;
//         }
//     } else {
//         el.classList.remove(binding.value);
//     }
// }


var elements = document.querySelectorAll('[data-animate]');

window.addEventListener('scroll', () => {
    elements.forEach(function (elem) {
        if (isInViewport(elem, 150)) {
            if (!elem.getAttribute('data-animate')) {
                elem.setAttribute('data-animate', true);
            }
        }
    });
});


function isInViewport(el, offset) {
    var top = el.offsetTop + offset;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
};