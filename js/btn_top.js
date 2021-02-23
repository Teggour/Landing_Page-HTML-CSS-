$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll_up').fadeIn();
        } else {
            $('.scroll_up').fadeOut();
        }
    });

    $('.scroll_up').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 50);
        return false;
    });

});