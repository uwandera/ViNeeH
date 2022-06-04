/$('.frame').mousemove(function(e) {
	
	var xPos = $(this).position().left;
	var yPos = $(this).position().top;
	
	var mouseX = e.pageX;
	var mouseY = e.pageY;
	
	var left = e.pageX - xPos;
	var xOffset = left - $(this).width()/2;
	var top = e.pageY - yPos;
	var yOffset = top - $(this).height()/2;
	var xPerc = (xOffset/$(this).width()) * 200;
	var yPerc = (yOffset/$(this).height()) * 200;
		
	TweenMax.to($(this), 2, {
		rotationX: 0.3 * yPerc,
		rotationY: -0.3 * xPerc,
		transformOrigin: "center center -30",
		ease: Expo.easeOut
	});
	
	TweenMax.to($(this).find('.frame-grad'), 2, {
		opacity: top/$(this).height(),
		ease: Expo.easeOut
	});
	
	TweenMax.to($(this).find('.frame-shad'), 2, {
		opacity: 0.15 - top/$(this).height()/2,
		ease: Expo.easeOut
	});
	
});
$('.frame').on('mouseleave', function(){
	TweenMax.to($(this), 2, {
		rotationX: 0,
		rotationY: 0,
		transformOrigin: "center center -20",
		ease: Expo.easeOut
	});
	TweenMax.to($(this).find('.frame-grad'), 2, {
		opacity: 0.5,
		ease: Expo.easeOut
	});
	TweenMax.to($(this).find('.frame-shad'), 2, {
		opacity: 0,
		ease: Expo.easeOut
	});
});
console.clear();*/ 

/*  ==========================================================================
    Greensock Dev Tools
    ========================================================================== */  

//instantiate GSDevTools with default settings
// GSDevTools.create( );


/* jQuery library for video fullscreen*/  


var fullscreen = 0;

$(".fullscreen").click(function(){
  if(fullscreen == 0){
    fullscreen = 1;
    $("video").appendTo('body');
    $("#vidControls").appendTo('body');
    $("video").css('position', 'absolute').css('width', '100%').css('height', '90%').css('margin', 0).css('margin-top', '5%').css('top', '0').css('left', '0').css('float', 'left').css('z-index', 600);
    $("#vidControls").css('position', 'absolute').css('bottom', '5%').css('width', '90%').css('backgroundColor', 'rgba(150, 150, 150, 0.5)').css('float', 'none').css('left', '5%').css('z-index', 700).css('-webkit-border-radius', '10px');

}
else
    {

        fullscreen = 0;

        $("video").appendTo('#videoPlayer');
        $("#vidControls").appendTo('#videoPlayer');

        //change <video> css back to normal

        //change "#vidControls" css back to normal

    }

});