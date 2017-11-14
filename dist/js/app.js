'use strict';

(function() {
	const inputText = document.querySelector('#input_text');
	const inputTextButton = document.querySelector('#input_text_button');
	const outputBox = document.querySelector('#output-box');
	inputTextButton.addEventListener("click", stringifyInput);

	function stringifyInput(event) {
		event.preventDefault();
		let newString = "";

		for (let i = 0; i < inputText.value.length; i++) {
			newString += inputText.value.charAt(i);
		}

		outputBox.innerHTML = `Stringified value: ${newString}`;
	}

})();