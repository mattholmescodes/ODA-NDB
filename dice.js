function diceRoll() {
const randNum = Math.floor(Math.random() * 6) + 1;
const randDice = randNum + ".png";
const randImg = "./Images/" + randDice;

const img1 = document.querySelectorAll("img") [0];
img1.setAttribute("src", randImg);


const newRandNum = Math.floor(Math.random() * 6) + 1;
const newRandDice = "./Images/" + newRandNum + ".png";

const img2 = document.querySelectorAll("img") [1];
img2.setAttribute("src", newRandDice);

if (randNum > newRandNum) {
    document.querySelector("h1").innerHTML = "Player One Wins!!";
}
else if (newRandNum > randNum) {
    document.querySelector("h1").innerHTML = "Player Two Wins!!";
}
else {
    document.querySelector("h1").innerHTML = "It's a draw, please roll again!!";
}
}

const button = document.querySelector("button");
button.addEventListener("click", diceRoll);

