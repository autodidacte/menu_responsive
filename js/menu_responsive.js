/*-- Menu responsive --*\
    Click icon ajout ou retrait .width-sidebar au body
    Click site-cache retrait .width-sidebar au body
/*----------------*/

(function ($){
    $('#header-icon').click(function(e){
        e.preventDefault();
 $('body').toggleClass('width-sidebar');
    });
    $('#site-cache').click(function(){ $('body').removeClass('width-sidebar');
    });
}) (jQuery);