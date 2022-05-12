(function ($) {

	"use strict";

	(function () {

		$(window).on('load', function () {
			/*
			======================================
				Preloader
			======================================
			*/
			jQuery('.loader').fadeOut('slow');
			jQuery('.loader-wrapper').delay(1000).fadeOut('slow');


			/*
			======================================
				AOS JS
			======================================
			*/
			(function () {
				AOS.init({
					once: true,
					duration: 800
				});
			})();


			/*
			======================================
				Isotope Plugin Init
			======================================
			*/

			if ($('#miwlo-all-projects').length) {
				$('#miwlo-all-projects').isotope({
					itemSelector: '.grid-item',
					percentPosition: true,
					transformsEnabled: true,
					transitionDuration: "1000ms",
					masonry: {
						columnWidth: '.grid-sizer',
						horizontalOrder: true
					}
				});
			}

		});

	})();


	/*
	======================================
		Scroll Init
	======================================
	*/
	(function () {

		$(window).on('scroll', function () {

			var $headerH = jQuery('.header-area').height();
			var $windowH = jQuery(window).scrollTop();
			var $nav = jQuery('.header-area');
			var $mNav = jQuery('.saastrace-mobile-menu-area');

			if ($windowH > $headerH) {
				$nav.addClass('fixed');
				$mNav.addClass('fixed');
			} else {
				$nav.removeClass('fixed');
				$mNav.removeClass('fixed');
			}

		});
	})();

	if ($('.miwlo-parallax').length) {
		$('.miwlo-parallax').parallax({
			scalarX: 10.0,
			scalarY: 10.0,
		});
	}


	/*
	======================================
		App Screenshot Slider Init
	======================================
	*/

	(function () {

		if ($('.miwlo-app-screenshot-slide').length) {
			var ScreenshotSlider = new Swiper('.miwlo-app-screenshot-slide', {
				paginationClickable: true,
				effect: 'coverflow',
				lazyLoadingInPrevNext: true,
				loop: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				navigation: {
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				},
				coverflow: {
					rotate: 0,
					stretch: 100,
					depth: 350,
					modifier: 1,
					slideShadows: true,
				}
			});
		}

	})();



	/*
	======================================
		Testimonial v1
	======================================
	*/
	(function () {
		if ($('.miwlo-app-testimonial-slide-container').length) {
			var testimonial = new Swiper('.miwlo-app-testimonial-slide-container', {
				pagination: {
					el: '.testimonial-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<div class="' + className + '"><div class="client-image"></div></div>';
					},
				},
			});
		}
	})();


	/*
	======================================
		Testimonial v2
	======================================
	*/

	(function () {
		if ($('.miwlo-testimonial-slide-container').length) {
			var testimonial = new Swiper('.miwlo-testimonial-slide-container', {
				loop: true,
				slidesPerGroup: 1,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: 1
					},
					// when window width is >= 480px
					992: {
						slidesPerView: 2,
						spaceBetween: 70
					}
				}
			});
		}


		$('.testimonial-pagination .swiper-pagination-bullet:nth-child(1) .client-image').append('<img src="images/testimonial-slider/teamr-1.jpg"/>');
		$('.testimonial-pagination .swiper-pagination-bullet:nth-child(2) .client-image').append('<img src="images/testimonial-slider/teamr-2.jpg"/>');
		$('.testimonial-pagination .swiper-pagination-bullet:nth-child(3) .client-image').append('<img src="images/testimonial-slider/teamr-3.jpg"/>');
	})();



	/*
	======================================
		Slinky Menu Init
	======================================
	*/
	(function () {
		if ($('.miwlo-header-area-mobile .col').length) {
			const slinky = $('.miwlo-header-area-mobile .col').slinky();
		}
	})();

	/*
	======================================
		Counter Plugin Init
	======================================
	*/
	(function () {
		if ($('.counter').length) {
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		}
	})();

	/*
	======================================
		country selector
	======================================
	*/

	var select = document.getElementById("selectCountry");

	var countries = new Array("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");

	//console.log(countries);
	//console.log(select);

	for (var i = 0; i < countries.length; i++) {

		var option = document.createElement("option");
		//for every turn of the loop create an option tag
		//console.log(option);
		var txt = document.createTextNode(countries[i]);
		//for every turn of the loop create the inner text
		//console.log(txt);
		option.appendChild(txt);
		//for every turn of the loop put the words from txt inside the <option> tags
		//console.log(option);
		option.setAttribute("value", countries[i]); //for every turn of the loop set the value attribute to corresponding country name
		//console.log(option);
		select.insertBefore(option, select.lastChild);
		//console.log(select);

	}

	document.addEventListener('DOMContentLoaded', function () {
		//console.log('DOM fully loaded and parsed');
		document.querySelector('select[name="selectCountry"]').onchange = alertCountry;
	}, false);

	function alertCountry(event) {
		//console.log('DOM loaded');
		//use "this" to refer to selected element
		if (!event.target.value) alert('Please select a country');
		else alert('You chose ' + event.target.value + '. Yay, grab a beer!');
	}

	/*
	======================================
	rangeSlide
	======================================
	*/


})(jQuery);