$(document).ready(function() {
    $("#jdom a").click(function() {
        // Toggle hide for div element above a element
        $(this).prev().toggleClass("hide");
        if ($(this).prev().hasClass("hide")) {
            $(this).html("Show more")
        }
        else {
            $(this).html("Show less")
        }
    });
});