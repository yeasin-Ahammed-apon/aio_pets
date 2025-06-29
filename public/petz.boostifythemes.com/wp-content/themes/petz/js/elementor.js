/**
 * Elementor JS.
 *
 * @package petz
 */

/*Counter*/
function counterpetz() {
	jQuery( '.counter_number' ).counterUp(
		{
			delay: 10,
			time: 1000
		}
	);
}

/*Service*/
function slider_service() {
	var selector  = jQuery( '.services-box' ),
		col       = parseInt( selector.data( 'col' ) );
		coltablet = parseInt( selector.data( 'col-tablet' ) );
		colmobile = parseInt( selector.data( 'col-mobile' ) );

	selector.owlCarousel(
		{
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
					items: colmobile,
				},
				768: {
					items: coltablet,
				},
				1024: {
					items: col,
				},
			}
		}
	);
}


/*Testi*/
function testi_box() {
	var selector  = jQuery( '#testimonial_box' ),
		col       = parseInt( selector.data( 'col' ) );
		coltablet = parseInt( selector.data( 'col-tablet' ) );
		colmobile = parseInt( selector.data( 'col-mobile' ) );

	selector.owlCarousel(
		{
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
					items: colmobile,
				},
				768: {
					items: coltablet,
				},
				1024: {
					items: col,
				},
			}
		}
	);
}

/*testi*/
function slider_testi() {
	var selector  = jQuery( '#owl-reviews' ),
		col       = parseInt( selector.data( 'col' ) );
		coltablet = parseInt( selector.data( 'col-tablet' ) );
		colmobile = parseInt( selector.data( 'col-mobile' ) );

	selector.owlCarousel(
		{
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
					items: colmobile,
				},
				768: {
					items: coltablet,
				},
				1024: {
					items: col,
				},
			}
		}
	);
}

/*Team Member*/
function teammember() {
	var selector  = jQuery( '.team-member' ),
		col       = parseInt( selector.data( 'col' ) );
		coltablet = parseInt( selector.data( 'col-tablet' ) );
		colmobile = parseInt( selector.data( 'col-mobile' ) );

	selector.owlCarousel(
		{
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
					items: colmobile,
				},
				600: {
					items: coltablet,
				},
				1200: {
					items: col,
				},
			}
		}
	);
}

/*Acordion*/
function accordion() {
	jQuery( '.accordion' ).smk_Accordion(
		{
			closeAble: true,
		}
	);
}

/*feature carousel - single service*/
function carousel() {
	jQuery( '#owl-featured-single' ).owlCarousel(
		{
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
		}
	);
}

/*Isotope*/
function isotope() {
	jQuery( '.gallery-nav a' ).on(
		'click',
		function() {
			jQuery( '.gallery-nav .active' ).removeClass( 'active' );
			jQuery( this ).addClass( 'active' );

			var selector = jQuery( this ).attr( 'data-filter' );
			$container.isotope(
				{
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				}
			);
			return false;
		}
	);
	var $container = jQuery( '#lightbox_adop' );
	$container.isotope(
		{
			filter: '*',
			animationOptions: {
				duration: 500,
				easing: 'linear',
				queue: false,
				layoutMode: 'masonry'
			}

		}
	);
	jQuery( window ).smartresize(
		function() {
			$container.isotope(
				{
					columnWidth: '.col-lg-4'
				}
			);
		}
	);
}

function onElementorLoaded( callback ) {
	if ( undefined === window.elementorFrontend || undefined === window.elementorFrontend.hooks ) {
		setTimeout(
			function() {
				onElementorLoaded( callback )
			}
		);
		return;
	}
	callback();
}

jQuery( document ).ready(
	function() {
		// For frontend.
		jQuery( window ).on(
			'load',
			function() {
				testi_box();
				counterpetz();
				accordion();
				slider_service();
				slider_testi();
				teammember();
				carousel();
				isotope();
			}
		);

		onElementorLoaded(
			function() {
				window.elementorFrontend.hooks.addAction(
					'frontend/element_ready/petz-counter.default',
					function() {
						counterpetz()
					}
				);

				window.elementorFrontend.hooks.addAction(
					'frontend/element_ready/petz-service.default',
					function() {
						slider_service()
					}
				);

				window.elementorFrontend.hooks.addAction(
					'frontend/element_ready/petz-testimonial.default',
					function() {
						testi_box()
					}
				);

				window.elementorFrontend.hooks.addAction(
					'frontend/element_ready/petz-member.default',
					function() {
						teammember()
					}
				);

				window.elementorFrontend.hooks.addAction(
					'frontend/element_ready/petz-accordion.default',
					function() {
						accordion()
					}
				);

				window.elementorFrontend.hooks.addAction(
					'frontend/element_ready/petz-gallery.default',
					function() {
						isotope()
					}
				);

				window.elementorFrontend.hooks.addAction(
					'frontend/element_ready/petz-adoption.default',
					function() {
						isotope()
					}
				);

				window.elementorFrontend.hooks.addAction(
					'frontend/element_ready/petz-carousel.default',
					function() {
						carousel()
					}
				);
			}
		);
	}
);
