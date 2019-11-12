$(document).ready(function () {
    $(".burger").on('click', function () {
        $(this).toggleClass('burger-active');
        $(".nav").toggleClass('nav-active');
    });
    //Smooth scroll and pageup
    $(window).scroll(function () {
        if($(this).scrollTop() > 700) {
            if ($('header').hasClass('header-fixed')){}
            else {
                $('.header').fadeOut(0).addClass('header-fixed').fadeIn();
            }
        }
        else {
            $('.header').removeClass('header-fixed');
        }
    });
    $('.macbook-content').slick({
        speed: 500,
        cssEase: 'linear',

        prevArrow: '<button type="button" class="slick-prev"><img src="img/slide/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slide/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    /* dots: true */
                    arrows: false
                }
            }
        ]
        /*asNavFor: '.slider-tabs',*/

    });
/*    $('.slider-tabs').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.macbook__content',
    });*/
});