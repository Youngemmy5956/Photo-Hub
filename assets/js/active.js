/*********************************************************************************

	Template Name: Photohub - Creative Photography Template 
	Template URI: https://themeforest.net/user/plus-theme
	Description: Photohub is a awesome, creative, and unique phptography template which mekes you build a beautiful template easily
	Author: Plus-Theme
	Author URI: https://hastech.company
	Version: 1.2

	Note: This is active js. Plugins activation code here.

**********************************************************************************/


/*===============================================================================
			[ INDEX ]
=================================================================================

	Carousel
		Banner
		Testimonial
		Partners
		Sidebar post
		Onepage Multislider
		Onepage Singleslide
		Onepage another slide
	Lightgallery
		Portfolio zoom
		Portfoio gallery
		Multislide popup
	Pie Chart
		Default pie chart
		Onepage navigation pie chart
	ScrollUp
	Portfolio
	Gallery Portfolios with modal
	Fake Loader

=================================================================================
			[ END INDEX ]
================================================================================*/

(function($) {
	'use strict';


	/*====== Carousel ======*/
	// Testimonial
	$('.testimonials').owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		nav: false,
		dots: false,
		fade: true,
		animateOut: 'fadeOut'
	});

	// Partners
	$('.partners').owlCarousel({
		items: 5,
		loop: true,
		autoplay: false,
		nav: false,
		dots: false,
		responsive : {
            0 : {
                items:1,
            },
            576:{
                items:2,
            },
            768 : {
                items:3,
            },
            992 : {
                items:4,
            },
            1201 : {
                items:5,
            }
        }
	});

	// Sidebar post
	$('.sidebar-post-carousel-active').owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		nav: false,
		dots: true
	});


	// Onepage Multislider
	$('.banner__inner.onepage--banner-multislide').owlCarousel({
		items: 3,
		loop: true,
		autoplay: false,
		dots: false,
		nav: true,
		navText: ['<span class="ti-angle-left"></span>','<span class="ti-angle-right"></span>'],
		margin: 2,
		responsive : {
            0 : {
                items:1,
            },
            576:{
                items:1,
            },
            768 : {
                items:2,
            },
            992 : {
                items:2,
            },
            1201 : {
                items:3,
            }
        }
	});


	// Onepage Singleslide
	$('.banner__inner.onepage--banner-singleslide').owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		dots: false,
		nav: true,
		navText: ['<span class="ti-angle-left"></span>','<span class="ti-angle-right"></span>']
	});


	// Onepage another slide
	$('.banner__inner.onepage-another-slider').owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		dots: false,
		nav: true,
		navText: ['<span class="ti-angle-left"></span>','<span class="ti-angle-right"></span>'],
		fade: true,
		animateOut: 'fadeOut'
	});

	




	/*====== Lightgallery ======*/

	// Portfoio gallery
	$('.gallery-portfolios:not(.modal-portfolios)').lightGallery({
		selector: '.portfolio__image',
		thumbnail: false
	});

	// Multislide popup
	$('.onepage--banner-multislide').lightGallery({
		selector: 'a.multislide-zoom-trigger',
		thumbnail: false
	});
	



	/*====== Pie Chart ======*/
	// Default pie chart
	$('.pies .pie-chart').waypoint(function(){

		$('.pies .pie-chart').easyPieChart({
			lineWidth: 2,
			trackColor: false,
			scaleLength: 0,
			rotate: -45,
			barColor: function(percent) {
			    var ctx = this.renderer.getCtx();
			    var canvas = this.renderer.getCanvas();
			    var gradient = ctx.createLinearGradient(0,120.000,canvas.width,0);
			        gradient.addColorStop(0, "#c60de1");
			        gradient.addColorStop(1, "#e51515");
			    return gradient;
			}
		});

	}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	});


	// Onepage navigation pie chart
	$('.op-pies .op-pie-chart').easyPieChart({
		lineWidth: 2,
		trackColor: false,
		scaleLength: 0,
		rotate: -45,
		barColor: function(percent) {
		    var ctx = this.renderer.getCtx();
		    var canvas = this.renderer.getCanvas();
		    var gradient = ctx.createLinearGradient(0,120.000,canvas.width,0);
		        gradient.addColorStop(0, "#c60de1");
		        gradient.addColorStop(1, "#e51515");
		    return gradient;
		}
	});





	/*====== ScrollUp ======*/
	$.scrollUp({
	    scrollText: '<span class="ti ti-angle-up"></span>',
	    easingType: 'linear',
	    scrollSpeed: 900,
	    animation: 'slide'
	});



	/*====== Portfolio ======*/
	var $gallery = $('.portfolios');
	var $boxes = $('.portfolio');
	$boxes.hide();
	$gallery.imagesLoaded({
		background: true
	}, function () {
		$boxes.fadeIn();
		$gallery.isotope({
			sortBy: 'original-order',
			layoutMode: 'fitRows',
			itemSelector: '.portfolio',
			stagger: 30,
		});
	});
	
	var filterValueNew = '.portfolio-zoom-trigger a';
	$('.portfolio-filter.layout-2').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$('.portfolios.layout-2').isotope({
			filter: filterValue
		});
		
		filterValueNew = '' + filterValue + ' .portfolio-zoom-trigger a';
		if (filterValueNew == '* .portfolio-zoom-trigger a'){
			filterValueNew = '.portfolio-zoom-trigger a';
		}
		$gallery.data('lightGallery').destroy(true);
		$gallery.lightGallery({
			selector: filterValueNew,
			thumbnail: false,
		});
	});

	$gallery.lightGallery({
		selector: filterValueNew,
		thumbnail: false,
	});

	//button active mode
	$('.portfolio-filter.layout-2').on('click', 'button', function () {
		$('.portfolio-filter.layout-2 button').removeClass('is-checked');
		$(this).addClass('is-checked');
	});



	/* Gallery Portfolio */
	var $gallery2 = $('.gallery-portfolios.layout-3:not(.modal-portfolios)');
	var $boxes2 = $('.portfolio');
	$boxes2.hide();
	$gallery2.imagesLoaded({
		background: true
	}, function () {
		$boxes2.fadeIn();
		$gallery2.isotope({
			sortBy: 'original-order',
			itemSelector: '.portfolio',
			stagger: 30,
			masonry: {
				columnWidth: 1,
			}
		});
	});

	var filterValue2New = '.portfolio__image';
	$('.portfolio-filter.layout-3:not(.modal-portfolio-filter)').on('click', 'button', function () {
		var filterValue2 = $(this).attr('data-filter');
		$('.gallery-portfolios.layout-3:not(.modal-portfolios)').isotope({
			filter: filterValue2,
			itemSelector: '.portfolio',
			percentPosition: true,
			masonry: {
				columnWidth: 1,
			}
		});

		filterValue2New = '' + filterValue2 + ' .portfolio__image';
		if (filterValue2New == '* .portfolio__image') {
			filterValue2New = '.portfolio__image';
		}
		$gallery2.data('lightGallery').destroy(true);
		$gallery2.lightGallery({
			selector: filterValue2New
		});
	});

	$gallery2.lightGallery({
		selector: filterValue2New
	});

	//button active mode
	$('.portfolio-filter.layout-3:not(.modal-portfolio-filter)').on('click', 'button', function () {
		$('.portfolio-filter.layout-3 button').removeClass('is-checked');
		$(this).addClass('is-checked');
	});


	/*====== Gallery Portfolios with modal ======*/
	$('.gallery-portfolios.modal-portfolios').imagesLoaded( function() {

       var $grid = $('.gallery-portfolios.modal-portfolios').isotope({
           itemSelector: '.portfolio',
           percentPosition: true,
           masonry: {
               columnWidth: 1
           }
       });

       var $buttonGroup = $('.portfolio-filter.layout-3').on( 'click', 'button', function() {
           var filterValue = $(this).attr('data-filter');
           $grid.isotope({ filter: filterValue });
           $buttonGroup.find('.is-checked').removeClass('is-checked');
           $(this).addClass('is-checked');
       }); 

   });



	/*====== Fake Loader ======*/
	$('.fakeloader').fakeLoader({
	    timeToHide:1200,
	    bgColor:'#000000',
	    spinner:'spinner2'
	});



})(jQuery);
