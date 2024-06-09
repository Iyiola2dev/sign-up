jQuery(document).ready(function($){

    $(document).on('click','button.sign_in', function(){
        $(".login_page").toggleClass('active');
        $('.page_left_sec').toggleClass('active');
        $('.sign_in').toggleClass('active')

        $(".accout_title").html('Sign In To Your Account')
        $('.sign-in-title').html('Hello Friend!')
        $('.sign_in_para').html('Enter Your Personal Details And Start Your Journey with us')
        $('.password').hide();
        // $('.email').append('<p class ="forgot_pass">Forgot Password?</p>');
        $('.email').append('<p class="forgot_pass">Forgot Password?</p>');
    })
});


$(document).on('click','button.sign_in.active', function(){

    $(".accout_title").html('Create Account')
    $('.sign-in-title').html('Welcome Back!')
    $('.sign_in_para').html('To Keep connected with us please login with your personal info')
    $('.password').show();
    $('.forgot_pass').hide();
})
