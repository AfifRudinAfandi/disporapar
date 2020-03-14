  var windowsize = $(window).width();

    if (windowsize < 601) {
      $('.rw-slider').bxSlider({
        auto: false,
        autoControls: false,
        speed: 500,
        slideSelector: 'div.item',
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        pager: false,
        responsive: false,
        touchEnabled: false,
        infiniteLoop: true,
        slideMargin: 60,
        shrinkItem: true,
        mySlides: 1
      });
      $('.wrapper-img-link').bxSlider({
        auto: false,
        autoControls: true,
        speed: 500,
        slideSelector: 'div.img-link',
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        pager: false,
        responsive: true,
        touchEnabled: true,
        infiniteLoop: true,
        slideMargin: 20,
        shrinkItem: true,
        slideWidth: 200,
        mySlides: 1
      });
	} else {
    $('.rw-slider').bxSlider({
      auto: false,
      autoControls: true,
      speed: 500,
      slideSelector: 'div.item',
      minSlides: 2,
      maxSlides: 4,
      moveSlides: 1,
      pager: false,
      responsive: true,
      touchEnabled: false,
      infiniteLoop: true,
      slideMargin: 0,
      shrinkItem: true,
      slideWidth: 350,
      mySlides: 1
    });

    $('.wrapper-img-link').bxSlider({
      auto: false,
      autoControls: true,
      speed: 500,
      slideSelector: 'div.img-link',
      minSlides: 5,
      maxSlides: 5,
      moveSlides: 1,
      pager: false,
      responsive: true,
      touchEnabled: false,
      infiniteLoop: true,
      slideMargin: 20,
      shrinkItem: true,
      slideWidth: 200,
      mySlides: 1
    });
  }

  