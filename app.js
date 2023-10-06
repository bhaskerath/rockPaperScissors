let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const reset_scrore_button = document.getElementById("reset-button");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sup();
const smallCompWord = "comp".fontsize(3).sup();


function getComputerChoice() {
   const choices = ['r', 'p', 's'];
   return choices[Math.floor(Math.random()*3)];
}

function converToWord(letter) {
   if (letter === "r") return "Rock";
   if (letter === "p") return "Paper";
   return "Scissors";
}

function win(userChioce, computerChoice) {
   const userChioce_div = document.getElementById(userChioce);
   userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;  
   result_p.innerHTML = `${converToWord(userChioce)}${smallUserWord} beats ${converToWord(computerChoice)}${smallCompWord} You win.`;
   userChioce_div.classList.add("green-glow");
   setTimeout(()=>userChioce_div.classList.remove("green-glow"), 330);
}

function resetScore(){
   userScore = 0;
   computerScore = 0;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
}


function lose(userChioce,computerChoice) {
   const userChioce_div = document.getElementById(userChioce);
   computerScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = `${converToWord(userChioce)}${smallUserWord} losses to ${converToWord(computerChoice)}${smallCompWord}.`;
   userChioce_div.classList.add("red-glow");
   setTimeout(()=>userChioce_div.classList.remove("red-glow"), 330);
}

function draw(userChioce, computerChoice) {
   const userChioce_div = document.getElementById(userChioce);
   result_p.innerHTML = `${converToWord(userChioce)}${smallUserWord} equals ${converToWord(computerChoice)}${smallCompWord}.`;
   userChioce_div.classList.add("gray-glow");
   setTimeout(()=>userChioce_div.classList.remove("gray-glow"), 330);
}

function game(userChioce) {
   const computerChoice = getComputerChoice();
   switch (userChioce + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
         win(userChioce,computerChoice);
         break;
      case "sr":
      case "rp":
      case "ps":
         lose(userChioce,computerChoice);
         break;
      case "rr":
      case "ss":
      case "pp":
         draw(userChioce,computerChoice);
         break;
         
   }
}
/**
 * Get the user name from user and display on webpage!
 */
function getUserName(name){
   if(name == null || name == ""){
      username.innerHTML = "Hi Alien!";
      username.style.color = "green";
   } else if (name.includes('Shefali')|| name.includes('shefali')){
      username.innerHTML = "Hi, Dear💜";
      username.style.color = "red";
   } 
   else{
      username.innerHTML = "Hi, "+name;
      username.style.color = "color: #222122";
   }
   
}

function display_c(){
	var refresh=1000; // Refresh rate in milli seconds
	setTimeout('displayTime()',1000)
}

function displayTime(){
   var rawDate = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
   date.innerText = rawDate;
   display_c();
}

function main() {
   setTimeout('displayTime()',1000);
   getUserName(window.prompt("What is your name?"));
   
   rock_div.addEventListener('click', () => game("r"))

   paper_div.addEventListener('click', () => game("p"))

   scissors_div.addEventListener('click', () =>game("s"))

   reset_scrore_button.addEventListener('click', () => resetScore())
}
 
main();

/**Last update on 15-Jan-2021
 * Added time(AM/PM),user name and reset score button
 */
