# 💰 Vehicle Tax Calculator

A simple web project created in HTML and JavaScript to calculate the **vehicle tax** based on user input.

---

## 🚗 Features

The user can:

- Select the **vehicle type** (car, motorcycle, bus)
- Enter an **8-digit chassis code**
- Enter a **fuel type** (from 0, 0.2, 0.5, 0.9)
- Enter the **engine power in horsepower** (between 7 and 1000)
- Calculate the **tax cost** by clicking the `calculate` button
- View an image of the vehicle (or error message)

---

## 🧮 Calculation Logic

1. Each vehicle type has a **base value**:
   - Car → `15`
   - Motorcycle → `8`
   - Bus → `35`

2. The chassis code must be exactly 8 digits, and the **sum of the digits must be 40**, otherwise an error will be displayed.

3. The fuel type must be one of the following accepted values: `0`, `0.2`, `0.5`, `0.9`. Any other values will trigger an error.

4. Horsepower must be between `7` and `1000`. If greater than `280`, the fuel type is **doubled**.

5. The vehicle tax is calculated using the formula:

`Tax Cost = Base Type + (Fuel Type × Horsepower)`

6. The result is displayed on the screen along with an image of the vehicle.

---

## 🚫 Handled Errors

- Invalid chassis code (not 8 digits or sum ≠ 40)
- Invalid fuel type
- Horsepower out of range
- In case of errors → image `x.jpg` and `alert()` messages

---

## ✅ Technologies Used

- HTML
- Vanilla JavaScript
- DOM Manipulation
- No external libraries required

---

## 🎯 Educational Purpose

Exercise to strengthen:

- Creation and use of **JavaScript classes**
- Input **validation** and **control**
- Interaction with DOM elements
- Managing dynamic images based on input

---

🚀 Happy coding!
