import React from 'react';

import Question from './Question';
import questionList from '../questions'

function QuestionSeries(props) {
	
	const [currentQuestion, setCurrentQuestion] = React.useState(0);

	// NEXT TO DO ITEM:
	//		Submitted questions send data back to QuestionSeries
	//		So that the next question can appear

	function displayQuestion(questionData) {
		//console.log(questionData);
		return (
			<Question
				{...questionData}
			/>
		);
	}


	return (
		<div>
			{questionList.map(displayQuestion)}
		</div>
		
	);
}

export default QuestionSeries;