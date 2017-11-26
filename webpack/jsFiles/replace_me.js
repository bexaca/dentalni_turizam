$(window).on('load', function () { // makes sure the whole site is loaded
    $('.tooth__div').delay(250).fadeOut('slow'); // will first fade out the loading animation
    $('.preloader').delay(850).fadeOut('slow'); // will fade out the white DIV that covers the website.
})

$(document).ready(function () {
    function valName() {
        var name = $('#name__input').val();
        if (name == 0) {
            $('.alert__block').removeClass('active__alert');
            $('.alert__block-name').addClass('active__alert');
            setTimeout(function () {
                $('.alert__block-name').removeClass('active__alert');
            }, 5000);
            return false;
        }
        else {
            return true;
        }
    }

    function valEmail() {
        var email = $('#email__input').val();
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (email == 0) {
            $('.alert__block').removeClass('active__alert');
            $('.alert__block-email').addClass('active__alert');
            setTimeout(function () {
                $('.alert__block-email').removeClass('active__alert');
            }, 5000);
            return false;
        }
        else if (!filter.test(email)) {
            $('.alert__block').removeClass('active__alert');
            $('.alert__block-email-val').addClass('active__alert');
            setTimeout(function () {
                $('.alert__block-email-val').removeClass('active__alert');
            }, 5000);
            return false;
        }
        else {
            return true;
        }

    }

    function valMsg() {
        var text = $('#text__input').val();
        if (text == 0) {
            $('.alert__block').removeClass('active__alert');
            $('.alert__block-text').addClass('active__alert');
            setTimeout(function () {
                $('.alert__block-text').removeClass('active__alert');
            }, 5000);
            return false;
        }
        else {
            return true;
        }
    }

    $('#submit__button').click(function (e) {
        if (!valName() || !valEmail() || !valMsg()) {
            e.preventDefault();
        }
    });
});
