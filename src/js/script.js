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

    /*Слайдер с табами*/
    const $sliderTabs = $('.slider-tab');

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
    });

    $('.macbook-content').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        $sliderTabs.removeClass('is-active');

        $sliderTabs.eq(nextSlide).addClass('is-active');
    });

    $sliderTabs.on('click', event => {
        event.preventDefault();

        const $self = $(event.currentTarget);

        if ($self.hasClass('is-active')) return;

        $sliderTabs.removeClass('is-active');

        $self.addClass('is-active');

        $('.macbook-content').slick('slickGoTo', $self.index());
    });
});