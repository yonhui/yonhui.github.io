$(function() {

  // --------  컨텐츠 3 페이지 변환---------
  $('.title>ul>li').on('click', function() {
    $('.title>ul>li').removeClass('on');
    $(this).addClass('on');

    var i = $(this).index();
    $('.tab-menu-wrap>div').removeClass('on');
    $('.tab-menu-wrap>div').eq(i).addClass('on');
});

})