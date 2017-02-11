
var maxScore = 5;
var numInput = document.querySelector("input");
var maxScoreDisplay = document.getElementById("maxScoreDisplay");

var playerOneScoreDisplay = document.getElementById("playerOneScoreDisplay");
var playerOneScore = 0;

var playerTwoScoreDisplay = document.getElementById("playerTwoScoreDisplay");
var playerTwoScore = 0;

var playerOneButton = document.getElementById("playerOneButton");
var playerTwoButton = document.getElementById("playerTwoButton");
var resetButton = document.getElementById("resetButton");

var gameOver = false;

playerOneButton.addEventListener("click", function(){
	if(!gameOver)
	{
	playerOneScore++;
	playerOneScoreDisplay.innerHTML = playerOneScore;
		if(playerOneScore == maxScore)
		{
			gameOver = true;
			playerOneScoreDisplay.style.color = "green";
		}
	};	
});

playerTwoButton.addEventListener("click", function(){
	if(!gameOver)
	{
	playerTwoScore++;
	playerTwoScoreDisplay.innerHTML = playerTwoScore;
		if(playerTwoScore == maxScore)
		{
			gameOver = true;
			playerTwoScoreDisplay.style.color = "green";

		}
	}
});

resetButton.addEventListener("click", function(){
	playerOneScore = 0;
	playerTwoScore = 0;
	playerOneScoreDisplay.innerHTML = playerOneScore;
	playerOneScoreDisplay.style.color = "black";
	playerTwoScoreDisplay.innerHTML = playerTwoScore;
	playerTwoScoreDisplay.style.color = "black";
	gameOver = false;
});

numInput.addEventListener("change",function(){
  maxScoreDisplay.innerHTML = numInput.value;
  maxScore = Number(numInput.value);


});
