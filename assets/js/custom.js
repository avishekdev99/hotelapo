$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
    });
    $(".close").click(function(){
    $("body").removeClass("menuToggle");
    });
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});

$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

// $('.contless-button').click(function() {
//     $('.moretextt').slideToggle();
//     if ($('.moreless-button').text() == "Read more") {
//       $(this).text("Read less")
//     } else {
//       $(this).text("Read more")
//     }
//   });


$('.contless-button').click(function() {
    var $this = $(this);
    var $moreText = $this.closest('.hotel-text').find('.moretextt');
  
    $moreText.slideToggle();
    if ($this.text() == "Read more") {
      $this.text("Read less");
    } else {
      $this.text("Read more");
    }
  });
