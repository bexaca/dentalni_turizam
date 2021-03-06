jQuery(document).ready(function () {

    //    $('.carousel__inner').slick({
    //        setting - name: setting - value
    //    });
    $('.carousel__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: true,
    });

    if ($('#wrapper .icon-wrap').css('display') == 'none') {
        $('a[href*=\\#].scroll').on('click', function (event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000, "swing");
        });
    } else {
        $('a[href*=\\#].scroll').on('click', function (event) {
            event.preventDefault();
            $('html,body').delay(200).animate({
                scrollTop: $(this.hash).offset().top - 382
            }, 1000, "swing");
        });
    }


    $("body").niceScroll({
        cursorcolor:"#D0BB57",
        cursorborder:'none',
        bouncescroll: true,
        autohidemode: false,
        scrollspeed: 80,
        mousescrollstep: 80,
        horizrailenabled: false
    });


    if (window.location.href.indexOf("thank") >= 0) {
        setTimeout(function () {
            window.location = (window.location.origin);
        }, 3000);
    }

    new WOW().init();


});



