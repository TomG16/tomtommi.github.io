$(document).ready(function() {
    
    // 3 buttons functionality
    $('#button1').click(function(){
        window.location.href = 'https://tomg16.github.io/tomtommi.github.io/';
    });

    $('#button2').click(function(){
        $('#about_popup').show();
    });

    $('#button3').click(function(){
        window.location.href = 'https://trello.com/b/fNaS6EW5/hub';
    });
    $('.closebuttonx').click(function(){
        $("#about_popup").hide();
    });
    
    
});