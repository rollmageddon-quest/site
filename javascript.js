$(document).ready(function(){       
  var scroll_start = 0;
    $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > 20) {
       $(".bg-navflow").css('background-color', '#2c3034');
      } else {
       $('.bg-navflow').css('background-color', 'transparent');
      }
    });
});
