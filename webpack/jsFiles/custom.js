jQuery(document).ready(function () {

    //    $('.your-class').slick({
    //        setting - name: setting - value
    //    });
    $('.your-class').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: true,
    });


    $('a[href*=\\#].scroll').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000, "swing");
    });
    $("body").niceScroll({
        scrollspeed: 80,
        mousescrollstep: 80,
    });

});



