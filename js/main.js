(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        $(".header-area").sticky({topSpacing:0});
        $('li.smooth-menu a').bind('click',function(event){
        	var $anchor = $(this);
        	var headerH = '60';
        	$('html,body').stop().animate({
        		scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        	},1200,'easeInOutCubic');
        	event.preventDefault();
			});

        $('body').scrollspy({
        	target :'.navbar-collapse',
        	offset : 95
        });
        $('.parallax-bg').scrolly({bgParallax: true});



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	