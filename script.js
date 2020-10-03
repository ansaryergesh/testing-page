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

  $(document).ready(function () {
    $('.otherPages .hidden').fadeIn(1000).removeClass('hidden');
});


var money = docum