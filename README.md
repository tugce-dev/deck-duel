# 🃏 Deck Duel

A browser-based card battle game built with vanilla JavaScript and the Deck of Cards API. Draw cards against the computer, compare their values, track the score, and battle through the deck to determine the final winner.

## 🔗 Live Demo

👉 [Play Deck Duel]([LIVE_DEMO_URL](https://deck-duel-tc.netlify.app/))

## ✨ Features

- Start a new game with a freshly shuffled 52-card deck
- Draw cards dynamically using the Deck of Cards API
- Compare card values and determine the winner of each round
- Track player and computer scores throughout the game
- Display the number of cards remaining in the deck
- Automatically determine the final winner when the deck runs out
- Reset the game with a new shuffled deck
- Disable drawing when the game is complete
- Clean, responsive card-table interface

## 🛠️ Built With

- **HTML5** — page structure and game layout
- **CSS3** — responsive styling, Flexbox, interactive states, and game UI
- **JavaScript (ES6+)** — game logic, state management, and DOM manipulation
- **Fetch API** — communication with an external REST API
- **Async/Await** — asynchronous API requests and response handling
- **Deck of Cards API** — deck creation, shuffling, and card drawing

## 🧠 JavaScript Concepts Applied

- Asynchronous JavaScript with `async` / `await`
- Fetching data from a third-party REST API
- Working with JSON responses
- DOM manipulation
- Event listeners
- Application state management
- Functions and return values
- Conditional logic
- Array methods such as `indexOf()`
- Template literals
- Dynamic UI updates

## 🎮 How It Works

1. Click **New Game** to create a freshly shuffled 52-card deck.
2. Click **Draw Cards** to draw one card for the computer and one for the player.
3. The cards are compared using an ordered value system from `2` through `ACE`.
4. The winner of each round receives one point.
5. The remaining card count updates after every draw.
6. When no cards remain, drawing is disabled and the final scores determine the winner.

## 💡 Technical Highlights

Card values returned by the API include both numbers and face cards such as `JACK`, `QUEEN`, `KING`, and `ACE`. Deck Duel uses an ordered array together with `indexOf()` to determine the relative strength of each card and compare the two players.

API requests are handled with `async` / `await`, while the returned data dynamically updates the card images, remaining card count, round result, scores, and final game state.

The game also maintains state across multiple rounds by tracking the current deck ID and both players' scores.

## 📁 Project Structure

```text
deck-duel/
├── index.html
├── styles.css
└── script.js
```

## 🚀 Run Locally

No dependencies or build tools are required.

1. Clone the repository.
2. Open `index.html` in your browser.
3. Start a new game and play.

---

Built with HTML, CSS, and vanilla JavaScript, with a focus on REST API integration, asynchronous programming, DOM manipulation, and game logic.
