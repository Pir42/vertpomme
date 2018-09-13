$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});

(function($){
            
    //Plugin activation
    $(window).enllax();
    
//            $('#some-id').enllax();

    
})(jQuery);

$("#one").mouseenter(function(){
    $("#leave2").css("right", "-400px");
    $("#leave2").css("transform", "rotate(0deg)");
    $("#leave3").css("left", "-130px");
    $("#leave4").css("right", "-100px");
});

$(".box").mouseenter(function(){
    $(".box > h3").css("opacity", "1");
    $(".box > p").css("opacity", "1");
    $(".box > p").css("transform", "translateY(0px)");
    $("#hand").css("transform", "translateX(0) rotate(0)")
})

$("#two").mouseenter(function(){
    $("#two > h3").css("opacity", "1");
    $('.img').css("opacity", "1");
})