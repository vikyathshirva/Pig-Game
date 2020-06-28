/* GAME RULES: - The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- Th first player to reach 100 points on GLOBAL score wins the game
- example for change in git
- another example
- this is a test for branching */

var scores, roundScores,activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gamePlaying){



    var dice = Math.floor(Math.random()*6)+1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice +'.png';


    if(dice !== 1){
        //Add a score
    roundScore += dice;
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    }else{

        nextPlayer();
    }

    }
});


document.querySelector('.btn-hold').addEventListener('click',function(){


    if(gamePlaying){


    //Adding the current score to Global score

    scores[activePlayer] += roundScore;



    //update the UI
    document.querySelector('#score-' + activePlayer ).textContent = scores[activePlayer]

    //Check if the player has won the game
    if(scores[activePlayer] >= 25){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
    }


});

document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;



    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');




}



function nextPlayer(){

        //Next Player
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';

        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

}














