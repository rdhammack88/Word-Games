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
	
	var removeVowels = function(word) {
		var vowels = /a|e|i|o|u/g;
		var wordHolder = word;
//		var scrambledword
		
		/*for(let i = 0; i < word.length; i += 1) {
			if(word[i] == vowels) {
				word[i] = '_';
			}
		}*/
		
		word = word.replace(vowels, "_");
		
		return word;
	}
	
	function startGame() {
		
		//randomChosenWord();
		//removeVowels(randomChosenWord);
		
		document.getElementById('wordToGuess').innerHTML = removeVowels(randomChosenWord());
	}
	
	startGame();

	
});