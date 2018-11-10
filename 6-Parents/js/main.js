$(document).ready(function(){
	$('#snow')
		.parent()//parent to go up , children to go down
		.find('.title')
		.addClass('highlight');

	console.log($('#snow').closest('#container'));
	});