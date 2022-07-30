(function($) {
	'use strict';

	// Banner
	function multipageBanner(){
		var sync1 = $('.banner-slider-active');
		var sync2 = $('.banner__hash');
		var slidesPerPage = 3; //globaly define number of elements per page
	  	var syncedSecondary = true;

		sync1.owlCarousel({
			items : 1,
			slideSpeed : 2000,
			nav: true,
			autoplay: false,
			dots: false,
			loop: true,
			responsiveRefreshRate : 200,
			navText: ['<span class="ti-angle-left"></span>','<span class="ti-angle-right"></span>'],
			fade: true,
			animateOut: 'fadeOut'
		}).on('changed.owl.carousel', syncPosition);

		sync2.on('initialized.owl.carousel', function () {
			sync2.find('.owl-item').eq(0).addClass('current');
		})
		.owlCarousel({
			items : slidesPerPage,
			dots: false,
			nav: false,
			loop: false,
			smartSpeed: 200,
			slideSpeed : 500,
			slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
			responsiveRefreshRate : 100
		}).on('changed.owl.carousel', syncPosition2);

		function syncPosition(el) {
		//if you set loop to false, you have to restore this next line
		//var current = el.item.index;
		//if you disable loop you have to comment this block
			var count = el.item.count-1;
			var current = Math.round(el.item.index - (el.item.count/2) - .5);

			if(current < 0) {
			 	current = count;
			}
			if(current > count) {
			 	current = 0;
			}
			//end block
			sync2
			.find('.owl-item')
			.removeClass('current')
			.eq(current)
			.addClass('current');
			var onscreen = sync2.find('.owl-item.active').length - 1;
			var start = sync2.find('.owl-item.active').first().index();
			var end = sync2.find('.owl-item.active').last().index();

			if (current > end) {
			  sync2.data('owl.carousel').to(current, 100, true);
			}
			if (current < start) {
			  sync2.data('owl.carousel').to(current - onscreen, 100, true);
			}
		}
	  
		function syncPosition2(el) {
			if(syncedSecondary) {
				var number = el.item.index;
				sync1.data('owl.carousel').to(number, 100, true);
			}
		}

		sync2.on('click', '.owl-item', function(e){
			e.preventDefault();
			var number = $(this).index();
			sync1.data('owl.carousel').to(number, 300, true);
		});
	};
	multipageBanner();

})(jQuery);