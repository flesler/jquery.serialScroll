/*!*****************************************
Snippet for jQuery.SerialScroll
--Stop the auto-scrolling when hovering--

Note that trigger and stop won't do anything
If the widget wasn't called with 'interval'.
*******************************************/

jQuery(function( $ ){
	var intval = 5000;//how often to autoscroll (in milliseconds)
	
	$('#pane').serialScroll({
		//...
		interval: intval,//auto scroll
		//...
	});
	
	
	// You can temove the .stop() to let it finish the active animation
	$('#pane').hover(function(){
		$(this).stop().trigger('stop');
	},function(){
		$(this).stop().trigger('start');
	});

});

