var pl1 = document.getElementById("pl1")
var pl2 =document.getElementById("pl2")

function onclic() {
    localStorage.setItem("name1", pl1.value);
    localStorage.setItem("name2",pl2.value);
    console.log(localStorage.getItem("name1"));
    console.log(localStorage.getItem("name2"));
    // window.location.href="multiplayer.html"
}

var btn = document.getElementById("btn");
btn.onclick = onclic; 


document.getElementById("form1").addEventListener("submit",function(event){
    event.preventDefault();
    const names=document.getElementsByClassName("inputname").value;
    const url ='destination.html?userInput='+encodeURIComponent(names);
    window.location.href="multiplayer.html"
})