$(document).ready(function () {
  $("#item").click(function () {
    $(this).parent().css("color", "red");
    $(this).parents("#ancestorDiv").css("border", "2px solid blue");
  });
  $("#container").children().css("color", "green");
  $("#container").find(".special").css("font-weight", "bold");
  $("#mid").siblings().css("color", "blue");
  $("#mid").next().css("font-size", "20px");
  $("#mid").prev().css("font-weight", "bold");
  $(".filterPara").eq(1).css("color", "red");
  $(".filterPara").first().css("background", "#fff1a8");
  $(".filterPara").filter(".highlight").css("font-weight", "bold");
  $(".filterPara").not(".highlight").css("opacity", "0.7");
});
