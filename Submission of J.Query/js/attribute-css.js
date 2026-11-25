$(document).ready(function () {
  $("#changeAttr").click(function () { $("#demoLink").attr("href", "https://www.wikipedia.org"); });
  $("#addClass").click(function () { $("#demoText").addClass("highlight"); });
  $("#removeClass").click(function () { $("#demoText").removeClass("highlight"); });
  $("#toggleClass").click(function () { $("#demoText").toggleClass("highlight"); });
  $("#changeCss").click(function () { $("#demoText").css({ color: "purple", fontSize: "20px" }); });
  $("#removeAttr").click(function () { $("#demoLink").removeAttr("target"); });
});
