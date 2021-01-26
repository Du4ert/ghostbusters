$(document).ready(() => {
  const mobileMenuTrigger = $('.mobile-menu-trigger');
  const topMenu = $('.top-menu');
  const mobileMenuSearch = $('.mobile-menu-search');
  const search = $('.search');
  const body = $('body');
  const moreNavItem = $('.more-nav-item');
  const moreContent = $('.more-content');

  const toggleMenu = () => {
    topMenu.toggleClass('active');
    mobileMenuTrigger.toggleClass('active');
    body.toggleClass('no-scroll');
  }

  const tabSwitcher = (e) => {
    e.preventDefault();
    let target = e.target;
    let tabTarget = $(target).attr('data-target');

    moreNavItem.each(function () {
      $(this).removeClass('active');
    });
    moreContent.each(function () {
      $(this).removeClass('active');
      if ($(this).is('#' + tabTarget)) {
        $(this).addClass('active');
      }
    });

    $(target).addClass('active');
  }

  moreNavItem.click(tabSwitcher);
  mobileMenuTrigger.click(toggleMenu);
  mobileMenuSearch.click(() => {
    toggleMenu();
    search.focus();
  });

  const swiper = new Swiper('.swiper-container', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 25,
    // centerInsufficientSlides: true,
    loop: true,
    navigation: {
      nextEl: '.news-button-next',
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    }
  })
})