var makeEditable = function () {
	// CREATE INPUT BOX
	var displayType = $(this).css('display');
	var inputBox = $("<textarea class='inputBox'>Edit Here</textarea>");
	$(this).after(inputBox);
	$('.inputBox').height($(this).outerHeight());
	$('.inputBox').width($(this).outerWidth());
	$('.inputBox').css('padding', $(this).css('padding'));
	$('.inputBox').css('border', $(this).css('border'));
	
	//SAVE TEXT AND PRESERVE LINE BREAKS
	var savedText = $(this).html().replace(/<br>/g, '\n');
	$('.inputBox').val(savedText);

	//FOCUS AT END
	$('.inputBox').focus();
	$('.inputBox').val( $('.inputBox').val() + ' ');
	
	//HIDE EDITABLE BOX
	$(this).css('display','none');
	var editableItem = this;


	//SAVE INPUT AND REMOVE INPUTBOX ON BLUR
	inputBox.on('blur', function() {
		console.log(editableItem);

		//SAVE INPUT TEXT AND PRESERVE LINE BREAKS
		var inputText = $(this).val().replace(/\n/g, '<br/>');
		$(editableItem).html(inputText);

		//REMOVE TEXTAREA AND DISPLAY ITEM
		$(this).remove();
		$('.editable').css('display', displayType);

	});
}

$(document).on('click', '.editable', makeEditable);

