/*

Game Rules

-The game has 2 players, playing in rounds,
-In  each turn a player rolls a dice as many times he wishes. Each result is added to its Round Score.
-But if player rolls a 1, all his round score gets lost. after that its the next player turn.
-The player can choose to 'hold' which means his round score get added to GLBLscore. After that its next player turn.
-the first player has 100 points on GLOBAL score wins the game.

*/

var score,roundScore,activePlayer,gamePlaying,lastDice;

init();

//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML='<em>' + dice + '</em>';

//var x = document.querySelector('#score--' + activePlayer).textContent;
//console.log(x);


document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click',function(){
    
    if(gamePlaying){
        // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    
    // 2. Display the result
    var diceDOM =document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    // 3. Update the round score If the rolled number was not 1
    if(lastDice === 6 && dice === 6){
        // loose entire score
        score[activePlayer] = 0;
        document.querySelector('#score--' + activePlayer).textContent = 0;
        
    }else if( dice !== 1){
        // Add Score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    }else{
         nextPlayer();        
    }        
    }
    
});

function nextPlayer(){
    // Next Player
        
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current--0').textContent = 0;
        document.getElementById('current--1').textContent = 0;
        
        //document.querySelector('.player--0').classList.remove('player--acive');
        //document.querySelector('.player--1').classList.add('player--acive');
        
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
    
    
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
           // Add the current score to the global score
    score[activePlayer] += roundScore;
        
   // Update the UI
    document.getElementById('score--' + activePlayer).textContent = score[activePlayer];
    
        
   // Check if the player won the game  
    var input = document.querySelector('.input1').value;
        console.log(input);
        
        var winningScore;
        // undefined null 0 '' are falsy values
        // anything else can be coerced
        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
        }
        if(score[activePlayer] >= winningScore){
        
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display='none';
        
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        gamePlaying = false;
    }else{
        // next player turn
        nextPlayer();
    }
    
   // Next Player 
    //nextPlayer();        
    }
    

});

document.querySelector('.btn--new').addEventListener('click',function(){
    init();
    
});

function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player-1';
    document.getElementById('name--1').textContent = 'Player-2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');    
}
















