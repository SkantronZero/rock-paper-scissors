const function_test_text = document.querySelector("#function_test_text");
const computer_choice_text = document.querySelector("#computer_choice_text");
const player_RPS_choice = document.querySelector("#player_RPS_choice");
const RPS_result_text = document.querySelector("#RPS_result_text");
const RPS = ['Rock','Paper','Scissors'];
const player_score_text = document.querySelector("#player_score_text");
const computer_score_text = document.querySelector("#computer_score_text");
const winner_announcement = document.querySelector("#winner_announcement");
const play_again_button = document.createElement("button");
play_again_button.id = 'play_again_button';
let resetFlag = 0;


function computerChoice(){
    let chosenNum = (Math.floor(Math.random()*3));
    return chosenNum;
}

function getComputerChoice(){
    let chosenRPS = RPS[computerChoice()];
    return chosenRPS;
}

function reset_game(){
    resetFlag = 0;
    player_score_text.textContent = 0;
    computer_score_text.textContent = 0;
    winner_announcement.textContent = '';
    player_RPS_button.textContent = 'Play Game';
}

function updateScore(winner, winner_property){
    winner_property.textContent++;
    if(winner_property.textContent == 5){
        winner_announcement.textContent = `The ${winner} wins this match! `;
        player_RPS_button.textContent = "Play Again?!";
        play_again_button.textContent = "Play Again?!";
        play_again_button.style.fontSize = '24px';
        play_again_button.addEventListener("click", reset_game);
        winner_announcement.append(play_again_button);
        resetFlag = 1;
    };
    
}

function playRPS(){
    console.log(player_RPS_choice.value);

    if(resetFlag == 1){
        reset_game();
        resetFlag = 0;
        return;
    }

    if (player_RPS_choice.value == ''){
        alert('Please choose Rock, Paper, or Scissors.');
        return;
    }

    let player_RPS_choice_index = RPS.indexOf(player_RPS_choice.value);
    console.log('index of player choice: ' + player_RPS_choice_index);

    let winner = '';

    let computer_RPS_choice = getComputerChoice();
    let computer_RPS_choice_index = RPS.indexOf(computer_RPS_choice);
    console.log('index of computer choice: '+ computer_RPS_choice_index);

    if (player_RPS_choice_index == computer_RPS_choice_index){
        RPS_result_text.textContent = "Draw";
        winner = 'Draw';
    }
    else if ((computer_RPS_choice_index - player_RPS_choice_index == 1) || (player_RPS_choice_index - computer_RPS_choice_index == 2) ){
        RPS_result_text.textContent = `${computer_RPS_choice} beats ${player_RPS_choice.value}. Computer wins.`;
        winner = "Computer";
        updateScore(winner, computer_score_text);
    }
    else {
        RPS_result_text.textContent = `${player_RPS_choice.value} beats ${computer_RPS_choice}. Player wins.`;
        winner = "Player";
        updateScore(winner, player_score_text);
    }
    
    console.log('The winner is : '+winner);

    computer_RPS_choice = '';
    return;

}

function update_result(){
    RPS_result_text.textContent = 'Clicked';
}

console.log(getComputerChoice());


player_RPS_button.addEventListener("click", playRPS);
