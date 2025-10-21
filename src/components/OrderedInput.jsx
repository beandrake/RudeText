import React from 'react';

function OrderedInput(props) {

	const [activeIndex, setActiveIndex] = React.useState(0);

	function displaySequence() {
		let renderIndex = 0;
		while (renderIndex < activeIndex) {
			
		}
	}
	

	function handleChange(event) {
		let userInput = event.target.value;
		//console.log(event.target.value);
		setText(userInput);
	}

	function handleSubmit(event) {
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

export default OrderedInput;