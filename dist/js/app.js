//'use strict';

(function() {
	const inputText = document.querySelector('#input_text');
	const inputTextButton = document.querySelector('#input_text_button');
	const outputBox = document.querySelector('#output-box');
	const addShelfButton = document.querySelector('#add_shelf');
	const deleteShelfButton = document.querySelector('#delete_shelf');
	const shelfArea = document.querySelector('#shelfArea');
	inputTextButton.addEventListener("click", buttonPress);
	addShelfButton.addEventListener("click", shelfAddButtonPress);
	deleteShelfButton.addEventListener("click", shelfDeleteButtonPress);

	function buttonPress(event) {
		event.preventDefault();
		outputBox.innerHTML = stringify(inputText.value);
	}

	function stringify(obj) {

		if (obj === null) {
			return "null";
		}

		if (obj === undefined || obj.constructor === Function) {
			return;
		}

		if (obj.constructor === String) {
			return `"${obj}"`;
		}

		if (obj.constructor === Array) {
			if (obj.length) {
				let partialJSON = [];

				for (let i = 0; i < obj.length; i++) {
					partialJSON.push(stringify(obj[i]));
				}
				return `[${partialJSON.join(",")}]`;
			} else {
				return '[]';
			}
		}

		if (obj.constructor === Object) {
			let keys = Object.keys(obj);
			if (keys.length) {
				let partialJSON = '';

				for (let i = 0; i < keys.length; i++) {
					let key = keys[i];

					if (!key || obj[key] === undefined || typeof key === 'function' || typeof obj[key] === 'function') {

					} else {
						if (i === keys.length -1) {
							partialJSON += stringify(key) + ":" + stringify(obj[key]);
						} else {
							partialJSON += stringify(key) + ":" + stringify(obj[key]) + ',';
						}
					}
				}
				return `{${partialJSON}}`;
			} else {
				return '{}';
			}
		}

		let newString = "";

		for (let i = 0; i < inputText.value.length; i++) {
			newString += inputText.value.charAt(i);
		}
	}

// Library constructor
function Library(name) {
	this.libName = name;
	this.addShelf = function(shelfName) {
		this.shelfName = shelfName;
		this.shelfName.books = [];
		this.addBook = function(bookName) {
			return this.shelfName.books.push(bookName);
		}
		this.removeBook = function(bookIndex) {
			return this.shelfName.books.splice(bookIndex);
		}
	}
}

let library = new Library("Seattle Library");
console.log(library);

	// Testing object key/value manipulation
	function shelfAddButtonPress(event) {
		event.preventDefault();
		library.addShelf(inputText.value);
		console.log(library);

	}

	function shelfDeleteButtonPress(event) {
		event.preventDefault();
		library.addBook("llamas");
		console.log(library.shelfName.books);

		//outputBox.innerHTML = "shelf deleted!";

	}

})();