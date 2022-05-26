(function($){
    $('.About__number').each(function(){
        $(this).prop('Counter',0).animate({
            Counter:$(this).text()
        },
        {
            duration:9000,
            easing:"swing",
            step:function(now){
                $(this).text(Math.ceil(now));
            }  
       });
    })
  })(jQuery);

  
$(document).ready(function(){
    $('.header__slaeder__max').slick({
        dots: true,
        arrows:false,
        autoplaySpeed:3000,
        infinite: true,
        speed: 1500,
        autoplay:true,
    });



    $('.About_company__slaeder').slick({
        dots: false,
        arrows:false,
        autoplaySpeed:2500,
        infinite: true,
        speed: 700,
        autoplay:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 811,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 431,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});

 // --------------------------------

$(document).ready(function(){
    $('#header__button').click(function(){
        $('.header__input__pro').fadeTo(500,1);
        $('.header__input__pro').css('display','block');
    })
})

$(document).ready(function(){
    $('.header__button__none').click(function(){
        $('.header__input__pro').fadeTo(500,1);
        $('.header__input__pro').css('display','none');
    })
})


  // --------------------------------

$(function(){
  let Catalog_max__pro__link = document.querySelectorAll('.Catalog_max__pro__link');

  for(let i = 0; i<Catalog_max__pro__link.length; i++){
      Catalog_max__pro__link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__link.length;j++){
              Catalog_max__pro__link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.Catalog_max__pro__ul_link');

  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

// -------------------------------------

$( function() {
  $( "#tabs" ).tabs();
} );

// ====================================

$( function() {
  var tabs = $( ".tabs" ).tabs();
  var previouslyFocused = false;

  tabs.find( ".ui-tabs-nav" ).sortable({
    axis: "x",
    start: function(event, ui) {
      previouslyFocused = document.activeElement === ui.item[ 0 ];
    },
    stop: function(event, ui) {
      tabs.tabs( "refresh" );
      if (previouslyFocused) {
        ui.item.trigger( "focus" );
      }
    }
  });
} );

// ------------------------------------



// --------\/--ACTIVE--\/---------

$(function(){
  let pogination__number = document.querySelectorAll('.pogination__number');

  for(let i = 0; i<pogination__number.length; i++){
      pogination__number[i].addEventListener('click',function(){
          for(let j = 0; j<pogination__number.length;j++){
              pogination__number[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

// --------/\--ACTIVE--/\---------

