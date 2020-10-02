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