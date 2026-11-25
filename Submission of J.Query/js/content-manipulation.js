$(document).ready(function () {
  $("#showText").click(function () {
    $("#resultText").text("This message was added using .text().");
  });
  $("#showHtml").click(function () {
    $("#resultHtml").html("<i>Formatted content using </i><b>.html()</b>");
  });
  $("#showValue").click(function () {
    const value = $("#userInput").val();
    $("#resultVal").text("Entered value: " + value);
  });
});
