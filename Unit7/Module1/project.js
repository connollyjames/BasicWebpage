$(document).ready(function() {
    $("h1, h2").click(function() {
        $(this).css("color", "yellow");
    });

    $("h1, h2").mouseenter(function() {
        $(this).css("color", "black");
    });

    $("h1, h2").mouseleave(function() {
        $(this).css("color", "green");
    });

    $("h1").mousedown(function() {
        $(this).css("background-color", "yellow");
    });

    $("h1").mouseup(function() {
        $(this).css("background-color", "rgba(0, 0, 0, 0)")
    })

    $("h2").mousedown(function() {
        $(this).css("background-color", "blue");
    });

    $("h2").mouseup(function() {
        $(this).css("background-color", "rgba(0, 0, 0, 0)")
    });

    $("h3").click(function() {
        $("h2").unbind("mousedown")
        $("h2").unbind("mouseup")
    });
});