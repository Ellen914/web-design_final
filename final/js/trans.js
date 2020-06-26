
$(document).ready(function(){
 
    $("#fadeout").fadeOut(1500);
    
    
    
    $("#div1").fadeIn(3000);
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});
