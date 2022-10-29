$(function(){
  /* Header Scroll Change */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .btn-top').addClass('active')
    }
    else {
      $('header, .btn-top').removeClass('active')
    }    
  })

  /* Welcome - typed.js */
  $('#typing').typeIt({
    strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });

  /* Faq - Accordion */
  /* $('.faq-desc').eq(0).show()
  $('.faq-title').click(function(){
    $(this).next().stop().slideDown()
    $(this).parent().siblings().children('.faq-desc').stop().slideUp()
    $(this).parent().siblings().removeClass('active')
    $(this).parent().addClass('active')
  }) */

  /* Slick - Review */
  $('.review-slider, .mockup-slider').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  
  $('.slideshow-area').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  });

  /* Video Modal */
  $('.open-modal').click(function(){
    $('.video-modal').fadeIn()
    $('body').addClass('active')
  })
  $('.close-modal').click(function(){
    $('.video-modal').fadeOut()
    $('body').removeClass('active')
  })

  /* Header Trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a').click(function(){
    $('.gnb').removeClass('active')
    $('.trigger').removeClass('active')
  })

  /* Wow Scroll Reveal Animation */
  wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    mobile: true
  })
  wow.init()

  /* Link Sliding jQuery */
  /* $('.gnb a, .btn-top').click(function(e){
    $.scrollTo(this.hash || 0, 800);
    e.preventDefault();
  }) */
})

$(function(){
  $('.faq-desc').eq(0).show()
    $('.faq-title').click(function(){
      $(this).next().stop().slideDown()
      $(this).parent().siblings().children('.faq-desc').stop().slideUp()
      $(this).parent().siblings().removeClass('active')
      $(this).parent().addClass('active')
    })
})