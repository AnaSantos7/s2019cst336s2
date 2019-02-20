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
	},
	{
		question: "What header file contains C++ file I/O instructions?",
		answers: {
			a: "iostream.h",
			b: "fstream.h",
			c: "infstream.h",
			d: "outstream.h"
		},
		correctAnswer: 'b'
	},
	{
		question: "What purpose do classes serve?",
		answers: {
			a: "data encapsulation",
			b: "providing a convenient way of modeling real-world objects",
			c: "simplifying code reuse",
			d: "all of the above"
		},
		correctAnswer: 'd'
	},
	{
		question: "Which of the following is the proper keyword to deallocate memory?",
		answers: {
			a: "remove",
			b: "clear",
			c: "delete",
			d: "free"
		},
		correctAnswer: 'c'
	},
	{
		question: "Which of the following gives the memory address of integer variable a?",
		answers: {
			a: "*a;",
			b: "a;",
			c: "&a",
			d: "address(a)"
		},
		correctAnswer: 'c'
	},
	{
		question: "A constructor that accepts __________ parameters is called the default constructor.",
		answers: {
			a: "no",
			b: "one",
			c: "two",
			d:	"three"
		},
		correctAnswer: 'a'
	},
	{
		question: "Constructors __________ to allow different approaches of object construction.",
		answers: {
			a: "cannot be overloaded",
			b: "can be overloaded",
			c: "can be called",
			d: "can be nested"
		},
		correctAnswer: 'b'
	}

];


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var message = document.getElementById('msg');

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
		 if(numCorrect >= 9) {
			message.innerHTML = "Well done! ( :";
		}
	}

	showQuestions(questions, quizContainer);
	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	};

}