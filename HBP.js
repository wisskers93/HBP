const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

let selection = index.html;
let i;
let result;
let value1;
let value2;


button1.addEventListener("click", hunterFunction()) {
    let player = 0
    value1="hunter";
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
     ` ${value1} 
        ${value2} </br></br>
        ${result}`;
  });
    
button2.addEventListener("click", bearFunction()) {
    let player = 1
    value1="bear";
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
      ` ${value1} 
        ${value2} </br></br>
        ${result}`;
  });
button1.addEventListener("click", princessFunction()) {
    let player = 2
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
      ` ${value1} 
        ${value2} </br></br>
        ${result}`;
  });
    
    


