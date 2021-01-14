var state = history.state || {};
var reloadCount = state.reloadCount || 0;
if (performance.navigation.type === 1) { // Reload
  state.reloadCount = ++reloadCount;
  history.replaceState(state, null, document.URL);
} else if (reloadCount) {
  delete state.reloadCount;
  reloadCount = 0;
  history.replaceState(state, null, document.URL);
}
if (reloadCount > 0) {
  var randomNumber1 = Math.floor(1 + (6 * (Math.random())));
  if (randomNumber1 === 1) {
    document.querySelector(".img1").src = "images/dice1.png";
  } else if (randomNumber1 === 2) {
    document.querySelector(".img1").src = "images/dice2.png";
  } else if (randomNumber1 === 3) {
    document.querySelector(".img1").src = "images/dice3.png";
  } else if (randomNumber1 === 4) {
    document.querySelector(".img1").src = "images/dice4.png";
  } else if (randomNumber1 === 5) {
    document.querySelector(".img1").src = "images/dice5.png";
  } else {
    document.querySelector(".img1").src = "images/dice6.png";
  }

  var randomNumber2 = Math.floor(1 + (6 * (Math.random())));
  if (randomNumber2 === 1) {
    document.querySelector(".img2").src = "images/dice1.png";
  } else if (randomNumber2 === 2) {
    document.querySelector(".img2").src = "images/dice2.png";
  } else if (randomNumber2 === 3) {
    document.querySelector(".img2").src = "images/dice3.png";
  } else if (randomNumber2 === 4) {
    document.querySelector(".img2").src = "images/dice4.png";
  } else if (randomNumber2 === 5) {
    document.querySelector(".img2").src = "images/dice5.png";
  } else {
    document.querySelector(".img2").src = "images/dice6.png";
  }

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Win";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Win";
  } else {
    document.querySelector("h1").textContent = "Sorry, Draw"
  }
}
