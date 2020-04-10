


let button1 = document.querySelector("#button1");
button1.addEventListener("click", resultsPage1);


let revert = document.querySelector("#revert");
revert.addEventListener("click", revertPage);




function resultsPage1() { 
  document.getElementById("mainFrameOne").style.display="none"; 
  document.getElementById("headertext1").style.display="none";
  document.getElementById("mainFrameTwo").style.display="block"; 
  document.getElementById("revert").style.display="block";

  
  document.getElementById("imgPlayer").src = "https://previews.123rf.com/images/saphatthachat/saphatthachat1805/saphatthachat180500171/102007681-vector-pixel-art-hunter-isolated-cartoon.jpg";
  
  let robot = Math.floor(Math.random()*3)+1; 
    switch(robot){
      case(1):
        result = "Tie!";
        document.getElementById("imgRobot").src = "https://previews.123rf.com/images/saphatthachat/saphatthachat1805/saphatthachat180500171/102007681-vector-pixel-art-hunter-isolated-cartoon.jpg";
        break;
      case(2):
        result = "You Won!";
        document.getElementById("imgRobot").src = "http://pixelartmaker.com/art/d2dc9caaef73f10.png";
        break;
      case(3):
        result = "You Lost!"
        document.getElementById("imgRobot").src = "src imgs\pixel-art-princess-vector-19072212.jpg";
        break;
    }

  
  

}


function revertPage() { 
  document.getElementById("mainFrameOne").style.display="inline-flex"; 
  document.getElementById("headertext1").style.display="block";
  document.getElementById("mainFrameTwo").style.display="none"; 
  document.getElementById("revert").style.display="none";
}





    
 
    
    


