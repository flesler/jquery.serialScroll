/*!******************************************
Snippet for jQuery.SerialScroll
--Right to left (or bottom to top) animation--

Suppose an HTML like this:

...
<div id="pane">
	<ul>
		<li><img src="..." /></li>
		<li><img src="..." /></li>
		<li><img src="..." /></li>
		<li><img src="..." /></li>
		<li><img src="..." /></li>
	</ul>
</div>
...

You can use just divs or any other HTML, just
setup the selectors to match the elements.
Note that to make this botton to top you just
set the option 'axis' to 'y'.
*********************************************/

jQuery(function( $ ){
	var $pane = $('#pane'), //the item being scrolled
		$items = $pane.find('li');//the items, don't need to be LI
	
	$('#pane').serialScroll({
		//...
		items: $items, //or just 'li'
		start: $items.length - 1, //start with the last one
		force: true, //force an initial scroll to the last
		step: -1, //more backwards, one on one (can be another number)
		//...
	});
});