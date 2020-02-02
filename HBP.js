const buttons = document.querySelectorAll("button");
//console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const player = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let result = "";
    
    if (player === robot) {
      result = "Tie!";
    }
    else if ((player === "hunter" && robot === "bear") || (player === "bear" && robot === "princess") || (player === "princess" && robot === "hunter")) {
      result = "You Won!";
    }
    
    else {
      result = "You Lost!";
    }

    document.querySelector(".results").innerHTML = 
      ` ${player} 
        ${robot} </br></br>
        ${result}
`;
    //console.log(`Player : ${player} VS Robot : ${robot}`);
  });
}
