// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

// --------------------------------------tab-slider-popup-slider--------------------------------------
$(function () {

  var slickOpt = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  var $tabControl = $('.tabs__link'),
      $tabControlNotActive = $tabControl.filter(':not(.is-active)'),
      $contentList = $('.tabs__list'),
      $contentItem = $('.tabs__content'),
      $sliders = $('.slider'),
      $moreBtn = $('.js-more-btn'),
      $closeBtn = $('.popup-close-btn'),
      $popup = $('.popup-container'),
      $popupBox = $('.popup-box'),
      $popupSlider = $('.popup-slider');

    $('.slider').filter('.is-active').slick(slickOpt);


  function initSlider(e){

    var
      $target = $(this),
      itemPosition = $target.index();

    $target.addClass('is-active').siblings().removeClass('is-active');   
    $contentItem.eq(itemPosition).addClass('is-active').siblings().removeClass('is-active');

    if ($('.slider:hidden').hasClass('slick-slider')) {
      $('.slider:hidden').slick('unslick');
      console.log('msg')
    }

    $contentItem.eq(itemPosition).children('.slider').slick(slickOpt);
  }


  function initPopup() {
    var $this = $(this);
    var newSlider = $this.parents('.slider');
    var $currentSlide = $this.parent().index();
    var newSlides = newSlider.find('.slide');
    var $slideCounterCurrent = $('.popup-slide-counter__current');
    var $slideCounterAll = $('.popup-slide-counter__all');

    $popup.css('display', 'block');
    $slideCounterCurrent.text($currentSlide + 1);
    $slideCounterAll.text(newSlides.length);

    newSlides.clone().appendTo($popupSlider);

    $popupSlider.slick({
      infinite: false,
      arrows: true,
      initialSlide: $currentSlide
    });

    $popupSlider.on('afterChange', function(event, slick, currentSlide) {
      $slideCounterCurrent.text(currentSlide + 1);
    });
  }

  function closePopup() {
    $popup
      .find('.popup-slider')
      .slick('unslick')
      .children().remove();
    $popup.css('display', 'none');
  }

  $tabControl.on('click', initSlider);
  $moreBtn.on('click', initPopup);
  $closeBtn.on('click', closePopup);


  $popup.on('click', function(event) {
    if (event.target == this) closePopup();
  });
});

