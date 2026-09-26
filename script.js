const newGameBtn = document.getElementById("new-game");
const remainingEl = document.getElementById("remaining");
const drawCardsBtn = document.getElementById("draw-cards");
const cardSlots = document.querySelectorAll(".card-slot");
const gameMessageEl = document.getElementById("game-message");
const computerScoreEl = document.getElementById("computer-score");
const userScoreEl = document.getElementById("user-score");

let deckId;
let computerScore = 0;
let userScore = 0;

newGameBtn.addEventListener("click", startNewGame);

async function startNewGame() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle",
  );
  const data = await response.json();

  deckId = data.deck_id;
  remainingEl.textContent = `${data.remaining} CARDS`;
  drawCardsBtn.disabled = false;
  computerScore = 0;
  userScore = 0;
  computerScoreEl.textContent = 0;
  userScoreEl.textContent = 0;

  cardSlots[0].innerHTML = ``;
  cardSlots[1].innerHTML = ``;

  gameMessageEl.textContent = "DRAW A CARD";
}

drawCardsBtn.addEventListener("click", drawCards);

async function drawCards() {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`,
  );
  const data = await response.json();

  remainingEl.textContent = `${data.remaining} CARDS`;

  cardSlots[0].innerHTML = `
            <img src="${data.cards[0].image}" class="card" > `;

  cardSlots[1].innerHTML = `
            <img src="${data.cards[1].image}" class="card" > `;

  const winnerMessage = determineWinner(data.cards[0], data.cards[1]);
  gameMessageEl.textContent = winnerMessage;

  if (data.remaining === 0) {
    drawCardsBtn.disabled = true;
    if (computerScore > userScore) {
      gameMessageEl.textContent = "COMPUTER WINS THE GAME!";
    } else if (computerScore < userScore) {
      gameMessageEl.textContent = "YOU WIN THE GAME!";
    } else {
      gameMessageEl.textContent = "THE GAME ENDS IN A TIE!";
    }
  }
}
function determineWinner(card1, card2) {
  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
  const card1Index = cardValues.indexOf(card1.value);
  const card2Index = cardValues.indexOf(card2.value);

  if (card1Index > card2Index) {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "Computer wins!";
  } else if (card1Index < card2Index) {
    userScore++;
    userScoreEl.textContent = userScore;
    return "You won!";
  } else {
    return "It's a tie!";
  }
}
