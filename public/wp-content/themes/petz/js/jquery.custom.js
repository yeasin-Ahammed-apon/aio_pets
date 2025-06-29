// @codingStandardsIgnoreStart
(function($) {

    "use strict";
    var HT = {};

    /*SCROLL FUNCTION*/
    $(window).scroll(function() {

        /*header stick*/
        if($(document).scrollTop() > 0) {
            $('.theme-header-box').addClass('header-fixed');
        }else{
            $('.theme-header-box').removeClass('header-fixed');
        }

        /* Scroll to top */
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').addClass('scroll-animation');
        } else {
            $('.back-to-top').removeClass('scroll-animation');
        }
    });

    /*LOAD FUNCTION*/
    $(window).load(function(){
        /*menu mobile*/
        $("#btn-toggle, .ht-overlay").on('click', function (e) {
            e.preventDefault();
            
            $("#btn-toggle, .theme-box-menu, .ht-overlay").toggleClass("ht-on");
            /* Check panel overlay */
            if ($(".theme-box-menu").hasClass("ht-on")) {
                $(".primary-menu").slideDown('fast');
            } else {
                $(".primary-menu").slideUp('fast');
            }
        });
        if($(window).width() <= 1024){
            $('.menu-item-has-children > a').on('click', function(e){
                e.preventDefault();
                e.stopPropagation();

                var $parentLi = $(this).closest('li');

                if ($(this).hasClass('expanded')) {
                    $(this).removeClass('expanded');
                    $parentLi.find('>ul').slideUp('fast');
                } else {
                    $(this).addClass('expanded');
                    $parentLi.find('>ul').slideDown('fast');
                }
            });
        }

        /*page loader*/
        $("#ht-preloader").fadeOut("slow");

        /*initialize skrollr*/
        skrollr.init({
            smoothScrolling: true,
            forceHeight: false          
        });

        /*disable skroll on device*/
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            skrollr.init().destroy();
        }
        
        /*pretty photo*/
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            hook: 'data-gal',
            animation_speed: 'normal',
            opacity: 0.4,
            show_title: true,
            allow_resize: true,
            counter_separator_label: '/',
            overlay_gallery: true,
            social_tools: false,
            theme: 'light_square',
        });

        /*Isotope*/ 
        $('.ht-gallery-nav a').on('click', function() {
            $('.ht-gallery-nav .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 500,
                easing: 'linear',
                queue: false,
                layoutMode: 'masonry'
            }

        });
        $(window).smartresize(function() {
            $container.isotope({
                columnWidth: '.col-lg-4'
            });
        });
    });

    /*SHORT CODE*/
    HT.shortcode = function(){

        /*member*/
        $(".ht-team-member").owlCarousel({
            dots: true,
            loop: true,
            autoplay: false,
            nav: true,
            margin: 15,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
            responsive: {
                1: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1200: {
                    items: 4,
                },
            }
        });

        /*service*/ 
        $(".ht-services-crs").owlCarousel({
            dots: true,
            loop: true,
            autoplay: false,
            nav: true,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"

            ],
            responsive: {
                1: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1024: {
                    items: 3,
                },
            }
        });

        /*testi*/
        $("#owl-reviews").owlCarousel({
            dots: true,
            loop: true,
            autoplay: false,
            nav: true,
            margin: 20,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
            responsive: {
                1: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1024: {
                    items: 2,
                },
            }
        });

        /*feature carousel - single service*/
        $('.owl-featured').owlCarousel({
            stagePadding: 50,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                1: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });

        /*accordion*/
        $(".ht-accordion").smk_Accordion({
            closeAble: true,
        });
        /*counter up*/
        $(".counter-number").counterUp({
            delay: 10,
            time: 1000
        });
    }

    /*CUSTOMIZE*/
    HT.customize = function(){

        /*sidebar - search effect search btn*/
        $(".search-field").bind('focus', function () {
            $('.search-submit').addClass('search-submit-full');
        }).bind('blur', function () {
            $('.search-submit').removeClass('search-submit-full');
        });

        /*back to top*/
        $(".back-to-top").on('click', function () {
            $('html, body').animate({
                scrollTop: $("html").offset().top
            }, 300);
        });


    $('.tab-content-area .tab-content-item:first-child').addClass('current');
        $('ul.nav-tabs li:first-child').addClass('current');
        $('ul.nav-tabs li').click(function () {
            var tab_id = $(this).attr('data-select');
            $('ul.nav-tabs li').removeClass('current');
            $('.tab-content-item').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });

    }
    
    /*READY FUNCTION*/
    $(document).ready(function() {
        HT.shortcode();
        HT.customize();
    });

})(jQuery);
