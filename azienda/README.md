# 📦 Order Management

A simple web project that allows users to manage an order and automatically generate a **purchase code** based on the data entered by the user. The project includes data validation, code generation, and form reset functionality.

## 🧩 Features

- Entering company data and order details
- Field validation (with error messages)
- Automatic generation of the purchase code
- Complete form reset

## 💻 Technologies Used

- **HTML** for the form structure
- **JavaScript** for logic and validation
- **CSS** for styling


## 📋 Field Details

- **Company**: Company name (required, cannot contain numbers)
- **Product**: Product name (required, cannot contain numbers)
- **Purchase Date**: Day (1–31), month (selectable from a dropdown), year (2000–2017)
- **Nr. of products purchased**: Between 1 and 99
- **Price**: Between 1 and 999
- **Delivery Times**: Selectable (30, 60, 90) but not used in the code

## 🔐 Generated Code

The purchase code follows this format:

`[COMP][PROD][DD][MON][YY][QTY][PRICE]`

- `COMP`: first 4 letters of the company (uppercase)
- `PROD`: first 3 letters of the product (uppercase)
- `DD`: day with padding (e.g., "03")
- `MON`: month in text format (e.g., "JAN", "FEB", etc.)
- `YY`: last two digits of the year
- `QTY`: number of products purchased (2-digit padding)
- `PRICE`: price (3-digit padding)

### 🧪 Example

If the user enters:
- Company: `OpenAI`
- Product: `Chatbot`
- Day: `3`
- Month: `MAY`
- Year: `2015`
- Products: `2`
- Price: `30`

The generated code will be:

`OPENCHA03MAY152030`

## 🛠️ Notes

- The "Delivery Times" field is present in the form but **does not affect** the project logic.
- In the `script.js` file, there is a small error in `reset()`:
  - `document.getElementById("annp")` should be `anno`

## 🧠 Educational Purpose

This project is designed for practice with:
- HTML form handling
- Input validation
- DOM manipulation in JavaScript
- String concatenation and formatting

---

🚀 Happy coding!
