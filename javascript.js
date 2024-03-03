/*
Make computer get random number from 1 to 3.
Prompt user to input rock, paper or scissors
define variables rock, paper and scissors to equal ints 1, 2, 3
make if commands define winner or loser
prompt user the result
*/


choices=['rock', 'paper', 'scissors'];                  //available choices to be made by computer

function getComputerChoice(){                            //declare function that gets computers choice
    return Math.floor(Math.random() * 3)                  //math.random gets float between 0 and 1 and multiplies it by 3 and turn it into int
} 

const ComputerChoice=choices[getComputerChoice()];        //turns computer choice to a string

const UserChoice=prompt('rock, paper or scissors?');        //gets users choice from input

console.log(ComputerChoice)


function playRound(UserChoice, ComputerChoice){
    if (UserChoice==ComputerChoice){
        return'tie!'
    }else 
        if (UserChoice=='paper' && ComputerChoice!='rock'){
            return'Computer wins!'
    }else 
        if (UserChoice=='rock' && ComputerChoice!='scissors'){
            return'Computer wins!'
    }
}
alert(playRound());