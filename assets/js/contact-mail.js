$(function () {

    /* =============== Form Handling =============== */
    $('form#contact_message').on('submit', function (e) {
        e.preventDefault(); //Prevents default submit
        var form = $(this);
        var post_data = form.serialize(); //Serialized the form data

        $.ajax({
                type: 'POST',
                url: $(form).attr('action'), // Form script
                data: post_data
            })
            .done(function () {

                // Get the snackbar DIV
                var x = document.getElementById("successbar");
                // Add the "show" class to DIV
                x.className = "show";
                // After 3 seconds, remove the show class from DIV
                setTimeout(function () {
                    x.className = x.className.replace("show", "");
                }, 3000);

                $("form#contact_message")[0].reset();

            })
            .fail(function () {

                // Get the fail-snackbar DIV
                var y = document.getElementById("errorbar");
                
                y.className = "show";
                // After 3 seconds, remove the show class from DIV
                setTimeout(function () {
                    y.className = y.className.replace("show", "");
                }, 3000);

                $("form#contact_message input")[0].val().reset();
            });
    });

});