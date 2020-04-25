// $(function() {
//     $(".owl-carousel").owlCarousel();
// });
// $(".owl-carousel").owlCarousel({
//     responsiveClass:true,
//     //pagination : true,
//     //navText: ["<img src='myprevimage.png'>","<img src = 'img/Layer_92_copy.png'>"],
//     responsive:{
//         0:{
//             items: 1,
//             nav: false,
//             autoWidth: true

//         },
//         480:{
//             items:1,
//             nav:false
//         },
//         768:{
//             items: 6, //количество картинок
//             nav: true, //навигация
//             center: true,
//             padding: 30,
//             margin: 20, //отступы между элементами
//             startPosition: 3,
//             loop: true,
//             dots: false
//         }
//     },
//     loop:true,
// });

$(function() {
	$('.search').click(function(){
		$('.search-field').stop().slideToggle();
		$('.search-field input[type=text]').focus();
	});

	$(document).keyup(function(e) {
		if(e.keyCode == 27) {
			$('.search-field').slideUp();
		}
	}).click(function() {
		$('.search-field').slideUp();
	});
	
	$('.search-wrap').click(function(e) {
		e.stopPropagation();
	});

	$('.top-line').after('<div class="mobile-menu d-xl-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function() {
	 $('.mobile-menu').stop().slideToggle();
	});

	$("body").prognroll({
		height: 3,
		color: "#ec1c1c",
		custom: false
	});

	$('.main-menu li').removeClass('active');
	var path = window.location.pathname;
	$('.main-menu li a').each(function() {
		var href = $(this).attr('href');
		if(path.slice(1).substring(0, href.length) === href) {
			$(this).parent('li').addClass('active');
		}
	});
});