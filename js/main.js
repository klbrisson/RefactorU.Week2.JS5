$(document).on('ready', function() {
	var displayInputBox = function() {
		$('.editable').css('display','none');
		$('.inputText').css('display','block');
		$('.submit').css('display','block');
		$('.inputText').focus();
	};

	$('.editable').click(displayInputBox);

	var saveInput = function() {
		$('.editable').css('display','block');
		$('.inputText').css('display','none');
		$('.submit').css('display','none');
		$('.editable').text($('.inputText').val());
	};
	$('.submit').click(saveInput);
});
