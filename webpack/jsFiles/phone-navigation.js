$(document).ready(function () {
    var i = 0;

    $('#icon-wrap-2').click(function () {
        if (i == 0) {
            if ($(this).hasClass('toClose')) {
                $(this).removeClass('toClose').addClass('toOpen');
            } else {
                $(this).removeClass('toOpen').addClass('toClose');
            }
            $('.menu__block').toggleClass('menu__active');
            $('body').css('overflow', 'hidden');

            setTimeout(function () {
                $('.menu__items').toggleClass('menu__items-active');
            }, 600);
            i++;
        }
        else {
            if ($(this).hasClass('toClose')) {
                $(this).removeClass('toClose').addClass('toOpen');
            } else {
                $(this).removeClass('toOpen').addClass('toClose');
            }
            $('body').css('overflow', 'visible');

            $('.menu__items').toggleClass('menu__items-active');
            setTimeout(function () {

                $('.menu__block').toggleClass('menu__active');
            }, 600);
            i--;
        }
    });

    $('.menu__item a').click(function () {
        $('body').css('overflow', 'visible');
        $('#icon-wrap-2').removeClass('toClose').addClass('toOpen');
        $('.menu__items').toggleClass('menu__items-active');
        setTimeout(function () {
            $('.menu__block').toggleClass('menu__active');
        }, 600);
        i--;
    });


})