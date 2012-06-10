/*!******************************************
Snippet for jQuery.SerialScroll
--Generate a paginator based on the items--

Suppose an HTML like this:

<div id="container">
	...
	<ul id="paginator" />
	<div id="pane">
		<img src="..." />
		<img src="..." />
		<img src="..." />
		<img src="..." />
		<img src="..." />
	</div>
	...
</div>

You can use <ul>/<li> or any other HTML, just
setup the selectors to match the elements.
*********************************************/

jQuery(function( $ ){
	var $pane = $('#pane'), //the item being scrolled
		$items = $pane.find('img'),//the items
		$paginator = $('#paginator');//the container of the links/buttons
	
	$('#pane').serialScroll({
		//...
		items: $items,//or just 'img'
		//...
	});
	
	$items.each(function(index){//index starts counting from 0
		var text = 'item ' + (index + 1);//here generate the text you want
		var $page = $('<li />').text( text ).appendTo($paginator);
		
		$page.click(function(e){
			//if you put a link inside the <li> then call:
			//e.preventDefault();
			$pane.trigger('goto',[index]);//scroll to the item number #index.
		});
	});
});

/*!**************************************************************************
You can generate the paginators the way you want. They don't need to be <li>s
You can add a link inside, or an image. Also, the 'this' will be the item so,
you can take data from each one, and put it in the paginator.
*****************************************************************************/