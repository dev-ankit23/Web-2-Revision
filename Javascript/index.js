let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let attempts = 0;
const guessinput = document.getElementById("guessinput");
const btn = document.getElementById("submit-btn");
const message = document.getElementById("message");
const pcguess = document.getElementById("computerGuess");
const resetbtn = document.getElementById("Reset");

btn.addEventListener("click", function () {
  const userGuess = parseInt(guessinput.value);
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Correct you won ${attempts}`;
    pcguess.value = randomNumber;
  } else if (userGuess > randomNumber) {
    message.textContent = `You  loose , your guess was too big ${attempts}`;
    pcguess.value = randomNumber;
  } else {
    message.textContent = `You loose , your guess was too small ${attempts} `;
    pcguess.value = randomNumber;
  }
});

resetbtn.addEventListener("click", function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessinput.value = "";
  message.textContent = "";
  pcguess.textContent = ""; // or .value if it's an input
});
