const buttons = document.querySelectorAll("button");

let selection = index.html;

for (let i = 0; i < 3; i++) {
  buttons[i].addEventListener("click", function()) {
    let player = buttons[i].selection;
    let robot = buttons[Math.floor(Math.random() * buttons.length)].selection;
    let result;
    
    if (player === robot) {
      result = "Tie!";
    }
    else if ((player === "hunter" && robot === "bear") || (player === "bear" && robot === "princess") || (player === "princess" && robot === "hunter")) {
      result = "You Won!";
    }
    
    else {
      result = "You Lost!";
    }

    document.querySelector(".result").innerHTML = 
      ` ${player} 
        ${robot} </br></br>
        ${result}`;
  });
}
