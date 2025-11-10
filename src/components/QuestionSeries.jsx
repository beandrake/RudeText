import React from 'react';

import Question from './Question';
import questionList from '../questions'

function QuestionSeries(props) {
	
	const [currentQuestion, setCurrentQuestion] = React.useState(0);

	function concludeQuestion() {
		setCurrentQuestion(currentQuestion+ 1);
	}

	function displayQuestion(questionData) {
		//console.log(questionData);
		if (questionData.id > currentQuestion) {
			return;
		}

		return (
			<Question
				key={questionData.id}
				questionSeriesName={props.questionSeriesName}
				{...questionData}
				concludeQuestion={concludeQuestion}
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