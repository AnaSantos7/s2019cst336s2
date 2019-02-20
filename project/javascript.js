var myQuestions = [
	{
		question: "Which member function of a class can’t modify its object's attributes?",
		answers: {
			a: 'friend functions',
			b: 'private member functions',
			c: 'constant member functions',
			d: 'static member functions'
		},
		correctAnswer: 'c'
	},
	{
		question: "What happens when an argument is passed by reference?",
		answers: {
			a: "A variable is created within the function to hold the argument value.",
			b: "A temp variable is created in the calling program to hold argument's value",
			c: 'None',
			d: "The function can't access the argument value."
		},
		correctAnswer: 'c'
	},
	{
		question: "With respective to streams >> (operator) is called a(n)",
		answers: {
			a: "Insertion operator",
			b: "Extraction operator",
			c: "Right shift operator",
			d: "Left shift operator"
		},
		correctAnswer: 'b'
	},
	{
		question: "Which of the following classes handles file input?",
		answers: {
			a: "ofstream",
			b: "ifstream",
			c: "instream",
			d: "inputfile"
		},
		correctAnswer: 'b'
	}
];


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		
		var output = [];
		var answers;


		for(var i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){


				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

	
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		var userAnswer = '';
		var numCorrect = 0;
		
		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
			if(userAnswer===questions[i].correctAnswer){
			
				numCorrect++;
				
				answerContainers[i].style.color = 'lightgreen';
			}
			else{
		
				answerContainers[i].style.color = 'red';
			}
		}

		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	showQuestions(questions, quizContainer);
	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}