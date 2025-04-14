# 🍕 Pizzeria - Order Your Pizza

A simple web project in HTML, CSS, and JavaScript (with jQuery) that simulates an interface for taking pizza orders. The user can click on pizza names and see the order list updated in real-time.

---

## 🧠 Key Features

- ✅ Click on a pizza to add it to the list
- ✅ Quantities are dynamically updated
- 🔁 **"Reset"** button to reload the page and clear the order
- 🧩 Uses **jQuery** for easy and effective DOM manipulation

---

## 🍕 Available Pizzas

- Margherita  
- Prosciutto  
- Patatine  
- Wurstel  
- Rucola  
- Diavola  

Each click on a pizza increases its count in the list, which is displayed in a table.

---

## 💻 Technologies Used

- **HTML5** for the page structure
- **JavaScript** (OOP + jQuery) for order logic
- **CSS** for styling (not included in this example but expected)
- **jQuery** CDN: `https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js`

---

## 🚀 How It Works

1. The page loads and creates an instance of `ListaPizze`.
2. When clicking on a `.grid-item` div, the `aggiungi()` function is called.
3. If it's the first time that pizza is selected, a new row is added to the table.
4. If the pizza is already present, only the counter is updated.
5. The `reset` button reloads the page to clear the list.

---

## 📝 Notes

- All variables for the pizza types are managed internally via counters
- The interface is designed for educational purposes
- Easily extendable to add more pizza types or more advanced management
