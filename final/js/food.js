$(document).ready(function() {

	$ ('.header .btn').ready(function()
    {
        $('.header .btn').addClass('bright_head');
    });
    $ ('.header .btn').mouseenter(function()
    {
        $('.header .btn').removeClass('bright_head');
        $('.header .btn').addClass('dark_head');
    });
    $ ('.header .btn').mouseleave(function()
    {
        $('.header .btn').removeClass('dark_head');
        $('.header .btn').addClass('bright_head');
    });

	$('.myLink1').mouseenter(function(){
		$('.myLink1p').addClass('blue');
	});

	$('.myLink1').mouseleave(function(){
		$('.myLink1p').removeClass('blue');
    });
    
	$('.myLink2').mouseenter(function(){
		$('.myLink2p').addClass('blue');
	});

	$('.myLink2').mouseleave(function(){
		$('.myLink2p').removeClass('blue');
    });
    
	$('.myLink3').mouseenter(function(){
		$('.myLink3p').addClass('blue');
	});

	$('.myLink3').mouseleave(function(){
		$('.myLink3p').removeClass('blue');
    });
    
	$('.myLink4').mouseenter(function(){
		$('.myLink4p').addClass('blue');
	});

	$('.myLink4').mouseleave(function(){
		$('.myLink4p').removeClass('blue');
    });
    
	$('.myLink5').mouseenter(function(){
		$('.myLink5p').addClass('blue');
	});

	$('.myLink5').mouseleave(function(){
		$('.myLink5p').removeClass('blue');
    });
    
	$('.myLink6').mouseenter(function(){
		$('.myLink6p').addClass('blue');
	});

	$('.myLink6').mouseleave(function(){
		$('.myLink6p').removeClass('blue');
    });
});
