$(function() {
    $('form input[type=submit]').click(function(e) {
        const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/ostapuk1105@gmail.com",
            method: "POST",
            data: { 
                visitorName: $('#visitor-name').val(),
                visitorEmail: $('#visitor-email').val(),
                visitorMessage: $('#visitor-message').val()},
            dataType: "json"
        }).done(function() {
            form.reset();
        });
    });
});