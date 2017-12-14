'use strict';

(function() {
	const inputText = document.querySelector('#input_text');
	const inputTextButton = document.querySelector('#input_text_button');
	const outputBox = document.querySelector('#output-box');
	const shelfInputText = document.querySelector('#shelf_input_text');
	const addShelfButton = document.querySelector('#add_shelf');
	const deleteShelfButton = document.querySelector('#delete_shelf');
	const shelfArea = document.querySelector('#shelfArea');
	const libraryInputText = document.querySelector('#library_input');
	const libraryAddButton = document.querySelector('#library_input_button');
	const libraryDropdownList = document.querySelector('#library_list');
	inputTextButton.addEventListener("click", populateLibraryDropdown);
	addShelfButton.addEventListener("click", shelfAddButtonPress);
	deleteShelfButton.addEventListener("click", shelfDeleteButtonPress);
	libraryAddButton.addEventListener("click", createLibrary);

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
			this.shelfName = {
				name: shelfName,
				books: [],
				addBook: function(bookName) {
					return this.books.push(bookName);
				},
				removeBook: function(bookIndex) {
					return this.books.splice(bookIndex, 1);
				}
			}
		}
	}

	let library = new Library("Seattle Library");
	let libraryArray = [];
	libraryArray.push(library.libName);

	function createLibrary(event) {
		event.preventDefault();
		let newLib = new Library(libraryInputText.value);
		libraryArray.push(newLib.libName);
		libraryInputText.value = '';
	}

	function shelfAddButtonPress(event) {
		event.preventDefault();
		library.addShelf(shelfInputText.value);
		console.log(library);
		outputBox.innerHTML = `New shelf created in ${library.libName}: ${shelfInputText.value}`;
		shelfInputText.value = '';
	}

	function shelfDeleteButtonPress(event) {
		event.preventDefault();
		library.shelfName.removeBook(shelfInputText.value);
		console.log(library.shelfName.books);
		console.log(library);
		shelfInputText.value = '';
	}

	function populateLibraryDropdown(event) {
		event.preventDefault();
		libraryArray.sort();
		for (let i = 0; i < libraryArray.length; i++) {
			let option = document.createElement("option");
			option.text = libraryArray[i];
			libraryDropdownList.add(option);
		}
	}

	//let printLibrary = (name) => { console.log(name); }

})();

/* TO DO
 * ++ Create new library input/function
 * - Create form to add author and title and submit new book to selected (drop down) shelf
 * - Recreate add/remove shelf functions/buttons
 * ++ Clean up add shelf input/button
 * - Print library console function
 */