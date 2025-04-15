# 🎰 Slot Machine - Play and Win!

A simple web project in HTML, CSS, and JavaScript that simulates a slot machine. Users can bet their credits and try to win prizes based on the results of the spins.

---

## 🧠 Key Features

- ✅ Click the **SPIN** button to spin the slot machine
- ✅ View the results of the spins with fruit images
- ✅ Winning system based on number combinations
- 🔁 **RESET** button to restore the game and initial credits

---

## 💻 Technologies Used

- **HTML5** for the page structure
- **JavaScript** (OOP) for the slot machine logic
- **CSS** for styling

---

## 🚀 How It Works

1. The page loads and shows the user's initial credit (10 credits).
2. By clicking the **SPIN** button, the slot machine generates three random numbers.
3. The results of the spins are displayed as fruit images.
4. If all three numbers are the same, the user wins a jackpot; if two numbers are the same, they win a pair prize; otherwise, there are no winnings.
5. The user's credit is updated based on the type of win.
6. By clicking the **RESET** button, the game is restored and the credit returns to 10.

---

## 📂 Project Structure

The project consists of the following files:

- `index.html`: The main page of the project, containing the HTML structure and references to the CSS and JavaScript files.
- `style.css`: The CSS file for styling the slot machine.
- `js/SlotMachine.js`: Defines the `SlotMachine` class, which manages the logic of the spins and winnings.
- `js/Utente.js`: Defines the `Utente` class, which manages the user's credit and winnings.

---

## 📝 Notes

- Each spin of the slot machine is managed by the `SlotMachine` class, which generates random numbers and determines the type of win.
- The `Utente` class manages the credit and updates the balance based on winnings.
- The interface is designed to be simple and intuitive, making it easy for users to enjoy the game.

---

## 📌 Installation Instructions

1. Clone the repository or download the project files.
2. Open the `index.html` file in a modern web browser.
3. Start playing and try to win!

---

## Contributions

If you would like to contribute to this project, feel free to submit a pull request or open an issue to discuss changes.

## License

This project is open source and available under the [MIT License](LICENSE).