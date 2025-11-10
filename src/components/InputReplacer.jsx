import React from 'react';
import Input from './Input';

// InputReplacer is an input field that ignores user input, instead displaying
// a pre-determined message.  If the prop replaceOnType is true, each character
// from the user will be immediately replaced with the corresponding character
// from the pre-determined message.  Regardless of this setting, once the user
// submits by pressing Enter or clicking the Submit button, user text will be
// replaced with the full pre-determined message.
// This is, quite frankly, rude.
//
// When using the caseSensitive option to have the pre-determined message's
// case match that of each character the user typed, there are two edge
// cases that get handled:
//  - the user types a character that lacks case, such as punctuation
//  - the user submits before typing all the characters
// In these cases, the most recent case will be used, defaulting to lowercase
// if the user has yet to type a character with case.
//
// Props:
//  - replacementText - The pre-determiend text that will replace the users
// Optional:
// 	- replaceOnType - Replaces characters as typed.
// 	- caseSensitive - Replaced characters will be same case as user input.
//
function InputReplacer(props) {

	const fatedText = props.replacementText;

	function _replaceWithUserCapitalization(userInput) {
		let mostRecentLetterWasUppercase = false;

		const replaceLength = Math.min(userInput.length, fatedText.length);
		let updatedInput = "";
		// determine capitalization of fatedText chars based on userInput case
		for (let index=0; index < replaceLength; index++) {
			const userChar = userInput[index];
			// user input wasn't a letter, so use most recent case
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


	function changeHandler(event, text) {
		let userInput = event.target.value;

		// replace user's characters with same number of fatedText characters
		if (props.replaceOnType) {		
			if (!props.caseSensitive) {
				userInput = fatedText.slice(0, userInput.length);
			} else {
				userInput = _replaceWithUserCapitalization(userInput);
			}
		} 

		return userInput;
	}


	function submissionHandler(event, text, setText) {
		// regardless of current text, replace with the complete fatedText
		let userInput = text;
				
		if (!props.caseSensitive) {
			userInput = fatedText;
		} else {
			// make userInput.length >= fatedText.length
			// A bit of a hack, but it keeps the replacement function simpler.
			while (userInput.length < fatedText.length) {
				userInput += ".";
			}
			userInput = _replaceWithUserCapitalization(userInput);
		}
		
		setText(userInput);
	}


	return (
		<Input
			{...props}
			changeHandler={changeHandler}
			submissionHandler={submissionHandler}
		/>
	);
}

export default InputReplacer;