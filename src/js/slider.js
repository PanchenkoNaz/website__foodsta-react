import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [5000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})