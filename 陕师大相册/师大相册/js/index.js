$(function() {
    var $container = $('#masonry');
    $container.imagesLoaded(function() {
        $container.masonry({
                itemSelector: '.box',
                gutter: 20,
                isAnimated: true,
            });
     });
    var $boxs = $('#masonry .box');
    var $imgs = $('#masonry .box img');
    $imgs.hover(function() {
    	$(this).animate({maxWidth: '105%'}, 'normal');
    	
    }, function() {
    	$(this).animate({maxWidth: '100%'}, 'normal');
    });
});

