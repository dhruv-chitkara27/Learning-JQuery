$(document).ready(function(){
	$('#input-name').on('keyup',function(){
		let name = $(this).val();
		$('#feedback-message').text('Pleased to meet you, ' + name);
	});
});



/*

$(document).ready(function(){
	$('#input-name').on('keydown',function(){
		let name = $(this).val();
		$('#feedback-message').text('Pleased to meet you, ' + name);
	});
});

*/