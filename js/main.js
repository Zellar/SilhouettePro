document.addEventListener( 'DOMContentLoaded', function() {
    // let heroSlider = new Splide( '.hero__slider', {
    //     type   : 'loop',
    //     pagination: false,
    //     perPage: 1,
    //     permove: 1,
    //     focus  : 'center',
    //     updateOnMove: true,
    //     rewind: true,
    //     drag: false,
    //     fixedWidth: '750px',
    //     fixedHeight: '385px',
    // } );
    // heroSlider.mount();

    const heroSlider = new Swiper('.hero__slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 1,
        allowTouchMove: false,
        effect: 'creative',
        creativeEffect: {
            limitProgress: 2,
            prev: {
              translate: ['-100%', '30%', 0],
              scale: 0.6,
            },
            next: {
              translate: ['100%', '30%', 0],
              scale: 0.6,
            },
        },
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      const heroTextSlider = new Swiper('.hero__text-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        effect: 'creative',
        creativeEffect: {
            limitProgress: 3,
            prev: {
              translate: [0, 0, 0],
              opacity: 0,
              scale: 0,
            },
            next: {
              translate: [0, 0, 0],
              opacity: 0,
              scale: 0,
            },
        }
      });

      heroSlider.controller.control = heroTextSlider;

    let threadsSlider = new Splide( '.threads-slider', {
        pagination: false,
        classes: {
            prev  : 'threads-slider__arrow--prev',
		        next  : 'threads-slider--next',
        },
        rewind: true,
    } );
    threadsSlider.mount();

    let reviewsSlider = new Splide( '.reviews__slider', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        focus: 'center',
        arrows: false,
        width: '1440px',
        updateOnMove: true,
        fixedWidth: '750px',
        fixedHeight: '385px',
        drag: false,
        autoplay: false,
        breakpoints: {
            1240: {
                width: '1024px',
                fixedWidth: '460px',
            },
            767: {
              width: '400px',
              fixedWidth: '400px',
              perPage: 1,
              type: 'slide',
              gap: '10px',
            },
            424: {
              width: '280px',
              fixedWidth: '280px',
              perPage: 1,
              type: 'slide',
              gap: '10px',
            },
            
        },
    } );
    reviewsSlider.mount();

    let heroMobSlider = new Splide( '.hero__slider-mob', {
      type   : 'loop',
      perPage: 1,
      perMove: 1,
      focus  : 'center',
      updateOnMove: true,
      drag: false,
      autoplay: false,
      pagination: false,
      classes: {
        prev  : 'hero-slider-mob--prev',
        next  : 'hero-slider-mob--next',
    },
  } );
  heroMobSlider.mount();

    // Мобильное меню
  let mobBtn = document.querySelector('.menu');
  let mobMenuLinks = document.querySelectorAll('.header__nav-mobile-link');
  let mobMenu = document.querySelector('.header__nav-mob-list');
  let wrapper = document.querySelector('.wrapper');

  let noScroll = () => {
    let body = document.querySelector('body');
    let html = document.querySelector('html');
    if (mobBtn.classList.contains('active')) {
        body.style.overflowY = 'hidden';
        html.style.overflowY = 'hidden';
    } else {
        body.style.overflowY = 'auto';
        html.style.overflowY = 'auto';
    }
};

    let openMobMenu = (btn, menu, menuLinks, wrapper) => {
      menuLinks.forEach ( i => {
        i.addEventListener('click', () => {
          btn.classList.toggle('active');
          menu.classList.toggle('active');
          wrapper.classList.toggle('active');
        });
        noScroll();
      });
      document.addEventListener('click', (e) => {
          if(e.target === btn) {
              btn.classList.toggle('active');
              menu.classList.toggle('active');
              wrapper.classList.toggle('active');
          }
          noScroll();
      });
  };

  openMobMenu(mobBtn, mobMenu, mobMenuLinks, wrapper);

  AOS.init();

});