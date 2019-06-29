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
$(function() {
  $( "#modal1").draggable();
  $( "#modal2").draggable();
  $( "#modal3").draggable();
  $( "#modal4").draggable();
} );
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
