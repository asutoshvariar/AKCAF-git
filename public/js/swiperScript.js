const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    a11y: true,
    cssMode: true,
    allowTouchMove: true,
    freeMode: false,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});