// The two versions are available as jq1 and jq3 because noConflict(true) released $ and jQuery.
jq1(document).ready(function () {
  jq1("#btn1").click(function () {
    jq1("#box1").text("Changed by jQuery 1.x").css({ background: "orange", color: "white" });
    jq1("#versionResult").text("jQuery 1.x version: " + jq1.fn.jquery);
  });
});
jq3(document).ready(function () {
  jq3("#btn2").click(function () {
    jq3("#box2").text("Changed by jQuery 3.x").css({ background: "purple", color: "white" });
    jq3("#versionResult").text("jQuery 3.x version: " + jq3.fn.jquery);
  });
});
