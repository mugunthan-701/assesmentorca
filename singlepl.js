var clickableImage = document.getElementById("clk");
var scoree = document.getElementById("scoree");
var imageuser = document.getElementById("handuser");
var imagecompp = document.getElementById("imagecomp");
let scoreUser = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function condition(randomNumber1, randomNumber2) {
  if (randomNumber1 !== randomNumber2) {
    scoreUser += randomNumber1;
    scoree.innerText = scoreUser;
    console.log("scoreUser increased by", randomNumber1);
  } else {
    clickableImage.style.display = "none";
    console.log("Numbers are equal. scoreUser remains the same.");
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

function playGameUser() {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  condition(randomNumber1, randomNumber2);
  imagecomp(randomNumber1);
  imageuserr(randomNumber2);
  console.log("Random Number 1:", randomNumber1);
  console.log("Random Number 2:", randomNumber2);
  console.log("Current scoreUser:", scoreUser);
}

clickableImage.addEventListener("click", playGameUser);


