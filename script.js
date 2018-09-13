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

$("#one").mouseover(function(){
    $("#leave2").css("right", "-400px");
    $("#leave2").css("transform", "rotate(0deg)");
    $("#leave3").css("left", "-130px");
    $("#leave4").css("right", "-100px");
});

$(".box").mouseover(function(){
    $(".box > h3").css("opacity", "1");
    $(".box > p").css("opacity", "1");
    $(".box > p").css("transform", "translateY(0px)");
    $("#hand").css("transform", "translateX(0) rotate(0)")
})

var testing = 0;

$("#two").mouseover(function(){
    $("#two > h3").css("opacity", "1");
    $("#liane2").css("left", "-300px");
    $("#mint").css("right", "-400px");
    $("#iphone").css("opacity", "1");
    $("#spotify").css("opacity", "1");
    $("#shampoing").css("opacity", "1");
    $("#gum").css("opacity", "1");

    if(testing == 0) {

    var lastScrollTop = 0;

    var numberRotate = 20;
    var addingRotate = .2;
    var addingTranslate = 4;
    var numberTranslate = -400;

    var numberRotateS = -30;
    var addingRotateS = 1;
    var addingTranslateS = .8;
    var numberTranslateS = -200;

    var numberRotateSH = 50;
    var addingRotateSH = .4;
    var addingTranslateSH = 5;
    var numberTranslateSH = 400;

    var numberRotateG = -70;
    var addingRotateG = .8;
    var addingTranslateG = 1;
    var numberTranslateG = 300;

    testing = testing+1;

    }

    window.addEventListener("scroll", function(){
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            numberRotate = numberRotate + addingRotate;
            numberTranslate = numberTranslate + addingTranslate;

            numberRotateS = numberRotateS + addingRotateS;
            numberTranslateS = numberTranslateS + addingTranslateS;

            numberRotateSH = numberRotateSH - addingRotateSH;
            numberTranslateSH = numberTranslateSH - addingTranslateSH;

            numberRotateG = numberRotateG - addingRotateG;
            numberTranslateG = numberTranslateG - addingTranslateG;

            document.getElementById("iphone").style.transform = "translateY(" + numberTranslate +"px) rotate(" + numberRotate + "deg)";

            document.getElementById("spotify").style.transform = "translateY(" + numberTranslateS +"px) rotate(" + numberRotateS + "deg)";
            
            document.getElementById("shampoing").style.transform = "translateY(" + numberTranslateSH +"px) rotate(" + numberRotateSH + "deg)";
            
            document.getElementById("gum").style.transform = "translateY(" + numberTranslateG +"px) rotate(" + numberRotateG + "deg)";
        } 
        else {
            numberRotate = numberRotate - addingRotate;
            numberTranslate = numberTranslate - addingTranslate*.2;

            numberRotateS = numberRotateS - addingRotateS;
            numberTranslateS = numberTranslateS - addingTranslateS*.3;

            numberRotateSH = numberRotateSH + addingRotateSH;
            numberTranslateSH = numberTranslateSH + addingTranslateSH*.4;

            numberRotateG = numberRotateG + addingRotateG;
            numberTranslateG = numberTranslateG + addingTranslateG*.2;

            document.getElementById("iphone").style.transform = "translateY(" + numberTranslate +"px) rotate(" + numberRotate + "deg)";

            document.getElementById("spotify").style.transform = "translateY(" + numberTranslateS +"px) rotate(" + numberRotateS + "deg)";
            
            document.getElementById("shampoing").style.transform = "translateY(" + numberTranslateSH +"px) rotate(" + numberRotateSH + "deg)"; 

            document.getElementById("gum").style.transform = "translateY(" + numberTranslateG +"px) rotate(" + numberRotateG + "deg)";
        }
        lastScrollTop = st;
        }, false)
});

$("#three").mouseover(function(){
    $("#three > h3").css("opacity", "1");
    $('.img').css("opacity", "1");
})
