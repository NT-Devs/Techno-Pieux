$(document).ready(function () {
    

    $('#btn-next').click(function () {
        
    });

    $("#login-password-switch").on('change', function () {
        if ($(this).prop('checked')) {
            $('#login-password').attr('type', 'text');
        }
        else {
            $('#login-password').attr('type', 'password');
        }
    });
});
