$(document).ready(function () {


    $('.slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,

        // prevArrow: '.slick-prev',
        // nextArrow: '.slick-next',
        responsive: [{
            breakpoint: 1280,
            settings: {
                centerMode: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 720,
            settings: {
                arrows: false,
                dots: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }
        ]
    });



    $('[data-modal]').on('click', (e) => {
        let $target = $(e.currentTarget);
        let id = $target.data('modal');
        
        
    })



})