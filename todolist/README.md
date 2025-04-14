# To Do List

This project is a simple To Do List application built with JavaScript and basic HTML. Users can add events, mark them as completed, remove individual events, or clear the entire list. Events are ordered by date and can be filtered based on their completion status or urgency.

## 📂 Project Files

- `index.html`: The main HTML file containing the structure and elements of the application.
- `style.css`: The CSS file that defines the styling for the application.
- `scripts/CEvento.js`: The JavaScript class for individual events.
- `scripts/CLista.js`: The JavaScript class for managing the list of events.

---

## 🎮 Features

- ✅ **Add Events**: Add events with a date and description. Events are added to the list in chronological order.
- ✅ **Mark as Completed**: Users can mark an event as completed with a checkbox. Completed events are displayed with a strikethrough.
- ✅ **Remove Events**: Remove an individual event or clear all events from the list.
- ✅ **Filter Events**: View only completed, incomplete, or all events. There is also a filter to show events that are urgent (less than 3 days from the current date).
- ✅ **Event Date Validation**: Events cannot be added if the date is in the past.
- ✅ **Responsive Design**: The application is designed to work well on different screen sizes.

---

## 🧰 Technologies Used

- **HTML**: For creating the structure of the page.
- **CSS**: For styling the elements of the page.
- **JavaScript**: For managing events, the list, and applying logic.
  - **OOP (Object-Oriented Programming)**: The classes `CEvento` and `CLista` are used to model individual events and the list of events.

---

## 🔧 How to Use

1. **Add an Event**:  
   - Enter the date and description of the event.
   - Click "Add" to add it to the list. Events will be sorted by date automatically.

2. **Mark Event as Completed**:  
   - Check the checkbox next to an event to mark it as completed. The event will be struck through.

3. **Filter Events**:  
   - Use the filter buttons to view completed, incomplete, or all events.
   - Click on the "Urgent" button to display events that are scheduled within the next 3 days.

4. **Remove an Event**:  
   - Click the "Delete" button next to an event to remove it from the list.

5. **Clear All Events**:  
   - Click "Remove All" to delete all events in the list.

---

## 🖥️ Running the Application

To run the project, simply open the `index.html` file in any modern web browser.

---

## 🛠️ Future Improvements

- Add **localStorage** support to persist the list between sessions.
- Make the design more **responsive** using media queries.
- Enhance the UI using CSS frameworks like **Bootstrap** or **Tailwind**.
- Improve the event validation with **more sophisticated checks** (e.g., duplicate events).
- Add an **option to edit** an event after it has been added.

---

## 🧑‍💻 Code Structure

### `CEvento.js`

The `CEvento` class represents an individual event. It includes:

- `data`: The event's date.
- `attivita`: The event's description.
- `completata`: A boolean indicating whether the event has been completed.
- `visualizza()`: Displays event details in an alert box.
- `setCompletamento()`: Toggles the completion status of the event.

### `CLista.js`

The `CLista` class manages the list of events. It includes:

- **add()**: Adds a new event to the list.
- **rimuoviTutto()**: Removes all events from the list.
- **rimuoviGrafica()**: Clears the displayed events from the page.
- **aggiungiTr()**: Adds a new row to the event table.
- **segnalaAttività()**: Marks an event as completed or incomplete.
- **ordinaPerData()**: Sorts events by date.
- **visualizzaStato()**: Displays events based on their status (completed, not completed, or all).
- **verificaUrgenza()**: Displays events that are urgent (less than 3 days away).

---

## 📅 Conclusion

This To Do List project is a great way to practice working with JavaScript, object-oriented programming (OOP), and DOM manipulation. It's simple, but demonstrates important concepts in frontend web development.

---

🚀 Happy coding!
