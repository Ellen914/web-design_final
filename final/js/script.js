$(document).ready(function() 
{
    $ ('.b-food .btn').ready(function()
    {
        $('.b-food .btn').addClass('bright');
    });
    $ ('.b-food .btn').mouseenter(function()
    {
        $('.b-food .btn').removeClass('bright');
        $('.b-food .btn').addClass('dark');
    });
    $ ('.b-food .btn').mouseleave(function()
    {
        $('.b-food .btn').removeClass('dark');
        $('.b-food .btn').addClass('bright');
    });

    $ ('.b-room .btn').mouseenter(function()
    {
        $('.b-room .btn').addClass('dark');
    });
    $ ('.b-room .btn').mouseleave(function()
    {
        $('.b-room .btn').removeClass('dark');
    });

    $ ('.b-trans .btn').mouseenter(function()
    {
        $('.b-trans .btn').addClass('dark');
    });
    $ ('.b-trans .btn').mouseleave(function()
    {
        $('.b-trans .btn').removeClass('dark');
    });

    $ ('.navbar .btn').ready(function()
    {
        $('.navbar .btn').addClass('bright_head');
    });
    $ ('.navbar .btn').mouseenter(function()
    {
        $('.navbar .btn').removeClass('bright_head');
        $('.navbar .btn').addClass('dark_head');
    });
    $ ('.navbar .btn').mouseleave(function()
    {
        $('.navbar .btn').removeClass('dark_head');
        $('.navbar .btn').addClass('bright_head');
    });

    $ ('.btn-social .btn').ready(function()
    {
        $('.btn-social .btn').addClass('bright_head');
    });
    $ ('.btn-social .btn').mouseenter(function()
    {
        $('.btn-social .btn').removeClass('bright_head');
        $('.btn-social .btn').addClass('dark_head');
    });
    $ ('.btn-social .btn').mouseleave(function()
    {
        $('.btn-social .btn').removeClass('dark_head');
        $('.btn-social .btn').addClass('bright_head');
    });


});


