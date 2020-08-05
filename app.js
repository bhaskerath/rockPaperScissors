let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
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

function main() {
   rock_div.addEventListener('click', () => game("r"))

   paper_div.addEventListener('click', () => game("p"))

   scissors_div.addEventListener('click', () =>game("s"))
}
 
main();