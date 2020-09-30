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



