
$(document).ready(function(){
    $('.offer_slider').slick({
      arrows:true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll:2,
        variableWidth: true,
        draggable: true,
pauseOnHover: true,
swipeToSlide: true,
adaptiveHeight: false,
centerMode: false,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    $('.cards').slick({
      arrows:true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll:2,
        variableWidth: true,
        draggable: true,
pauseOnHover: true,
swipeToSlide: true,
adaptiveHeight: false,
centerMode: false,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });