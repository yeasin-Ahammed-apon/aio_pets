/**
 * Slider Banner Elementor JS.
 *
 * @package petz
 */

/**
 * CreateBullets
 */
function createBullets() {
	for (var a = 0; a < numOfSlides + 1; a++) {
		var b = $( "<li class='slider-pagi__elem'></li>" );
		b.addClass( "slider-pagi__elem-" + a ).data( "page", a ), a || b.addClass( "active" ), $pagination.append( b )
	}
}

function manageControls() {
	$( ".slider-control" ).removeClass( "inactive" ), curSlide || $( ".slider-control.left" ).addClass( "inactive" ), curSlide === numOfSlides && $( ".slider-control.right" ).addClass( "inactive" )
}

function autoSlide() {
	autoSlideTimeout = setTimeout(
		function() {
			curSlide++, curSlide > numOfSlides && (curSlide = 0), changeSlides()
		},
		autoSlideDelay
	)
}

function changeSlides(a) {
	a || ( animating = ! 0, manageControls(), $slider.addClass( "animating" ), $slider.css( "top" ), $( ".slide" ).removeClass( "active" ), $( ".slide-" + curSlide ).addClass( "active" ),
		setTimeout(
			function() {
				$slider.removeClass( "animating" ), animating = ! 1
			},
			animTime
		)
	),
	window.clearTimeout( autoSlideTimeout ), $( ".slider-pagi__elem" ).removeClass( "active" ), $( ".slider-pagi__elem-" + curSlide ) . addClass( "active" ), $slider.css( "transform", "translate3d( " + 100 * -curSlide + "%,0,0)" ), $slideBGs.css( "transform", "translate3d( " + 50 * curSlide + "%,0,0)" ), diff = 0, autoSlide()
}

function navigateLeft() {
	animating || (curSlide > 0 && curSlide--, changeSlides())
}

function navigateRight() {
	animating || (curSlide < numOfSlides && curSlide++, changeSlides())
}
var $slider                          = $( ".slider" ),
	$slideBGs                        = $( ".slide__bg" ),
	diff                             = 0,
	curSlide                         = 0,
	numOfSlides                      = $( ".slide" ).length - 1,
	animating                        = ! 1,
	animTime                         = 500,
	autoSlideTimeout, autoSlideDelay = 9000,
	$pagination                      = $( ".slider-pagi" );
createBullets(), autoSlide(),
$( document ).on(
	"mousedown touchstart",
	".slider",
	function(a) {
		if ( ! animating ) {
			window.clearTimeout( autoSlideTimeout );
			var b = a.pageX || a.originalEvent.touches[0].pageX,
				c = $( window ).width();
			diff  = 0,
			$( document ).on(
				"mousemove touchmove",
				function(a) {
					var d = a.pageX || a.originalEvent.touches[0].pageX;
					diff  = (b - d) / c * 70, ( ! curSlide && diff < 0 || curSlide === numOfSlides && diff > 0 ) && ( diff /= 2 ),
					$slider.css( "transform", "translate3d( " + (100 * -curSlide - diff) + "%,0,0)" ),
					$slideBGs.css( "transform", "translate3d( " + (50 * curSlide + diff / 2) + "%,0,0)" )
				}
			)
		}
	}
),

$( document ).on(
	"mouseup touchend",
	function(a) {
		if ( $( document ).off( "mousemove touchmove" ), ! animating ) {
			if ( ! diff ) {
				return void changeSlides( ! 0 );
			}
			if (diff > -8 && diff < 8) {
				return void changeSlides();
			}
			diff <= -8 && navigateLeft(), diff >= 8 && navigateRight()
		}
	}
),

$( document ).on(
	"click",
	".slider-control",
	function() {
		$( this ).hasClass( "left" ) ? navigateLeft() : navigateRight()
	}
),

$( document ).on(
	"click",
	".slider-pagi__elem",
	function() {
		curSlide = $( this ).data( "page" ), changeSlides()
	}
);

/* Loading */
function showBox() {
	if ( document.getElementsByClassName( 'slider-container-header' )[0] ) {
		document.getElementsByClassName( 'slider-container-header' )[0].classList.remove( 'loading' );
	}
};

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
				showBox()
			}
		);

		onElementorLoaded(
			function() {
				window.elementorFrontend.hooks.addAction(
					'frontend/element_ready/global',
					function() {
						showBox()
					}
				);

				window.elementorFrontend.hooks.addAction(
					'frontend/element_ready/petz-slider.default',
					function() {
						showBox()
					}
				);
			}
		);
	}
);
