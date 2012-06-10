/*!*****************************************
Snippet for jQuery.SerialScroll
--Hide the arrows when the limit is reached--

Suppose an HTML like this:

...
<img id="next" src="..." alt="prev" />
<div id="pane">
	<img src="..." />
	<img src="..." />
	<img src="..." />
	<img src="..." />
	<img src="..." />
</div>
<img id="next" src="..." alt="next" />
...

You can use <ul>/<li> or any other HTML, just
setup the selectors to match the elements.
*******************************************/

jQuery(function( $ ){
	var $prev = $('#prev'),//prev button
		$next = $('#next');//next button
	
	$('#pane').serialScroll({
		//...
		cycle:false, //you probably don't want this
		onBefore:function( e, elem, $pane, $items, pos ){
			$prev.add($next).show();
			if( pos == 0 )
				$prev.hide();
			else if( pos == $items.length-1 )
				$next.hide();
		}
		//...
	});
});

/*!**************************************************************************
Instead of hide and show, you can use fadeIn and fadeOut or whatever you want.
To hide the left arrow when the page loads, use css, or hide it with jQuery
*****************************************************************************/