// score is the h2 display
const score = document.querySelector("#score"); 
// btn roll button
const roll = document.querySelector("#roll")
// dice images 
const dice = document.querySelector("#dice");
// score counter h2 display
let scoreCounter = document.querySelector("#scoreCounter");

let Counter = 0;
let user1 = 0;


// ROLL button
roll.addEventListener("click", function() {
// button display
roll.textContent = "Roll"
// 1. Random number
let dice = Math.floor(Math.random() * 6) + 1;

// 2. Display the result
let diceDOM = document.querySelector("#dice");
diceDOM.style.display = "block";
diceDOM.src = `./images/dice${dice}.png`;
// DICE ROLL 
user1 = dice ;
score.textContent = user1;
// score counter 
Counter += user1
scoreCounter.textContent = Counter;
// if dice = 1
if(dice === 1 && Counter != 20) {
    score.textContent = `You lose! ${score.textContent}`;
   user1 = 0;
   roll.textContent = `Try again?`;
} 
else if (Counter <=20){
    score.textContent = ` You rolled ${score.textContent}`;
    scoreCounter.textContent = `Counter - ${scoreCounter.textContent}`;
    user1 = 0;
    // roll.textContent = `Roll Again!`;
 }
 //  IF DICE ONLY = 21
 else if (Counter === 21){
 score.textContent = `You rolled ${score.textContent} WINNER `;
 scoreCounter = `Counter - ${scoreCounter.textContent} WINNER`;
 
 user1 = 0;
 roll.textContent = `WINNER`;
 // return roll;
}
 else {
    scoreCounter.textContent = ` ${scoreCounter.textContent} - BUSTED! `
    roll.textContent = `Try again ->`;
    roll.addEventListener("click" , ( ) => {
        window.location.reload();
    })
}});
// score is the h2 display
const score2 = document.querySelector("#score"); 
// btn roll button
const roll2 = document.querySelector("#roll")
// dice images 
const dice2 = document.querySelector("#dice");
// score counter h2 display
let scoreCounter2 = document.querySelector("#scoreCounter");

let Counter2 = 0;
let user2 = 0;


// ROLL button
roll.addEventListener("click", function() {
// button display
roll.textContent = "Roll"
// 1. Random number
let dice = Math.floor(Math.random() * 6) + 1;

// 2. Display the result
let diceDOM = document.querySelector("#dice2");
diceDOM.style.display = "block";
diceDOM.src = `./images/dice${dice}.png`;
// DICE ROLL 
user2 = dice ;
score.textContent = user2;
// score counter 
Counter += user2
scoreCounter.textContent = Counter;
// if dice = 1
if(dice === 1 && Counter != 20) {
    score.textContent = `You lose! ${score.textContent}`;
   user2 = 0;
   roll.textContent = `Try again?`;
} 
else if (Counter <=20){
    score.textContent = ` You rolled ${score.textContent}`;
    scoreCounter.textContent = `Counter - ${scoreCounter.textContent}`;
    user2 = 0;
    // roll.textContent = `Roll Again!`;
 }
 //  IF DICE ONLY = 21
 else if (Counter === 21){
 score.textContent = `You rolled ${score.textContent} WINNER `;
 scoreCounter = `Counter - ${scoreCounter.textContent} WINNER`;
 
 user2 = 0;
 roll.textContent = `WINNER`;
 // return roll;
}
 else {
    scoreCounter.textContent = ` ${scoreCounter.textContent} - BUSTED! `
    roll.textContent = `Try again ->`;
    roll.addEventListener("click" , ( ) => {
        window.location.reload();
    })
}});
