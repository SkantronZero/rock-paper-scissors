const function_test_text = document.querySelector("#function_test_text");
const computer_choice_text = document.querySelector("#computer_choice_text");
const player_RPS_choice = document.querySelector("#player_RPS_choice");
const RPS_result_text = document.querySelector("#RPS_result_text");
const RPS = ['Rock','Paper','Scissors'];

function computerChoice(){
    let chosenNum = (Math.floor(Math.random()*3));
    return chosenNum;
}


function getComputerChoice(){
    let chosenRPS = RPS[computerChoice()];
    return chosenRPS;
}

function playRPS(){
    console.log(player_RPS_choice.value);
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
    }
    else {
        RPS_result_text.textContent = `${player_RPS_choice.value} beats ${computer_RPS_choice}. Player wins.`;
        winner = "Player";
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
