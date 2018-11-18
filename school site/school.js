
//on scroll fix header and display #scrollTop button

window.onload = function() {

$(document).on('scroll', function () {
    if ($(this).scrollTop() >= 200) {
        $('#header').addClass('fixed');
        $('#scrollTop').css('display', 'inline-block');
    }
    if ($(this).scrollTop() < 200) {
        $('#header').removeClass('fixed');
        $('#scrollTop').css('display', 'none');
    }

});

$('#scrollTop').on('click',function(){
    console.log('click!');
   $(document).scrollTop(0); 
});

};



