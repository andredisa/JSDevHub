# 🥩 Monthly Meat Consumption Tracker

A simple web application that lets you track your meat consumption by day within a selected month. Entries are saved locally and used to estimate CO₂ emissions.

---

## 🧰 Key Features

- ✅ **Add Consumption**: Record the type of meat, the date, and quantity in grams.
- ✅ **View Monthly List**: Display all recorded entries for the selected month.
- ✅ **Remove Items**: Delete individual consumption records.
- ✅ **Local Save**: Data is stored in your browser using `localStorage`.
- ✅ **CO₂ Emission Estimate**: Calculates the estimated carbon footprint based on your monthly meat intake.
- ✅ **Dynamic Day Input**: The day input adjusts automatically based on the selected month and leap years.

---

## 📂 Project Files

- `index.html` – The main structure of the web page.
- `style.css` – Customizable styles for the interface.
- `script.js` – JavaScript logic for interaction, data saving, and CO₂ calculation.

---

## 🧪 How to Use

1. Select the **month** from the dropdown.
2. Enter the **day** (adjusted automatically for the selected month).
3. Enter the **type of meat** (e.g., "steak", "chicken").
4. Enter the **amount in grams**.
5. Click **"Add Consumption"** to record the entry.
6. View your entries under **“Monthly Consumption”**.
7. Click **"Save Data"** to store your consumption list.
8. Click **"Calculate CO2 Emissions"** to get your carbon footprint estimate.

---

## ♻️ CO₂ Emissions

Emissions are estimated by multiplying the meat quantity by an **average emission factor** of `25 gCO₂/g`.  
⚠️ This is a sample value — for accuracy, different meat types should have distinct emission factors.

---

## 💾 Data Persistence

Data is saved via `localStorage`, which means:

- It remains available even after closing the page.
- Entries can be updated or removed individually.

---

## 💡 Future Improvements

- 🔒 Advanced input validation
- 🐄 Emission factors by meat type
- 📤 Export data (CSV / JSON)
- 📊 Monthly consumption and CO₂ charts
- 📅 Yearly overview and statistics

---

## 🖥️ Running the Project

1. Download or clone the repository.
2. Open `index.html` in any **modern web browser**.
3. No server or external tools required.

---

## 👨‍💻 Author

This project was created for **educational purposes** and practice with:

- JavaScript (events, DOM, localStorage)
- HTML5 & CSS
- Basic environmental impact calculations

---

🚀 **Track your habits... and eat consciously!**
