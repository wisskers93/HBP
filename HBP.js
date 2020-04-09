const button1 = document.querySelector("#button1");
button1.addEventListener("click", playerFunction(1));

const button2 = document.querySelector("#button2");
button2.addEventListener("click", playerFunction(2));

const button3 = document.querySelector("#button3");
button3.addEventListener("click", playerFunction(3));


function playerFunction(selectedChar){
  let playerOne;

  if(selectedChar =1){
    playerOne="hunter";
    } else if(selectedChar =2){
    playerOne="bear";
    }else {
    playerOne="princess";
    } 
}



let selection = index.html;
let i;
let result;
let value1;
let value2;


    let player = 0
    value1="hunter";
        let robot = buttons[i.getRandomInt(3)].selection;
        

    
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
    
    document.querySelector(".result").innerHTML = 
      ` ${value1} 
        ${value2} </br></br>
        ${result}`;
  });
    
    


