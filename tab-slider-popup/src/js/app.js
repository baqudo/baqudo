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
  }

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

    $sliders.filter('.is-active').slick(slickOpt);

    function  swithTab(e) {
      var $target = $(this),
        itemPosition = $target.index();

      $target
        .addClass('is-active')
        .siblings().removeClass('is-active');
      $contentItem
        .eq(itemPosition).addClass('is-active')
        .siblings().removeClass('is-active');
    }


    function initSlider(e){
      var $target = $(this),
        itemPosition = $target.index();

      $target
        .addClass('is-active')
        .siblings().removeClass('is-active');
      $contentItem
        .eq(itemPosition).addClass('is-active')
        .siblings().removeClass('is-active');

      var $slider = $contentItem.eq(itemPosition).children($sliders);

      if(!$slider.slick(slickOpt)) {
        $slider.slick(slickOpt);
      }
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
    // console.log(currentSlide);
    // console.log(newSlides.length);

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

  $tabControlNotActive.one('click', initSlider);
  $tabControl.on('click', swithTab);
  $moreBtn.on('click', initPopup);
  $closeBtn.on('click', closePopup);


  $popup.on('click', function(event) {
    if (event.target == this) closePopup();
  });
});

