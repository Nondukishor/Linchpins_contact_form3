$(function () {

    'use strict';
  
    (function () {
  
      var aside = $('.cv_db_aside_area'),
  
          showAsideBtn = $('.cv_db_aside_nav_toggle_btn'),
  
          contents = $('#main_content'),
          closeBtn=$('.closebtn');
  
          showAsideBtn.on("click", function () {
            
          aside.toggleClass('cv_db_show_aside_nav');

          contents.toggleClass('cv_db_content_fullwidth');
  
      });
  
      if ($(window).width() <= 767) {

        aside.addClass('cv_db_show_aside_nav overlay active');

        contents.addClass('cv_db_content_fullwidth');

        closeBtn.addClass('active')

      }
      $(window).on('resize', function () {
        if ($(window).width() > 767) {
          aside.removeClass('cv_db_show_aside_nav');
        }
      });

   
      
    }());
});

$('.closebtn').on('click',function(){
     $('aside').removeClass('cv_db_aside_area clearfix cv_db_full_height cv_db_scrollbar overlay active');
     $('aside').addClass('cv_db_aside_area clearfix cv_db_full_height cv_db_scrollbar cv_db_show_aside_nav overlay active');
})


