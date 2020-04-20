$(document).ready(function(){
// headerSlider
	$('.header-slider__box').slick({
		  responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        autoplay: true,
		        arrows: false
		      }
		    }
		  ]
	});
	function calcbtn(){
		$('.header-slider .slick-prev, .header-slider .slick-next').css('top', $('.slick-active .header-slider__btn').offset().top);
	}
	$(window).resize(function(){
		calcbtn();
	});
	calcbtn();
// headerSlider

// headerMenu
	$('.header__mobilebtn').click(function(){
		$('.header__menu-box,.header__mobilebtn').toggleClass('active');
		$('body').toggleClass('overflow-hidden');
	});
// headerMenu

// MenuNav
	$('.navBtn').on('click',function(e) {
		if ($(window).width()<768) {
			addHeight=-55;
		} else {
			addHeight=0
		}
		$('.header__menu-box,.header__mobilebtn').removeClass('active'); // Когда охуешь на Десктопе поменяй на removeClass
		$('body').removeClass('overflow-hidden'); // // Когда охуешь на Десктопе поменяй на removeClass
		$('html, body').animate({
			scrollTop:$('.'+$(this).data('id')).offset().top+addHeight
		}, 500);
		return false;
	});
// MenuNav

// headerDrop-downContacts
	$('*').on('click',function(e){
		if ($(e.target).closest('.header__contacts-icon').length==0 && $(e.target).closest('.header__contacts-list').length==0 && $(window).width()>=768) {
			$('.header__contacts-list').removeClass('show');
		}
	});

	$('.header__contacts-icon').on('click',function(){
		$('.header__contacts-list').toggleClass('show'); 
	});
// headerDrop-downContacts
	
// infoDrop-downList
	$('.info__title-item').on('click',function(){
		$('.info__title-item').removeClass('active');
		$(this).addClass('active');
		$('.info__title-selector span').text($(this).text());
		$('.info__title-container').hide();
		$('.chang-box__list').removeClass('active');
		$('.chang-box__list:nth-child('+ Number($(this).index()+1)+')').addClass('active');
	});

	$('*').on('click',function(e){
		if ($(e.target).closest('.info__title-selector').length==0 && $(e.target).closest('.info__title-item').length==0) {
			$('.info__title-container').hide();
		}
	});

	$('.info__title-selector').on('click',function(){
		$('.info__title-container').show();
	});
// infoDrop-downList

// servicesTab
	$('.tablinks').on('click',function(){
		$('.tablinks').removeClass('active');
		$(this).addClass('active');
		$('.tabcontent').hide()
		$('#index' + Number($(this).index()+1)).show();
	});
// servicesTab
	
// reviewsSlider
	$('.reviews__slider-box').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  adaptiveHeight: true,
	  centerMode: true,
	  responsive: [
	 	{
	      breakpoint: 900, ///////
	      settings: {
	      	slidesToShow: 2,
	      	centerMode: false ,
	        	arrows: false,
	      }
	   },
      {
	     	breakpoint: 560,
	      settings: {
	      	slidesToShow: 1,
	       	centerMode: false,
	        	arrows: false,
	      }
	    }
	  ]
	});
// reviewsSlider

//pop-up

//pop-upOpenBtn
	$('.jsPop-upBtn').on('click',function(){
		$('.pop-up__overlay').fadeIn();// Позволяет плавно показать окно убрав у него свойство dn
		if (($(window).height()-$('.pop-up__container').outerHeight())/2>0) {
			$('.pop-up__container').css('margin-top',($(window).height()-$('.pop-up__container').outerHeight())/2)
		}
		$('.pop-up__overlay').addClass('disabled');
	});
//pop-upOpenBtn

//pop-upExitBtn
	$('.pop-up__btn-exit').on('click',function(){
		$('.pop-up__overlay').fadeOut(); // Плавно скрываем окно 
		// $('.wraper').css('filter','none'); // Убираем фильтр 
	});
//pop-upExitBtn

//pop-upExitClickOutWindow
	$('*').on('click',function(e){
		if ($(e.target).closest('.pop-up__container').length==0 && $(e.target).closest('.jsPop-upBtn').length==0) {
			$('.pop-up__overlay').fadeOut();
		}
	});
//pop-upExitClickOutWindow

//pop-upTimeouteOpen
	$(window).on('load', function () {
		setTimeout(function(){
			if($('.pop-up__overlay').hasClass('disabled')) {
				return false;
			} else {
				$('.pop-up__overlay').fadeIn();
			}
			if (($(window).height()-$('.pop-up__container').outerHeight())/2>0) {
			$('.pop-up__container').css('margin-top',($(window).height()-$('.pop-up__container').outerHeight())/2)
			}
		}, 500000);
	});
//pop-upTimerOpen

//pop-up
});

