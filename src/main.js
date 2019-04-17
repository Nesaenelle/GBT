$(document).ready(function () {


    $('.slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    // centerMode: true,
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    // centerMode: true,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    // centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    // arrows: false,
                    // dots: false,
                    // centerMode: true,
                    // centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#adolescence-form').on('submit', (e) => {
        e.preventDefault();
        console.log($(e.currentTarget).serialize());
    });

    $('.modal-language__item').on('click', (e) => {
        $('.modal-language__item').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    function closeModal() {
        let overlay = $('.modal-overlay');
        $('.modal').removeClass('opened');
        overlay.removeClass('opened');
    }

    function openModal(e) {
        let $target = $(e.currentTarget);
        let id = $target.data('modal');
        let modal = $(`[data-modal-id="${id}"]`);
        let overlay = $('.modal-overlay');

        modal.addClass('opened');
        overlay.addClass('opened');
    }

    $('[data-close-btn]').on('click', () => {
        closeModal();
    });

    $('.modal-close').on('click', () => {
        closeModal();
    });

    $('.modal-overlay').on('click', () => {
        closeModal();
    });

    $('[data-modal]').on('click', (e) => {
        openModal(e);
    });

})