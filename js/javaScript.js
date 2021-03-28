
$(document).ready(function () {
    $('.burger__menu, .burger__menu-link').click(function () {
        $('.burger__menu,.burger__menu-box').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).click(function (event) {
    if ($(event.target).closest('.burger__menu').length) return;
    $('.header_menu').removeClass('active')
    $('body').removeClass('lock')
    event.stopPropagation();
});

