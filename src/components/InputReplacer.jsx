import React from 'react';

// InputReplacer is an input field that ignores user input, instead displaying
// a pre-determined message.  If the prop replaceOnType is true, each character
// from the user will be immediatelyreplaced with the corresponding character from the
// pre-determined message.  Regardless of this setting, once the user submits
// by pressing Enter or clicking the Submit button, user text will be replaced
// with the full pre-determined message.  This is, quite frankly, rude.
// 
// Props:
// 	- replaceOnType - Replaces characters as typed.
// 	- caseSensitive - Replaced characters will be same casing as user input.
//
function InputReplacer(props) {

	const fatedText = props.replacement;
	const [text, setText] = React.useState("");
	const [submitted, setSubmitted] = React.useState(false);

	function _replaceWithUserCapitalization(userInput) {
		// One edge case to handle is a user typing punctuation at an index
		// that corresponds to a letter in the fatedText.
		// Good enough solution: in this case, use most recent case.
		let mostRecentLetterWasUppercase = false;

		const replaceLength = Math.min(userInput.length, fatedText.length);
		let updatedInput = "";
		// determine capitalization of fatedText chars based on userInput case
		for (let index=0; index < replaceLength; index++) {
			const userChar = userInput[index];
			// user input wasn't a letter, so use most recent casing
			if (userChar.toUpperCase() == userChar.toLowerCase()) {
				switch(mostRecentLetterWasUppercase) {
					case true:
						updatedInput += fatedText[index].toUpperCase();
						break;
					case false:
						updatedInput += fatedText[index].toLowerCase();
						break;
				}
			// uppercase -> uppercase
			} else if (userChar == userChar.toUpperCase()) {

				updatedInput += fatedText[index].toUpperCase();
				mostRecentLetterWasUppercase = true;
			// lowercase -> lowercase
			} else {
				updatedInput += fatedText[index].toLowerCase();
				mostRecentLetterWasUppercase = false;
			}
		}
		return updatedInput;
	}

	function handleChange(event) {
		//console.log(event.target.value);
		let userInput = event.target.value;

		// replace user's characters with same number of fatedText characters
		if (props.replaceOnType) {		
			if (props.caseSensitive) {
				userInput = _replaceWithUserCapitalization(userInput);
			} else {
				userInput = fatedText.substring(0, userInput.length);
			}
		} 

		setText(userInput);
	}

	function handleSubmit(event) {
		//console.log(text);
		
		// regardless of current text state, finalize with the exact message
		setText(fatedText);
		setSubmitted(true);

		// prevents default form submission behavior of refreshing page
		event.preventDefault();
	}


	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input 
					onChange={handleChange}
					type='text'
					placeholder=""
					value={text}
					disabled = {submitted}
				/>
				<button 
					type="submit"
					disabled = {submitted}
				>Submit</button>
			</form>
		</div>
	);
}

export default InputReplacer;