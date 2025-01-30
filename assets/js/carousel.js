$(document).ready(function() {
    var owl = $('.course-con .owl-carousel');
    owl.owlCarousel({
        margin: 20,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})
