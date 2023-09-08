var clickableImage = document.getElementById("clk");
var scoree = document.getElementById("scoree");
var imageuser = document.getElementById("handuser");
var imagecompp = document.getElementById("imagecomp");
var scoreecomp=document.getElementById("scoreecomp")
var scoreresult=document.getElementById("resultttt")
var imageresult=document.getElementById("resultimg")
var player1 =document.getElementById("player1")
var player2 =document.getElementById("player2")
var butnchng=document.getElementById("btnclkdiv")
var Player2score = 0;
var Player1score = 0;
let gameOver = false;
let numOfBalls=0;



player1.innerText=localStorage.getItem("name1")
player2.innerText=localStorage.getItem("name2")

function generateRandomNumber() {
  numOfBalls+=1;
  return Math.floor(Math.random() * 6) + 1;
}

function condition(randomNumber1,randomNumber2) {
  if (!gameOver && numOfBalls<=12) {
    console.log(numOfBalls)
    if (randomNumber1 !== randomNumber2) {
      Player2score += randomNumber1;
      scoree.innerText = Player2score;
      // console.log("Player2score increased by", randomNumber1);
    } else {
      gameOver = true;
      alert("Yo bro you got out now you take revenge by bowling!");
      // console.log("Numbers are equal. Game Over!");
    }
  
  }else if(gameOver || numOfBalls>12) {
    console.log("Hi")
    butnchng.style.justifyContent="end"
     

     if(randomNumber1!==randomNumber2){
    Player1score += randomNumber2;
    scoreecomp.innerText=Player1score
  }
      if(Player1score>Player2score || numOfBalls==24){
       clickableImage.style.display = "none";
      //  window.location.href="result.html"
       result()
    }
    // console.log("Player1score increased by", randomNumber2);
  }
  else if(Player2score==0 && randomNumber1==randomNumber2){
    scoree.innerText=Player2score
    alert("Yo bro you got out now you take revenge by bowling!");
  }
}

function imageuserr(randomNumber1) {
  if (randomNumber1 == 1) {
    imagecompp.src = "hand black/one.png";
  } else if (randomNumber1 == 2) {
    imagecompp.src = "hand black/two.png";
  } else if (randomNumber1 == 3) {
    imagecompp.src = "hand black/three.png";
  } else if (randomNumber1 == 4) {
    imagecompp.src = "hand black/four.png";
  } else if (randomNumber1 == 5) {
    imagecompp.src = "hand black/five.png";
  } else if (randomNumber1 == 6) {
    imagecompp.src = "hand black/six.png";
  }
}

function imagecomp(randomNumber2) {
  if (randomNumber2 == 1) {
    imageuser.src = "hand white/one.png";
  } else if (randomNumber2 == 2) {
    imageuser.src = "hand white/two.png";
  } else if (randomNumber2 == 3) {
    imageuser.src = "hand white/three.png";
  } else if (randomNumber2 == 4) {
    imageuser.src = "hand white/four.png";
  } else if (randomNumber2 == 5) {
    imageuser.src = "hand white/five.png";
  } else if (randomNumber2 == 6) {
    imageuser.src = "hand white/six.png";
  }
}
function result(){
  if(Player1score<Player2score){
scoreresult.innerText="Player1 won the match You owe him something" 
imageresult.src=""
}
else if(Player1score>Player2score){
  scoreresult.innerText="Player2 won the match You owe him something"
  imageresult.src=""
}
else if(Player1score==Player2score){
  scoreresult.innerText="bruhb its a draw"
  imageresult.src=""
}

}

function playGameUser() {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  condition(randomNumber1, randomNumber2);
  imagecomp(randomNumber1);
  imageuserr(randomNumber2);
  console.log("Random Number 1:", randomNumber1);
  console.log("Random Number 2:", randomNumber2);
  console.log("Current Player2score:", Player2score);
  console.log("Current Player1score:", Player1score);
 
}
console.log(scoreresult)

clickableImage.addEventListener("click", playGameUser);