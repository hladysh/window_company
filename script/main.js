$(document).ready(function() {

    $("#nav_toggle").click(function() {
        $(this).toggleClass("active");
        $('#nav #navigation ').slideToggle();
    });


    $('#navigation li a').click(function() {
        $('#navigation li a').removeClass('active');
        // $(this).addClass('active');
        // $('#nav_toggle ').removeClass('active');
        // $('#nav #navigation ').slideToggle();
        $(this).addClass('active');
    })


    var filtered = false;
    $('.list_item').on('click', function() {
        var filtername = $(this).attr('id');
        var currentclass = $(this).attr('class');
        $('.list_item ').removeClass('active');
        if (filtered === false) {
            $('.news_slider').slick('slickUnfilter');
            $('.news_slider').slick('slickFilter', '.filter-' + filtername);
            $(this).attr('class', filtername + ' list_item');

        }
        else {
            $('.news_slider').slick('slickUnfilter');
            $('.news_slider').slick('slickFilter', '.filter-' + filtername);
            $('.news_slider').slickGoTo(0);
            $(this).attr('class', filtername + ' list_item');
            filtered = false;
        }
        $(this).addClass('active');
    });


    $('.news_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 1170,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]
    });


    $('.about_slider_left').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.about_slider_right').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.review_slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }

        }]
    });


});
