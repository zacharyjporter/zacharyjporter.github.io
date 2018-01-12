$(document).ready(function(){
    $(window).scroll(function () {
       $('.scroll-arrow').fadeIn();
        if($(this).scrollTop()==0){
         $('.scroll-arrow').fadeOut();
        }
    });
});