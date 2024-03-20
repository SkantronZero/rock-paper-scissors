const function_test_text = document.querySelector("#function_test_text");
const computer_choice_text = document.querySelector("#computer_choice_text");
const player_RPS_choice = document.querySelector("#player_RPS_choice");
const RPS_result_text = document.querySelector("#RPS_result_text");
const play_RPS_button = document.querySelector("#play_RPS_button");


function_test_text.textContent = 'Hello World!';

RPS_result_text.textContent = 'Testing';

const RPS = ['Rock','Paper','Scissors'];

function computerChoice(){
    let chosenNum = (Math.floor(Math.random()*3));
    // console.log(chosenNum);
    return chosenNum;
}


function getComputerChoice(){
    let chosenRPS = RPS[computerChoice()];
    // console.log(chosenRPS);
    return chosenRPS;
}

function playRPS(){
    console.log(player_RPS_choice.textContent)
    let computer_RPS_choice = getComputerChoice();

    computer_RPS_choice = 'Rock';
    
    switch(player_RPS_choice == 'Rock'){
        
        case 0:
            alert(computer_RPS_choice);
            if (computer_RPS_choice == 'Rock'){
                RPS_result_text.textContent = 'Draw';
                
            }
    }
}

console.log(getComputerChoice());

computer_choice_text.textContent = getComputerChoice();

play_RPS_button.addEventListener("click", alert('test'));

