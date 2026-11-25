$(document).ready(function () {
  $("#eventBox").click(function () { $("#result").text("Mouse click detected."); });
  $("#eventBox").mouseenter(function () { $("#result").text("Mouse entered the heading."); });
  $("#eventBox").mouseleave(function () { $("#result").text("Mouse left the heading."); });
  $("#keyInput").keydown(function () { $("#result").text("Key down event."); });
  $("#keyInput").keyup(function () { $("#result").text("Key up event."); });
  $("#formInput").focus(function () { $(this).css("background", "#fff4cc"); });
  $("#formInput").blur(function () { $(this).css("background", "white"); });
  $("#myForm").submit(function (event) {
    event.preventDefault();
    $("#result").text("Form submitted. Name: " + $("#formInput").val());
  });
  $(window).on("resize", function () { console.log("Window resized"); });
});
