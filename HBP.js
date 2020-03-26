const buttons = document.querySelectorAll("button");

let selection = index.html;
let i;
let result;
let value1;
let value2;


buttons[i].addEventListener("click", function()) {
    let player = buttons[i].selection;
        if(i =0){
        player=0;
        value1="hunter";
        } else if(i=1){
        player=1;
        value1="bear";
        }else if(i=2){
        player=2;} 
        value1="princess";
    let robot = buttons[i.getRandomInt(3)].selection;
        if(i =0){
        robot=0;
          value2="hunter";
        } else if(i=1){
        robot=1;
          value2="bear";
        }else if(i=2){
        robot=2;
        value2="princess";
        } 

    
    if (player == robot) {
      result = "Tie!";
    }
    else if ((player == "hunter" && robot == "bear") || (player == "bear" && robot == "princess") || (player == "princess" && robot == "hunter")) {
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

