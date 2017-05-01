$(function(){
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });
});

$(function(){
  $('a').click(function(){
      $('html, body').animate({
          scrollLeft: $( $(this).attr('href') ).offset().left
      }, 500);
      return false;
  });
});

