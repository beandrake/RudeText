let questionList = [
	{
		key: 0,
		prompt: "Are you ready to play?",
	},
	{
		key: 1,
		prompt: "Please tell me your name.",
		inputSkipper: true,
		percentChange: 10,
	},
	{
		key: 2,
		prompt: "Please tell me your favorite color.",
		inputReplacer: true,
		replacementText: "red",
		replaceOnType: true,
		caseSensitive: true,
	},
	{
		key: 3,
		prompt: "Would you be willing to donate your soul to science?",
		inputReplacer: true,
		replacementText: "Yes, of course.",
		replaceOnType: false,
	},
]

export default questionList;