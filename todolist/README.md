# 📝 ToDo List - Manage Your Tasks

A simple web project in HTML, CSS, and JavaScript that allows users to create and manage a task list. Users can add new tasks, set a due date, and mark tasks as completed.

---

## 🧠 Key Features

- ✅ Add new tasks with a due date
- ✅ Mark tasks as completed
- ✅ Remove tasks from the list
- 🔁 Simple and intuitive interface

---

## 💻 Technologies Used

- **HTML5** for the page structure
- **JavaScript** (OOP) for the task list logic
- **CSS** for styling

---

## 🚀 How It Works

1. The page loads and displays an input field to enter a new task and a date.
2. The user can type a task and select a date, then click the "Add" button to add the task to the list.
3. Each task is displayed with the date and a close button to remove it from the list.
4. Clicking on a task marks it as completed, changing its visual appearance.
5. Tasks can be removed by clicking the close button next to each task.

---

## 📂 Project Structure

The project consists of the following files:

- `index.html`: The main page of the project, containing the HTML structure and references to the CSS and JavaScript files.
- `style.css`: The CSS file for styling the task list.
- `js/script.js`: Contains the logic for managing the addition, removal, and display of tasks.
- `js/task.js`: Defines the `Task` class, which represents a task with a date and an event.
- `js/tasklist.js`: Manages the task list and operations on it.

---

## 📝 Notes

- Each task is represented by an instance of the `Task` class, which manages the date and description of the task.
- The logic for managing tasks is centralized in the `script.js` file, which interacts with the DOM to update the list.
- The interface is designed to be simple and intuitive, making it easy for users to manage their daily tasks.

---

## 📌 Installation Instructions

1. Clone the repository or download the project files.
2. Open the `index.html` file in a modern web browser.
3. Start managing your tasks!

---

## Contributions

If you would like to contribute to this project, feel free to submit a pull request or open an issue to discuss changes.

## License

This project is open source and available under the [MIT License](LICENSE).