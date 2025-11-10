import React from 'react';
import Input from './Input';

// InputSkipper is an input field that will randomly ignore characters that
// get added, attempting to simulate input failures due to a broken keyboard,
// slip of the finger, etc.  This is, quite frankly, rude.
// 
// Props:
// 	- percentChance - the percent chance that any character will be skipped
//
function InputSkipper(props) {

	//const pityCounter = React.useRef(0);

	function changeHandler(event, text) {
		//console.log(event.target.value);
		let userInput = event.target.value;

		// random chance to skip each new character typed
		if (text.length < userInput.length) {
			const skipChance = props.percentChance * 0.01;
			const newCharacters = userInput.substring(text.length);

			// start with previous text, decide which characters to append
			userInput = text;
			for (let index in newCharacters){
				const skipThisOne = Math.random() < 0.1;
				if (!skipThisOne) {
					userInput += newCharacters[index];
				} 
			}
		}

		return userInput;
	}


	return (
		<Input
			{...props}
			changeHandler={changeHandler}
		/>
	);
}

export default InputSkipper;