# 🎰 Casino Slot Machine

A web project in HTML, CSS, and JavaScript that simulates a **slot machine** with numeric images, a credit system, and rewards based on the obtained combinations.

---

## 🎮 Key Features

- 3 **numeric reels** from 0 to 9 that spin on each "spin"
- 10 **initial credits**
- **"SPIN"** button to start the game
- **"CASH OUT"** button to reset the machine and cash out virtually

---

## 💰 Rules and Prizes

Each spin costs **1 credit**. The score won depends on the combinations:

- If the **first two numbers are the same** → win `20 × (number + 1)` credits
- If **all three numbers are the same in sequence** → win `50 × (number + 1)` credits
- If the **first and third numbers match** → win `5 × (number + 1)` credits

---

## 🧠 JavaScript Logic

- The `Casino` object handles the slot machine logic
- Each `spin()` generates 3 random numbers (between 0 and 9)
- Images are dynamically updated based on the numbers
- The `checkWin()` function manages the prizes
- `cashOut()` resets the slot machine to its initial values

---

## 🧪 Technologies Used

- HTML5 for the page structure
- JavaScript for logic, interactions, and DOM management
- Dynamic images for output results

---

## ✅ Requirements

- Modern browser (Chrome, Firefox, Edge, Safari)
- No external libraries required

---

## 📝 Notes

- If the credits reach zero, an `alert` is shown, and no more spins can be made
- The "CASH OUT" button does not save credits but resets the game

---

🚀 Enjoy playing!
