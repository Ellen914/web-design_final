$(document).ready(function(){
 
    $("#fadeout").fadeOut(1500);
    
    
    
    $("#div1").fadeIn(3000);
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
  $("#h").hover(function(){
    $("#t").css("color","white");
},function(){
    $("#t").css("color","#b48a4be3");
});
$("#h2").hover(function(){
  $("#t2").css("color","white");
},function(){
  $("#t2").css("color","#b48a4be3");
});
});
