// Navigation
var $win = $(window);

$win.scroll(function () {
    if ($(window).width() > 550) {
        if ($win.scrollTop() == 0) {
            $(".navbar").removeClass("fade-color");
        } else if (!$win.scrollTop() == 0) {
            $(".navbar").addClass("fade-color");
        }
    }
});
// Progress-bar
// $('#draggable-point').draggable({
// 	axis: 'x',
// 	containment: "#money-progress"
//   });
  
//   $('#draggable-point').draggable({
// 	drag: function() {
// 	  var offset = $(this).offset();
// 	  var xPos = (100 * parseFloat($(this).css("left"))) / (parseFloat($(this).parent().css("width"))) + "%";
	 
// 	  $('#money-progress-bar').css({
// 		'width': xPos
// 	  });
// 	}
//   });

// Form oplata

$("#oplataform").validate({
    rules: {
      iin: {
        required: true,
		number: true,
		minlength: 12
		
      },
      summa: {
		required: true,
		number: true,
		minlength: 5,
        },
      },
    messages: {
      iin: {
        required: "Поле ИИН обязательно для заполнения",
        minlength: jQuery.validator.format("Длина имени должна быть 12-ти число")
      },
      summa: {
        required: "Поле Сумма обязательно для заполнения",
        minlength: jQuery.validator.format("Длина имени должна быть 3-ти число")
      }

    },
     submitHandler: function() {
       alert("Вы успешно зарегистрировались!");
    }
  });

// var bar, slider;
// var days = 15;
// var money = 15000;
// var summa = document.getElementById("summa");
// var dnei = document.getElementById("dnei");
// var vozvrat = document.getElementById("vozvrat");
// summa.appendChild(money);
// function init(){
// 	bar = document.getElementById('money-progress-bar');
// 	slider = document.getElementById('draggable-point');
// 	info = document.getElementById('info');
// 	bar.addEventListener('mousedown', startSlide, false);	
// 	bar.addEventListener('mouseup', stopSlide, false);
// }
// function startSlide(event){
// 	var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
// 	info.innerHTML = 'start' + set_perc + '%';	
// 	bar.addEventListener('mousemove', moveSlide, false);	
// 	slider.style.width = (set_perc * 100) + '%';	
// }
// function moveSlide(event){
// 	var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
// 	info.innerHTML = 'moving : ' + set_perc + '%';
// 	slider.style.width = (set_perc * 100) + '%';
// }
// function stopSlide(event){
// 	var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
// 	info.innerHTML = 'done : ' + set_perc + '%';
// 	bar.removeEventListener('mousemove', moveSlide, false);
// 	slider.style.width = (set_perc * 100) + '%';
// }