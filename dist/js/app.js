'use strict';

(function() {
	console.log('JS loaded!');

	const inputText = document.querySelector('#input_text');
	const inputTextButton = document.querySelector('#input_text_button');
	inputTextButton.addEventListener("click", stringifyInput(inputText));

	const stringifyInput = input => {
		console.log(input);
	};
})();