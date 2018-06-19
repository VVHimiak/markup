//"use strict";
// PRELOADER
$(window).on('load', function () {
    $('.preloader').fadeOut('slow');
});

// NAV TOGGLE
$('.header__btn').on('click', function () {
    $(this).toggleClass('active');
    $('.header__nav').fadeToggle()
});

// MAP
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
