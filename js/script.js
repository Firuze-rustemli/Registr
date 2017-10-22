$(document).ready(function () {

    $(".register").submit(function (event) {
        event.preventDefault();
        $(this).find(".error").remove();
        $(this).find(".required").each(function () {
            if ($(this).val().length == 0) {
                $(this).after('<p class="error">' + $(this).data("errormsg") + '</p>');
            }
        });
    });


});