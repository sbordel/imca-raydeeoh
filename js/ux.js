// clock
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
// PLAYER
function change() {
   var img1 = "../assets/audio_player_files/volumeonbutton.png",
       img2 = "../assets/audio_player_files/volumeoffbutton.png";
   var imgElement = document.getElementById('volumeon-button');

   imgElement.src = (imgElement.src === img1)? img2 : img1;
};
// SCHEDULE: BUTTON SWITCH
$(function(){
  $("#monday-button").click(function(){
  $("#monday-list").show();
  $("#tuesday-list").hide();
  $("#wednesday-list").hide();
  $("#thursday-list").hide();
  $("#friday-list").hide();
});
  $("#tuesday-button").click(function(){
  $("#tuesday-list").show();
  $("#monday-list").hide();
  $("#wednesday-list").hide();
  $("#thursday-list").hide();
  $("#friday-list").hide();
});
  $("#wednesday-button").click(function(){
  $("#wednesday-list").show();
  $("#tuesday-list").hide();
  $("#monday-list").hide();
  $("#thursday-list").hide();
  $("#friday-list").hide();
});
  $("#thursday-button").click(function(){
  $("#thursday-list").show();
  $("#wednesday-list").hide();
  $("#tuesday-list").hide();
  $("#monday-list").hide();
  $("#friday-list").hide();
});
  $("#friday-button").click(function(){
  $("#friday-list").show();
  $("#thursday-list").hide();
  $("#wednesday-list").hide();
  $("#tuesday-list").hide();
  $("#monday-list").hide();
});
});
// ARCHIVE: BUTTON SWITCH
$(function(){
  $("#show-button").click(function(){
  $("#show-list").show();
  $("#artist-list").hide();
  $("#category-list").hide();
  });
  $("#artist-button").click(function(){
  $("#artist-list").show();
  $("#show-list").hide();
  $("#category-list").hide();
  });
  $("#category-button").click(function(){
  $("#category-list").show();
  $("#show-list").hide();
  $("#artist-list").hide();
  });
});
