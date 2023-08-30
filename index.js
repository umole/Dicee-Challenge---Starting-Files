//The left dice
const randonNumber1 = Math.floor(Math.random() * 6) + 1;

const imageElement = document.getElementById('leftImage');
imageElement.setAttribute('src', `./images/dice${randonNumber1}.png`);

//THe right dice
const randonNumber2 = Math.floor(Math.random() * 6) + 1;

const imageElement2 = document.getElementById('rightImage');
imageElement2.setAttribute('src', `./images/dice${randonNumber2}.png`);

let heading = "";
if (randonNumber1 > randonNumber2) {
    heading = "Player 1 Wins!";
} else if (randonNumber2 > randonNumber1) {
    heading = "Player 2 Wins!";
} else {
    heading = "Draw!"
}

const h1Element = document.querySelector('.heading h1');
h1Element.textContent = heading;