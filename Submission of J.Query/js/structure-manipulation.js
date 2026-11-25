$(document).ready(function () {
  let count = 1;
  $("#btnPrepend").click(function () { $("#studentList").prepend("<li>New Student " + count++ + " (start)</li>"); });
  $("#btnAppend").click(function () { $("#studentList").append("<li>New Student " + count++ + " (end)</li>"); });
  $("#btnBefore").click(function () { $("#box").before("<p class='result'>Added before the box.</p>"); });
  $("#btnAfter").click(function () { $("#box").after("<p class='result'>Added after the box.</p>"); });
  $("#btnEmpty").click(function () { $("#studentList").empty(); });
  $("#btnRemove").click(function () { $("#box").remove(); });
});
