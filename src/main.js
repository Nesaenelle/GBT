$(document).ready(function () {


        $('.slick').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
    
            prevArrow: '.slick-prev',
            nextArrow: '.slick-next',
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



})