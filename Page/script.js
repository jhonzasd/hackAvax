$(document).ready(function () {
    var currentIndex = 0;
    var slideCount = $('.slide').length;
  
    $('.next-button').click(function () {
      if (currentIndex < slideCount - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });
  
    $('.prev-button').click(function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slideCount - 1;
      }
      updateCarousel();
    });
  
    function updateCarousel() {
      var translateValue = -currentIndex * 100 + '%';
      $('.carousel').css('transform', 'translateX(' + translateValue + ')');
    }
  });