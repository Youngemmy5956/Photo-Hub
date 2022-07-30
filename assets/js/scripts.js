/*********************************************************************************

    Template Name: Photohub - Creative Photography Template 
    Template URI: https://themeforest.net/user/plus-theme
    Description: Photohub is a awesome, creative, and unique phptography template which mekes you build a beautiful template easily
    Author: Plus-Theme
    Author URI: https://hastech.company
    Version: 1.2

    Note: This is scripts js. All custom scripts here.

**********************************************************************************/

/*===============================================================================
			[ INDEX ]
=================================================================================

	Fixed header spacing
    Navigation Dropdown
    Header Sticky
    Banner Padding
    Contact Effect
    Onepage Sidebar
    Pt Popover
    Custom Modal

=================================================================================
			[ END INDEX ]
================================================================================*/

(function($) {
	'use strict';

    /*====== Fixed header spacing ======*/
    function fixedHeaderSpace(){
        var $this = $('.header-area'),
            headerHeight = $this.innerHeight();

        if($this.hasClass('transparent--header')){
            $this.next('.breadcrumb-area').css('padding-top', headerHeight);
        }
    }
    fixedHeaderSpace();


    /*====== Navigation Dropdown ======*/
    function navigationDropdown(){
        var winWidth = $(window).width();
        var trigger = $('.navbar-nav li.dropdown');
        if(winWidth > 991){
            trigger.on('mouseover', function(){
                $(this).addClass('show');
                $(this).find('ul.dropdown-menu').addClass('show');
            });
            trigger.on('mouseout', function(){
                $(this).removeClass('show');
                $(this).find('ul.dropdown-menu').removeClass('show');
            });
        }
    }
    navigationDropdown();


    /*====== Header Sticky ======*/
    function stickyHeader(){
        var sticky_menu = $('.sticky-header');
        var pos = sticky_menu.position();
        if (sticky_menu.length) {
            var windowpos = sticky_menu.top;
            $(window).on('scroll', function() {
               var windowpos = $(window).scrollTop();
               if (windowpos > pos.top + 250) {
                   sticky_menu.addClass('sticky');
               } else {
                   sticky_menu.removeClass('sticky');
               }
            });
        }
    }
    stickyHeader();

    /*====== Banner Padding ======*/
    function bannerPadding(){
        var headerHeight = $('.header-area.sticky-header').height();
        $($('.header-area:not(.transparent--header)').next()).css({
            'padding-top' : headerHeight
        });
    }
    bannerPadding();



    /*====== Contact Effect ======*/
    function contactEffect(){
        var container = $('.contact__single');
        container.on('focus', 'input, textarea', function(){
            $(this).siblings('label').addClass('state-change');
        });
        container.on('focusout', 'input, textarea', function(){
            $(this).siblings('label').removeClass('state-change');
            var $this = $(this);
            if($this.val().trim().length !== 0){
                $(this).siblings('label').addClass('state-change');
            }
        });
    }
    contactEffect();



    /*====== Onepage Sidebar ======*/
    function sidebarNavigtaion(){
        var menuTrigger = $('button.onepage-sidebar-trigger'),
            endTrigger = $('button.op-sidebar-close'),
            container = $('.onepage-sidebar-area'),
            wrapper = $('.wrapper');

        wrapper.prepend('<div class="body-overlay"></div>');


        menuTrigger.on('click', function(){
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });

        endTrigger.on('click', function(){
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });

        $('.body-overlay').on('click', function(){
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
    }
    sidebarNavigtaion();





    /*====== Pt Popover ======*/
    function ptTooltip(){
        var trigger = $('.share-toggle');
        trigger.on('click', function(e){
            e.preventDefault();
            $(this).parent().find('.share__content').toggleClass('show');
        });
    }
    ptTooltip();




    /*====== Custom Modal ======*/

    $('.cus-modal-tigger').on('click', function(e){
        e.preventDefault();
        var $image = $(this).data('image');
        var $title = $(this).data('title');
        var $desc = $(this).data('desc');
        
        $('.cus-modal').addClass('open').find('img').attr('src',$image);
        $('.cus-modal').addClass('open').find('.cus-modal-title').html($title);
        $('.cus-modal').addClass('open').find('.cus-modal-content').html($desc);
        
        if( !($('.cus-modal button.close').length) ) {
            $('<button class="close"><i class="ti ti-close"></i></button>').appendTo('.cus-modal').on('click', function(){
                $('.cus-modal').removeClass('open');
            });
        }
    });




})(jQuery);
