# 💣 Minesweeper - Discover the Cells

A simple web project in HTML, CSS, and JavaScript (with jQuery) that simulates the classic game of Minesweeper. The user can select cells in the grid and try to uncover all the cells without triggering the mines.

---

## 🧠 Key Features

- ✅ Select the difficulty level to customize the game
- ✅ Click on the cells to uncover them and view the number of adjacent mines
- ✅ **"Reset" button** to reload the page and start the game over
- 🔁 Uses **jQuery** for simple and effective DOM manipulation

---

## 🎮 Difficulty Levels

- **Easy**: 5x5 grid with 15 mines
- **Medium**: 5x5 grid with 20 mines
- **Hard**: 5x5 grid with 25 mines
- **Dangerous**: 10x10 grid with 30 mines

Each level offers a different challenge, with an increasing number of mines to avoid.

---

## 💻 Technologies Used

- **HTML5** for the page structure
- **JavaScript** (OOP + jQuery) for the game logic
- **CSS** for styling
- **jQuery** CDN: `https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js`

---

## 🚀 How It Works

1. The page loads and the user selects the difficulty level from the dropdown menu.
2. By clicking the "Generate Field" button, a new game grid is created.
3. The user can click on the cells to uncover them. If a mine is triggered, the game ends.
4. If all cells without mines are uncovered, the user wins.
5. The "Reset" button reloads the page to start a new game.

---

## 📝 Notes

- Each cell is represented by an instance of the `Cell` class, which manages the state of the cell (mine, open, adjacent mine counter).
- The game logic is managed by the `Field` class, which creates the grid and places the mines.
- The interface is designed for educational purposes and can be easily extended to add features or additional difficulty levels.