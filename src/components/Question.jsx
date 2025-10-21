import React from 'react';

import InputReplacer from './InputReplacer';
import InputSkipper from './InputSkipper';
import Input from './Input';

function Question(props) {
	
	function getInput(){
		if (props.inputReplacer) {
			return <InputReplacer {...props} />;
		} else if (props.inputSkipper) {
			return <InputSkipper {...props}	/>;
		} else {
			return <Input {...props} />;
		}
	}


	return (
		<div className='appear'>
			<p>{props.prompt}</p>
			{ getInput() }
		</div>		
	);
}

export default Question;