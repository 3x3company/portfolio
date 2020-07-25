$(document).ready(function () {
  $('.header__burger').on('click', function () {
    $(this).toggleClass('active');
    $('body').toggleClass('lock');
    $('.header__menu').toggleClass('active');
  });

  $('[data-filter]').on('click', function (event) {
    event.preventDefault();
    $('[data-filter]').removeClass('active');
    $(this).addClass('active');
    let filterCategory = $(this).data('filter');

    if (filterCategory == 'all') {
      $('[data-category').show(0);
    } else {
      $('[data-category]').each(function () {
        let itemCategory = $(this).data('category');
        if (itemCategory != filterCategory) {
          $(this).hide(0);
        } else {
          $(this).show(0);
        }
      })
    }
  });

});