/*******************************************
Snippet for jQuery.SerialScroll
--Manipulate SerialScroll with the keyboard--

Note that this also applies to the mouse,
just trigger prev or next whenever you want
*********************************************/

jQuery(function( $ ){
	var $pane = $('#pane');//let's save it, the element being scrolled
	
	$pane.serialScroll({
		//...
	});
	
	 $(document).keyup(function(e){
        switch( e.keyCode ){
        	case 39://right (->)
        		$pane.trigger('next');
        	break;
        	case 37://left (<-)
        		$pane.trigger('prev');
        	break;
        }
    });
});

/***********************************************
If you want to use up and down:
- use 38(up), and 40(down).

To see other keyCodes, check: http://rurl.org/pdl
*************************************************/
