$(document).ready(function(){
	$(".slider_baner").slick({
        infinite: !0,
        dots: !0,
        speed: 500,
        nextArrow: '<div class="angle_right"></div>',
        prevArrow: '<div class="angle_left"></div>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: !1
            }
        }]
    }),
    $(".slider_product").slick({
    	slidesToShow: 4,
        infinite: !0,
        dots: 0,
        speed: 500,
        nextArrow: '<div class="angle_right"></div>',
        prevArrow: '<div class="angle_left"></div>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: !1
            }
        }]
    }),
	$(".center_slider").slick({
		slidesToShow: 5,
	    infinite: !0,
	    dots: 0,
	    speed: 500,
	    nextArrow: '<div class="angle_right"></div>',
	    prevArrow: '<div class="angle_left"></div>',
	    responsive: [{
	        breakpoint: 992,
	        settings: {
	            arrows: !1
	        }
	    }]
    });

        var e = $(".fade_script");
        $(window).scroll(function() {
            500 < $(this).scrollTop() && e.hasClass("default") ? e.fadeOut("fast", function() {
                $(this).removeClass("default").addClass("fly").fadeIn("fast")
            }) : $(this).scrollTop() <= 500 && e.hasClass("fly") && e.fadeOut("fast", function() {
                $(this).removeClass("fly").addClass("default").fadeIn("fast")
            })
        })
   
});
