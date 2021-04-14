$(function(){
  // slick.js visual
  $('.visual-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  })
  $('.visual-slider2').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  })
  $('.visual-slider3').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  })

  /* Trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
    $('.main').siblings().children('.sub').slideUp();
  })
  
  $('.gototop').click(function(e){
    $.scrollTo(this.hash || 0, 900)
  })
  //모바일메뉴 스크립트
  $(".main").click(function(){
    $(this).find('.sub').slideToggle();
    $(this).siblings().children('.sub').slideUp();
  })
  /* Change CSS with Scroll */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.gototop').addClass('active')
    }
    else {$('.gototop').removeClass('active')
    }
  })
});
// $(function(){
//   $('.con1-cnt ul > li > a').mouseover(function(){
//     $('.con1-cnt .active').removeClass('active')
//     $(this).addClass('active')
//   })
//   $('.con1-cnt ul > li > a').mouseout(function(){
//     $(this).removeClass('active')
//   })
// });
$(function(){
	var $firstMenu = $('.nav > ul > li'),
			$header = $('header');
	
	$firstMenu.mouseenter(function(){
		$header.stop().animate({height:'360px'});
	})
	.mouseleave(function(){
		$header.stop().animate({height:'150px'});
	});
});