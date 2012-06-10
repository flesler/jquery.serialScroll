/*!*****************************************
Snippet for jQuery.SerialScroll
--Achieve constant auto scrolling--
*******************************************/

jQuery(function( $ ){
	$('#pane').serialScroll({
		//...
		interval: 1,//auto scroll constantly
		easing:'linear'
		//...
	});
});

/*!**************************************************************************
 You probably don't want the default easing equation of jQuery (swing)
 using 'linear' will keep constant velocity thru the animation.
 You can change that if you want.
*****************************************************************************/