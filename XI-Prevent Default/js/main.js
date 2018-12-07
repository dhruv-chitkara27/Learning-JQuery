$(document).ready(function(){
	$('#input-name').on('keyup',function(){
		let name = $(this).val();
		$('#feedback-message').text('Pleased to meet you, ' + name);
	});


$('a').on('click',function(event){
	event.preventDefault();
	$('#feedback-message').text('That\'s fine!');
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