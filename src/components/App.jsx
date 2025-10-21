import React from 'react';

import Question from './Question';

function App() {


	return (
		<div>
			<Question
				prompt="Are you ready to play?"
			/>
			<Question
				prompt="Please tell me your name."
				inputSkipper={true}
				percentChance={10}
			/>
			<Question
				prompt="Please tell me your favorite color."
				inputReplacer={true}
				replacement="red"
				replaceOnType={true}
				caseSensitive={true}
			/>
			<Question
				prompt="Would you be willing to donate your soul to science?"
				inputReplacer={true}
				replacement="Yes, of course."
				replaceOnType={false}
			/>
		</div>
		
	);
}

export default App;