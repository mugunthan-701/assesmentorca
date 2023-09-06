var head = document.querySelector(".head");
var tail = document.querySelector(".tail"); 
var decide =document.getElementById("decide");
var result =document.getElementById("result") 
var newBtn = document.createElement("img");
newBtn.src = "assets/start-buttn.png";
newBtn.id = "btnstrt";
var imageContainer = document.getElementById("imagee");
imagee.appendChild(newBtn);
imagee.style.display="none"
function generateRandomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}
generateRandomNumber()
head.addEventListener("click", function () {
    head.style.display = "none";
    tail.style.display = "none";
    imagee.style.display="block"
  var randomNumber = generateRandomNumber();
  if(randomNumber==1){
    result.innerText="Wow its head"
    decide.src="assets/heads.png"
  }
  else{
    result.innerText="Oops its tails"
    decide.src="assets/tails.png"
  }
  
});

tail.addEventListener("click", function () {
  var randomNumber = generateRandomNumber();
  head.style.display = "none";
  tail.style.display = "none";
  imagee.style.display="block"
//   console.log("Random Number (tail):", randomNumber);
  if(randomNumber==2){
    result.innerText="Wow its tails"
    decide.src="assets/tails.png"
  }
  else{
    result.innerText="Oops its heads"
    decide.src="assets/heads.png"

  }

});
newBtn.addEventListener("click",function(){
    location.href="multipl.html"
})

