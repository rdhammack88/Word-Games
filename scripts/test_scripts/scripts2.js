$(document).ready(function() {
	
    /*var level = 1, wordIndex = 0, randomIndex = 0, wordCount = 0, maxWordLength = 0, minWordLength = 0, userPoints = 0;
    var word = '', jumbledWord = '', wordHolder = '', difficulty = '', userGuess = '';
    var timerText, timerSet, comfirmTimer;
    var words = new Array(), usedWords = new Array();*/
	
	var words = ['wealth', 'while', 'where', 'wonder'];

	var randomChosenWord = function() {
		
		var randomNum = Math.floor(Math.random() * words.length);
		var randomWord = words[randomNum];
		
		return randomWord;
	}
	
	var removeLetters = function(word) {
		var wordHolder = word;
		var firstLetter = 0;
		var secondLetter = 0;
		
		while(firstLetter === secondLetter) {
			var firstLetter = Math.floor(Math.random() * word.length);
			var secondLetter = Math.floor(Math.random() * word.length);
		}

		word = word.replace(word[firstLetter], "_");
		word = word.replace(word[secondLetter], "_");
		
		return word;
	}
	
	function startGame() {
		document.getElementById('wordToGuess').innerHTML = removeLetters(randomChosenWord());
	}
	
	startGame();

	
});