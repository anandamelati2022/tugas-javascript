$(document).ready(function(){
    $(".hewan").css({"height" : "130px", "width" : "130px"});
    //hewan unggas
    $(".burung-merpati").click(function(){
        $(this).css({"background-image" : "url('image/burung-merpati.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/burung-merpati.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".ayam").click(function(){
        $(this).css({"background-image" : "url('image/ayam.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/ayam.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".angsa").click(function(){
        $(this).css({"background-image" : "url('image/angsa.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/angsa.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".bebek").click(function(){
        $(this).css({"background-image" : "url('image/bebek.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/bebek.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });

    //hewan ternak
    $(".sapi").click(function(){
        $(this).css({"background-image" : "url('image/sapi.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/sapi.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".domba").click(function(){
        $(this).css({"background-image" : "url('image/domba.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/domba.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".kerbau").click(function(){
        $(this).css({"background-image" : "url('image/kerbau.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/kerbau.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".kambing").click(function(){
        $(this).css({"background-image" : "url('image/kambing.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/kambing.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });

    //hewan buas
    $(".harimau").click(function(){
        $(this).css({"background-image" : "url('image/harimau.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/harimau.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".singa").click(function(){
        $(this).css({"background-image" : "url('image/singa.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/singa.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".buaya").click(function(){
        $(this).css({"background-image" : "url('image/buaya.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/buaya.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".macan-tutul").click(function(){
        $(this).css({"background-image" : "url('image/macan-tutul.jpg')", "background-size" : "130px 130px", "background-repeat" : "no-repeat"});
        $("audio").attr({
            'src' : "audio/macan-tutul.mp3",
            'volume' : 0.4,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
});