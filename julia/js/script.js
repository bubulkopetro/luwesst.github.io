/*
-----------------------------------------------
Theme: myMedical - Bootstrap Landing Page HTML Template
Version 1.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. PRELOADER
	2. SINGLEPAGENAV
	3. GALLERY LIGHTBOX
	4. MAIN SLIDER
	5. END ANIMTE ICONS
	6. TOGGLE TEXT
	7. GALLERY SORTING
	8. REVIEWS SLIDER
	9. FOCUS FEEDBACK
	10. CHANGED INPUT FORM
	11. HAMBURGER MENU
	12. TOGGLE MOBILE MENU 
	13. TO TOP BUTTON
-----------------------------------------------*/
/* 1. Preloader */
$(window).on('load', function() { 
	$('.status').fadeOut();
	$('.preloader').delay(350).fadeOut('slow'); 
}); 
/* END 1. Preloader */
$(document).ready(function(){
	"use strict";
	/* 2. SinglePageNav */
/*	var navInneer = $(".head_list");
    navInneer.singlePageNav({
		updateHash: false,
        filter: ":not(.external)",
        offset: 50,
        speed: 1000,
        currentClass: "active",
		easing: "swing"

    }); */
	/* END 2. SinglePageNav */
	/* 3. Gallery Lightbox */
   /* $(".gallery a").simpleLightbox();  */
    /* 3. END Gallery Lightbox */  
	/* 4. Main Slider */ 
/*	$('.main_slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000
	}); */
	/* 4. END Main Slider */ 
	/* 5. END Animte Icons */ 
	function animteIcons(elem) {
		$(elem).on("hover", function(e) {
			$(this).find('.icon_item').addClass('animated flip');
		}, function(){
			$(this).find('.icon_item').removeClass('animated flip');
		});
	}
	animteIcons('.service_box');
	/* 5. END Animte Icons */ 
	/* 6. Toggle Text about_work_section */ 
	$('' + $('.open_txt.active').attr('href')).slideDown();
	function toggleText(element) {
		$(element).on('click', function(e){
			e.preventDefault();
			var thisAttr = $(this).attr('href');
			var elementClass = $(this).attr('class');
			$('.holder_txt').slideUp();
			$('.' + elementClass).removeClass('active');
			if (!$(this).hasClass('active')) {
				$(thisAttr).slideDown();
				$(this).addClass('active');
			} else {
				$(thisAttr).slideUp();
				$(this).removeClass('active');
			}
		});
	}
	toggleText('.open_txt');
	/* 6. END Toggle Text about_work_section */ 
	/* 7. Gallery Sorting */ 
	$('.tabs_link').on('click', function(e){
		e.preventDefault();
		var elementClass = $(this).attr('class');
		var elemData = $(this).data('filter');
		$('.gallery_item').removeClass('animated zoomIn');
		$('.gallery_item').hide();
		$('.gallery_item' + elemData).show();
		$('.gallery_item' + elemData).addClass('animated zoomIn');
		$('.' + elementClass).removeClass('active');
		$(this).addClass('active');
	});
	/* 7. END Gallery Sorting */ 
	/* 8. Reviews Slider */ 
/*	$('.reviews_slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		fade: false,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
    {
      breakpoint: 991,
      settings: {
        autoplay: false,
      }
    }
  	]
	});  */
	/* 8. END Reviews Slider */ 
	/* 9. Focus Feedback */ 
	var focusElem = function(element){
		$(element).on('focus', function(){
			$(this).siblings('.hint_label').addClass('active');
		});
	}
	focusElem('.feedback_form input');
	focusElem('.feedback_form textarea');
	/* 9. END Focus Feedback */ 
	/* 10. Changed Input Form */ 
	var chagedElem = function(element){
		$(element).on('blur', function(){
			if ($(this).val() !== "") {
				$(this).siblings('.hint_label').addClass('active');
			} else {
				$(this).siblings('.hint_label').removeClass('active');
			}
		});
	}
	chagedElem('.feedback_form input');
	chagedElem('.feedback_form textarea');
	/* 10. END Changed Input Form */ 
	if ($(window).width() > 991) {
		$('#main_slider').addClass('animated slideInUp');
		$('#about_us').addClass('animated slideInUp');
		setTimeout(function(){
			$('#main_slider').removeClass('animated slideInUp');
		}, 3000);
		$(document).scroll(function () {
		    var s_top = $("body").scrollTop() + $(window).height();
		    var new_s_top = $("body").scrollTop() + $(window).height() - 200;
		    var serviceOffset = $(".service_section").offset().top;
		    if(s_top >= serviceOffset){
		        $('.service_box').addClass('animated zoomIn');
		    } else {
		    	$('.service_box').removeClass('animated zoomIn');
		    }
		});
	}
	/* 11. Hamburger Menu */ 
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').on('click', function(){
		$(this).toggleClass('open');
	});
	/* 11. END Hamburger Menu */
	/* 12. Toggle Mobile Menu */ 
	$('#nav-icon3').on('click', function(){
		$('#' + $(this).data('list')).slideToggle();
	});
	/* 12. END Toggle Mobile Menu */ 
    /* 13. To Top Button */
	var back_to_top = $('#goTop');
    if (back_to_top.length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    back_to_top.addClass('show');
                } else {
                    back_to_top.removeClass('show');
                }
            };
        $(window).on('scroll', function() {
            backToTop();
        });
        back_to_top.on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    };
    /* 13. END To Top Button */
	$(document).resize(function(){
		if ($(window).width() > 767) {
			$('.wrap_head_nav').show();
		}
	});
});