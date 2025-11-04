import React from 'react';

// Normal input that records when it has been submitted.
// 
function Input(props) {

	const [text, setText] = React.useState("");
	const [submitted, setSubmitted] = React.useState(false);

	function handleChange(event) {
		//console.log(event.target.value);
		let userInput = event.target.value;

		if (props.changeHandler) {
			userInput = props.changeHandler(event, text);
		}

		setText(userInput);
	}

	function handleSubmit(event) {
		if (props.submissionHandler) {
			props.submissionHandler(event, text, setText);
		}
		
		//console.log(text);
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

export default Input;