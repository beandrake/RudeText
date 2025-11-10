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
		props.concludeQuestion();
		setSubmitted(true);

		// prevents default form submission behavior of refreshing page
		event.preventDefault();
	}

	// When input is first rendered, put cursor in it.
	// Could also do this by just giving input the attribute autoFocus={true}
	React.useEffect( 
		() => {
			const myInputField = document.getElementById(props.questionSeriesName + props.id);
			myInputField.focus();
		},
		[] // do on mount
	)


	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input 
					onChange={handleChange}
					type='text'
					placeholder=""
					value={text}
					disabled={submitted}
					autoComplete="off"
					id={props.questionSeriesName + props.id}
				/>
				{!submitted && 
					<button 
						type="submit"
						disabled = {submitted}
					>Submit</button>
				}
			</form>
		</div>
	);
}

export default Input;