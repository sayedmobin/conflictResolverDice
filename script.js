var mydice1 = "images/dice1.png";
var mydice2 = "images/dice2.png";
var mydice3 = "images/dice3.png";
var mydice4 = "images/dice4.png";
var mydice5 = "images/dice5.png";
var mydice6 = "images/dice6.png";

var mydice = [mydice1, mydice2, mydice3, mydice4, mydice5, mydice6];

var player1 = document.getElementsByClassName("player")[0];
var player2 = document.getElementsByClassName("player")[1];
var player1img = document.getElementsByClassName('img1')[0];
var player2img = document.getElementsByClassName('img2')[0];

var firstRandomNumber = Math.trunc(Math.random() * 5);
var secondRandomNumber = Math.trunc(Math.random() * 5);

function reloadme() {
  location.reload();
}

function winner() {
  player1img.src = mydice[firstRandomNumber];
  player2img.src = mydice[secondRandomNumber];
  if(firstRandomNumber > secondRandomNumber) {
    player1.innerText = "Player 1 is winner";
    player1.style.color = "White";
  }else if(secondRandomNumber > firstRandomNumber) {
    player2.innerText = "Player 2 is winner";
    player2.style.color = "White";
  } else {
    location.reload();
  }
}
