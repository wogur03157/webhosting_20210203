$(function () {
  var text = $(".text");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    console.log(scroll);
    if (scroll >= 200) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }
  });
});