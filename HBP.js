
document.getElementById("button1").addEventListener("click", () => { resultsPage(); playerFunction(1);});
document.getElementById("button2").addEventListener("click", () => { resultsPage(); playerFunction(2);});
document.getElementById("button3").addEventListener("click", () => { resultsPage(); playerFunction(3);});


function resultsPage() { 
  document.getElementById("mainFrameOne").style.display="none"; 
  document.getElementById("headertext1").style.display="none";
  document.getElementById("mainFrameTwo").style.display="block"; 
  document.getElementById("headertext2").style.display="block";
}



function playerFunction(selectedChar){

  let player= selectedChar;
  let robot = Math.random()*3; 
    
  if (player == robot) {
    result = "Tie!";
  }
  else if ((player == 1 && robot == 2) || (player == 2 && robot == 3) || (player == 3 && robot == 1)) {
    result = "You Won!";
  }
  
  else {
    result = "You Lost!";
  }

  document.querySelector(".result").innerHTML = 
  ` ${player} 
    ${robot} </br></br>
    ${result}`;


}

    
 
    
    


