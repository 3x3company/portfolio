$(document).ready(function () {
  $('.header__burger').on('click', function () {
    $(this).toggleClass('active');
    $('body').toggleClass('lock');
    $('.header__menu').toggleClass('active');
    $('.header__menu').on('click', function () {
      $(this).removeClass('active');
    });
    $('.header__menu-item').on('click', function (event) {
      event.stopPropagation();
    });
  });

  const filterBtn = $('[data-filter]');
  const filterItem = $('[data-category]');
  filterBtn.on('click', function (event) {
    event.preventDefault();
    filterBtn.removeClass('active');
    $(this).addClass('active');
    let dataValueFilterBtn = $(this).attr('data-filter');

    if (dataValueFilterBtn == 'all') {
      filterItem.show(0);
    } else {
      filterItem.each(function () {
        let dataValueFilterItem = $(this).attr('data-category');
        if (dataValueFilterBtn != dataValueFilterItem) {
          $(this).hide(0);
        } else {
          $(this).show(0);
        }
      })
    }
  });
  $('.m-gallery__img-slider').slick({
    arrows: false,
    dots: true,
  });

  const modalCall = $('[data-modal]');
  const modalClose = $('[data-close]');
  modalCall.on('click', function (event) {
    event.preventDefault;
    let modalId = $(this).attr('data-modal');
    $(modalId).addClass('show');
    $('body').addClass('lock');
  });

  modalClose.on('click', function (event) {
    event.preventDefault;
    let modalParent = $(this).parents('.modal');
    modalParent.removeClass('show');
    $('body').removeClass('lock');
  });

  $('.modal').on('click', function (event) {
    event.preventDefault();
    $(this).removeClass('show');
    $('body').removeClass('lock');
  });

  $('.m-gallery__unit').on('click', function (event) {
    event.stopPropagation();
  });
  $('.m-resume__item').on('click', function (event) {
    event.stopPropagation();
  });
});