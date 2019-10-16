$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function() {
      if ($('#carouselButton').children('span').hasClass('fa-pause')) {
        $('#mycarousel').carousel('pause');
        $('#carouselButton').children('span').removeClass('fa-pause');
        $('#carouselButton').children('span').addClass('fa-play');
      } else {
        $('#mycarousel').carousel('cycle');
        $('#carouselButton').children('span').removeClass('fa-play');
        $('#carouselButton').children('span').addClass('fa-pause');
      }
    });


    // login modal toggle on/off behavior
    $('.show-login-modal').on('click', function() {
      $('#loginModal').modal('show');
    });

    $('.hide-login-modal').on('click', function() {
      $('#loginModal').modal('hide');
    });

    // reserve table toggle on/off behavior
    $('.show-reserve-modal').on('click', function() {
      $('#reservationModal').modal('show');
    });

    $('.hide-reserve-modal').on('click', function() {
      $('#reservationModal').modal('hide');
    });

}); 