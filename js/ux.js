// SCHEDULE: BUTTON SWITCH
$(function () {
  $("#monday-button").click(function () {
    monday();
    $("#monday-button").css('background-color', 'black');
		$("#monday-button").css('color', 'white');
    $("#tuesday-button").css('background-color', 'white');
		$("#tuesday-button").css('color', 'black');
    $("#wednesday-button").css('background-color', 'white');
		$("#wednesday-button").css('color', 'black');
    $("#thursday-button").css('background-color', 'white');
    $("#thursday-button").css('color', 'black');
    $("#friday-button").css('background-color', 'white');
		$("#friday-button").css('color', 'black');
  });
  $("#tuesday-button").click(function () {
    tuesday();
    $("#monday-button").css('background-color', 'white');
		$("#monday-button").css('color', 'black');
    $("#tuesday-button").css('background-color', 'black');
		$("#tuesday-button").css('color', 'white');
    $("#wednesday-button").css('background-color', 'white');
		$("#wednesday-button").css('color', 'black');
    $("#thursday-button").css('background-color', 'white');
    $("#thursday-button").css('color', 'black');
    $("#friday-button").css('background-color', 'white');
		$("#friday-button").css('color', 'black');
  });
  $("#wednesday-button").click(function () {
    wednesday();
    $("#monday-button").css('background-color', 'white');
		$("#monday-button").css('color', 'black');
    $("#tuesday-button").css('background-color', 'white');
		$("#tuesday-button").css('color', 'black');
    $("#wednesday-button").css('background-color', 'black');
		$("#wednesday-button").css('color', 'white');
    $("#thursday-button").css('background-color', 'white');
    $("#thursday-button").css('color', 'black');
    $("#friday-button").css('background-color', 'white');
		$("#friday-button").css('color', 'black');
  });
  $("#thursday-button").click(function () {
    thursday();
    $("#monday-button").css('background-color', 'white');
		$("#monday-button").css('color', 'black');
    $("#tuesday-button").css('background-color', 'white');
		$("#tuesday-button").css('color', 'black');
    $("#wednesday-button").css('background-color', 'white');
		$("#wednesday-button").css('color', 'black');
    $("#thursday-button").css('background-color', 'black');
    $("#thursday-button").css('color', 'white');
    $("#friday-button").css('background-color', 'white');
		$("#friday-button").css('color', 'black');
  });
  $("#friday-button").click(function () {
    friday();
    $("#monday-button").css('background-color', 'white');
		$("#monday-button").css('color', 'black');
    $("#tuesday-button").css('background-color', 'white');
		$("#tuesday-button").css('color', 'black');
    $("#wednesday-button").css('background-color', 'white');
		$("#wednesday-button").css('color', 'black');
    $("#thursday-button").css('background-color', 'white');
    $("#thursday-button").css('color', 'black');
    $("#friday-button").css('background-color', 'black');
		$("#friday-button").css('color', 'white');
  });
});
// SUBMISSION: BUTTON SWITCH
$(function () {
  $("#radioshow-button").click(function () {
    $("#radioshow-section").show();
    $("#soundpiece-section").hide();
  });
  $("#soundpiece-button").click(function () {
    $("#soundpiece-section").show();
    $("#radioshow-section").hide();
  });
});
// ARCHIVE: BUTTON SWITCH
$(function () {
  $("#show-button").click(function () {
    $("#show-list").show();
    $("#artist-list").hide();
    $("#category-list").hide();
  });
  $("#artist-button").click(function () {
    $("#artist-list").show();
    $("#show-list").hide();
    $("#category-list").hide();
  });
  $("#category-button").click(function () {
    $("#category-list").show();
    $("#show-list").hide();
    $("#artist-list").hide();
  });
});