$(".total").hide();
$("button").click(function() {
    var fav=$(".fav").val();
    var age=$(".age").val();
    var times=$(".times").val();
    var total;
    total = age*times + times*times*age;
    $("h1").hide();
    $("h2").hide();
    $("h3").hide();
    $("h4").hide();
    $(".fav").hide();
    $(".age").hide();
    $(".times").hide();
    $("button").hide();
    $(".total").show();
    $(".total").text("Well, it looks like you will have eaten " + total + " " + fav + " in 25 years from now");
});