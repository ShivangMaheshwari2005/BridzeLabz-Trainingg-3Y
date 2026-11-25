$(document).ready(function () {
  $("#btnShow").click(function () { $("#panel").show(); });
  $("#btnHide").click(function () { $("#panel").hide(); });
  $("#btnToggle").click(function () { $("#panel").toggle(); });
  $("#btnFadeIn").click(function () { $("#panel").fadeIn(); });
  $("#btnFadeOut").click(function () { $("#panel").fadeOut(); });
  $("#btnFadeToggle").click(function () { $("#panel").fadeToggle(); });
  $("#btnFadeTo").click(function () { $("#panel").fadeTo("slow", 0.5); });
  $("#btnSlideDown").click(function () { $("#panel").slideDown(); });
  $("#btnSlideUp").click(function () { $("#panel").slideUp(); });
  $("#btnSlideToggle").click(function () { $("#panel").slideToggle(); });
  $("#btnAnimate").click(function () {
    $("#panel").animate({ width: "300px", height: "100px", opacity: 0.5 }, 1000);
  });
});
