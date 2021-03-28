$(document).ready(function () {
    $('.burger__menu').click(function (event) {
        $('.burger__menu,.burger__menu-box').toggleClass('active');
        $('body').toggleClass('lock')
    });
});
