$(document).ready(function () {
  $("#showBox").click(function () { $("#box").fadeIn(); });
  $("#hideBox").click(function () { $("#box").hide(); });
  $("#toggleText").click(function () { $("#text").slideToggle(); });
  $("#highlightText").click(function () { $("#text").toggleClass("highlight"); });
});
