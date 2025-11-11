import React from 'react';

import Question from './Question';
import questionList from '../questions'

function QuestionSeries(props) {
	
	const [currentQuestion, setCurrentQuestion] = React.useState(0);

	function submissionHandler() {
		setCurrentQuestion(currentQuestion+1);
	}

	function displayQuestion(questionData) {
		//console.log(questionData);
		if (questionData.key > currentQuestion) {
			return;
		}

		return (
			<Question
				{...questionData}
				submissionHandler={submissionHandler}
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