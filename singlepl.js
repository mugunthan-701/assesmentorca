var clickableImage = document.getElementById("clk");
var scoree = document.getElementById("scoree");
var imageuser = document.getElementById("handuser");
var imagecompp = document.getElementById("imagecomp");
var scoreecomp=document.getElementById("scoreecomp")
var scoreresult=document.getElementById("resultttt")
var imageresult=document.getElementById("resultimg")
var scoreUser = 0;
var scoreComp = 0;
let gameOver = false;
let numOfBalls=0;

function generateRandomNumber() {
  numOfBalls+=1;
  return Math.floor(Math.random() * 6) + 1;
}

function condition(randomNumber1,randomNumber2) {
  if (!gameOver && numOfBalls<=12) {
    console.log(numOfBalls)
    if (randomNumber1 !== randomNumber2) {
      scoreUser += randomNumber1;
      scoree.innerText = scoreUser;
      // console.log("scoreUser increased by", randomNumber1);
    } else {
      gameOver = true;
      alert("Yo bro you got out now you take revenge by bowling!");
      // console.log("Numbers are equal. Game Over!");
    }
  
  }else if(gameOver || numOfBalls>12) {
    console.log("Hi")

     if(randomNumber1!==randomNumber2){
    scoreComp += randomNumber2;
    scoreecomp.innerText=scoreComp
  }
      if(scoreComp>scoreUser || numOfBalls==24){
       clickableImage.style.display = "none";
      //  window.location.href="result.html"
       result()
    }
    // console.log("scoreComp increased by", randomNumber2);
  }
  else if(scoreUser==0 && randomNumber1==randomNumber2){
    scoree.innerText=scoreUser
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
  if(scoreComp<scoreUser){
scoreresult.innerText="you won" 
imageresult.src="assets/win gif.gif"
}
else if(scoreComp>scoreUser){
  scoreresult.innerText="computer won bro!"
  imageresult.src="assets/out.gif"
}
else if(scoreComp==scoreUser){
  scoreresult.innerText="bruhb its a draw"
  imageresult.src="assets/duckout.gif"
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
  console.log("Current scoreUser:", scoreUser);
  console.log("Current scoreComp:", scoreComp);
 
}
console.log(scoreresult)

clickableImage.addEventListener("click", playGameUser);