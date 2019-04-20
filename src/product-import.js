$('.slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                // centerMode: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                // centerMode: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                // centerMode: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                // centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});