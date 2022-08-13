$(function(){

    $(window).scroll(function(){
        console.log($(window).scrollTop())
    
        if($(window).scrollTop() >300){
    $(".menu").addClass("nav-scroll")
        }else{
            $(".menu").removeClass("nav-scroll") 
        }


 if($(window).scrollTop() >600){
          $(".top-button") .fadeIn()
              }else{
                $(".top-button") .fadeOut()
              }


    })     
    

$(".brand-slider").slick({
    slidesToShow:5,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,

    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$('.counter').counterUp();

$(".services-slider").slick({
    vertical:true,
    centerMode:true,
    prevArrow:'<i class="fa-solid fa-arrow-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right next"></i>'
})

$(".studies-slider").slick({
    slidesToShow:3,
    centerMode:true,
    centerPadding:0,
    arrows:false,
    dots:true,

    responsive: [
        {
          breakpoint: 922,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

})

$(".top-button").click(function(){
    $("html,body").animate({
      scrollTop:0
    },1000)
    })

})