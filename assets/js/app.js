$(document).ready(function(){

  "use strict";

  /******************************/

  /* SPINNER & SCROLLBAR JS */

  /******************************/
  
  $(window).on("load", function () {
      $('.rtp_spinner').fadeOut();
      $('.rtp_preloader').delay(350).fadeOut('slow');
  });

  // $('.scrollbar-inner').scrollbar();


  /******************************/

  /* NAV COLLAPSE JS */

  /******************************/
  
  $('.off_show__screen').on("click", function () {
      $('.off_show__screen, header.rtp_header').toggleClass('nav_opened');
      if ( $('body').hasClass('home') ) {
        $('.page_wrapper').toggleClass('show_off');
        $('body').toggleClass('show_off__hidden');
      } else {
        $('body').toggleClass('show_off__hidden');
        $('.page_wrapper').toggleClass('show_off_220');
      }
  });

  /******************************/

  /* TOGGLE NAVIGATION */

  /******************************/

  $('.toggle_navbar').on('click', function () {
    $('.rtp_nav').toggleClass('nav_closed');
  });
  $('ul.rtp_nav__list li a').on('click', function() {
    $('.rtp_nav').toggleClass('nav_closed', 300);
  });

  /******************************/

  /* MAGNIFIC POPUP */

  /******************************/

  
  if ($('body').hasClass('magnificPopup_gallery_in')) {

    $('.portfolio_popup').magnificPopup({
      type: 'image',
      gallery: {
          enabled: true
      }
    });
  }

  /******************************/

  /* MASONRY GRID */

  /******************************/

  // init Masonry
  var $grid = $('.rtp_portfpg_items').masonry({
    // options
    itemSelector: '.grid_item',
    columnWidth: '.grid_item'
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });

  /******************************/

  /* TESTIMONIALS CAROUSEL */

  /******************************/

  $(".rtp_testimonial__carousel").slick({
    autoplay: true,
    arrows: true,
    prevArrow: '<div class="prev_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="next_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
  });

  $(".rtp_hero__slider").slick({
    autoplay: true,
    arrows: true,
    fade: true,
    cssEase: 'ease-in-out',
    prevArrow: '<div class="prev_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="next_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
  });
  


  $('.rtp_portfolio__items').mixItUp();

});