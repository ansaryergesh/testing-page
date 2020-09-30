$('#draggable-point').draggable({
    axis: 'x',
    containment: "#money-progress"
  });
  
  $('#draggable-point').draggable({
    drag: function() {
      var offset = $(this).offset();
      var xPos = (100 * parseFloat($(this).css("left"))) / (parseFloat($(this).parent().css("width"))) + "%";

      $('#money-progress-bar').css({
        'width': xPos
      });
    }
  });


  function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(43.2323017, 76.90506239999999),
        zoom: 300,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
