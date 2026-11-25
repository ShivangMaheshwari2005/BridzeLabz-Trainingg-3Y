$(document).ready(function () {
  $("#selectBtn").click(function () {
    $("p").css("color", "green");
    $(".inputBox").css({ border: "2px solid blue", padding: "8px" });
    $("#sampleBox > p").css("font-weight", "bold");
    $("input[type='text']").css("background", "#fff4cc");
    $("#result").text("Tag, class, ID, child, and attribute selectors applied.");
  });
});
