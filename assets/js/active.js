/*
***************************************************************
***************************************************************

Template Name  : INSPIRE | One Page Multipurpose Template
Author         : Golam
Author URI     : http://golamnabi.com
File           : Active.js

***************************************************************
***************************************************************/

(function ($) {
    "use strict";

    // This Function is for Preloader
    function preloaderArea() {
        $('.preloader-area').fadeOut(500, function () {
            $('.preloader').delay(500).fadeOut();
        });

    }

    // This Function is for Custom Function
    function customFunctions() {

        // Add Sticky Class with Header Area When Window is Scrolled
        $(window).on("scroll", function () {
            var heightFromTop = $(this).scrollTop();
            if (heightFromTop) {
                $('.logo-mainmenu-area').addClass('sticky');
            } else {
                $('.logo-mainmenu-area').removeClass('sticky');
            }
        });

        $('.navbar-collapse a').on("click", function (e) {
            $('.navbar-collapse').collapse('toggle');
        });

        // Smooth Scroll Js
        var scroll = $('.scroll');
        scroll.on('click', function (e) {
			if ($('body').scrollTop() > 170 ) {
				$('html, body').animate({
					scrollTop: $( $(this).attr('href') ).offset().top
				}, 1000, 'easeInOutExpo');
				return false;
			} else {
				$('html, body').animate({
					scrollTop: $( $(this).attr('href') ).offset().top - 60
				}, 1000, 'easeInOutExpo');
				return false;
			}
        });


        // Helper Js
        var body = $('body');
        body.scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });

        // Accordion Js
        $(".collapse").on('shown.bs.collapse', function () {
            $(this).parent().find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
        }).on('hidden.bs.collapse', function () {
            $(this).parent().find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
        });

        // YouTube Video Player Js
        $(".player").YTPlayer();

    }

    function sliderAnimate() {
        function doAnimate(attr) {
            //Cache the animationend event in a variable
            var animateEnd = 'webkitAnimationEnd animationend';
            attr.each(function () {
                var $this = $(this),
                    $animationName = $this.data('animation');
                $this.addClass($animationName).one(animateEnd, function () {
                    $this.removeClass($animationName);
                });
            });
        }
        //Variables on page load 
        var $carousel = $('#slider_wrapper'),
            $animateElements = $carousel.find('.item:first').find("[data-animation ^= 'animated']");

        //Initialize carousel 
        $carousel.carousel(1000);

        //Animate captions in first slide on page load 
        doAnimate($animateElements);

        //Pause carousel  
        //$carousel.carousel('pause');

        //Other slides to be animated on carousel slide event 
        $carousel.on('slide.bs.carousel', function (e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimate($animatingElems);
        });
    }

    // This Function is for Whole Slider of this Template
    function sliders() {
        if ($.fn.owlCarousel) {
            // Home Page Slider Js
            var sliderItems = $('.slider-items');
            sliderItems.owlCarousel({
                items: 1, // Default is 3
                loop: true,
                autoplay: true,
                nav: true,
                navText: ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
                mouseDrag: false,
                touchDrag: false,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut'
            });

            sliderItems.on('translate.owl.carousel', function () {

                $('.slide-content-wrap h4').removeClass('animated fadeInLeft').css('opacity', '0');
                $('.slide-content-wrap h2').removeClass('animated fadeInLeft').css('opacity', '0');
                $('.slide-content-wrap p').removeClass('animated fadeInRight').css('opacity', '0');
                $('.slide-content-wrap .slide-btn').removeClass('animated fadeInUp').css('opacity', '0');
            });

            sliderItems.on('translated.owl.carousel', function () {

                $('.slide-content-wrap h4').addClass('animated fadeInLeft').css('opacity', '1');
                $('.slide-content-wrap h2').addClass('animated fadeInLeft').css('opacity', '1');
                $('.slide-content-wrap p').addClass('animated fadeInRight').css('opacity', '1');
                $('.slide-content-wrap .slide-btn').addClass('animated fadeInUp').css('opacity', '1');

            });


            // Team Member Slider Js 
            var teamSlides = $(".team-member-intro");
            teamSlides.owlCarousel({
                items: 4, // Default is 3
                loop: true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 3000, // Default is 5000
                smartSpeed: 1000, // Default is 250
                dots: false,
                nav: true,
                navText: ['<i class="icofont icofont-double-left"></i>', '<i class="icofont icofont-double-right"></i>'],
                responsive: {
                    1200: {
                        items: 4
                    },
                    992: {
                        items: 3
                    },
                    768: {
                        items: 2
                    },
                    320: {
                        items: 1
                    },
                    480: {
                        items: 2
                    }
                }
            });


            // Testimonial Slider Js 
            var testimonialSlide = $(".testimonial-intro");
            testimonialSlide.owlCarousel({
                items: 1, // Default is 3
                loop: true,
                autoplay: true,
                animateIn: 'zoomIn',
                animateOut: 'zoomOut',
                dots: false
            });


            // Brand Slider Js 
            var brandSlides = $(".brand-desc");
            brandSlides.owlCarousel({
                items: 5, // Default is 3
                loop: true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 3000, // Default is 5000
                smartSpeed: 1000, // Default is 250
                dots: false,
                responsive: {
                    1200: {
                        items: 5
                    },
                    992: {
                        items: 4
                    },
                    768: {
                        items: 3
                    },
                    320: {
                        items: 1
                    },
                    480: {
                        items: 2
                    }
                }
            });


            // Blog Post Slider Js
            var blogSlider = $(".blog-slider");
            blogSlider.owlCarousel({
                items: 1, // Default is 3
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000, // Default is 5000
                smartSpeed: 1000, // Default is 250
                dots: false,
                nav: true,
                navText: ['<i class="icofont icofont-double-left"></i>', '<i class="icofont icofont-double-right"></i>'],
                responsive: {
                    1200: {
                        items: 1
                    },
                    992: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    320: {
                        items: 1
                    },
                    480: {
                        items: 1
                    }
                }
            });



        }
    }


    // This Function is for MagnificPopup
    function popup() {
        // Video Area Js
        $('.video-icon').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });

        // Word Area Js
        $('a.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('a') ? openerElement : openerElement.find('a');
                }
            }
        });
    }


    // This Function is for Isotope  
    function portfolioFilter() {
        var $grid = $('.grid').isotope({
            itemSelector: '.item',
            percentPosition: true
        });

        // filter items on button click
        $('.work-filter').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        $('.work-filter').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function () {
                $buttonGroup.find('.current').removeClass('current');
                $(this).addClass('current');
            });
        });
    }

    // This Function is for Plugins
    function plugins() {
        // Counter UP Js 
        $('.single-project-item h2').counterUp({
            delay: 10,
            time: 1000
        });


        // Parallax Section Js
        $(window).stellar({
            horizontalScrolling: false,
            positionProperty: 'position',
            responsive: true
        });

        // Wow Js
        new WOW().init();
    }


    // This Function is for Google Map
    function googleMap() {
        function map_init() {
            var lat = 19.1556593; // Put your latitude Number and
            var log = 72.8340589; // Put your longitude Number
            var mapOptions = {
                zoom: 14,
                center: new google.maps.LatLng(lat, log), // New York
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: [{
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#444444"
                    }]
                }, {
                    "featureType": "administrative.country",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "administrative.province",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.province",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.locality",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.locality",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.locality",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 45
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#d1d7d9"
                    }, {
                        "visibility": "on"
                    }]
                }]
            };
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            new google.maps.Marker({
                position: new google.maps.LatLng(lat, log),
                map: map,
                icon: 'assets/images/map.png'
            });
        }
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', map_init);
    }

    // When Window is loading
    $(window).on('load', function () {
        preloaderArea(); // Initialize Preloader Function
        portfolioFilter(); // Initialize Work Filter Function
    });


    // When Document is Ready
    $(document).ready(function () {
        sliderAnimate();
        customFunctions(); // Initialize Custom Function
        sliders(); // Initialize Sliders Function
        popup(); // Initialize Popup Function
        plugins(); // Initialize Plugins Function
        googleMap(); // Initialize Google Map Function


    });

})(jQuery);