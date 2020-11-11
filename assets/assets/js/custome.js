$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // Scroll top
    $('.nav-link,.scrollSectionBtn').click(function () {

        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);

        return false;
    });



});
$(window).scroll(function () {

    var scrollValue = $(this).scrollTop();

    if (scrollValue > 500) {
        $('.scrollBtn').fadeIn();
    } else {
        $('.scrollBtn').fadeOut();
    }
});