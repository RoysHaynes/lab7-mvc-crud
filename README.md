# Lab 7: MVC Chat Application with CRUD Operations

## Overview
This lab builds on Lab 6’s chat application by refactoring it into the **Model-View-Controller (MVC)** architectural pattern and 
adding **CRUD (Create, Read, Update, Delete)** operations for data management. The application uses `localStorage` for client-side 
persistence and includes features like chat history export/import. The goal is to create a maintainable, scalable chat interface 
that separates concerns between data (Model), presentation (View), and business logic (Controller), preparing for future enhancements 
like REST API integration.

**Project Link**: [To be added after publishing]

### Key Themes
- **MVC Architecture**: Separating data management, UI rendering, and user interaction logic.
- **CRUD Operations**: Implementing Create, Read, Update, and Delete for chat messages.
- **Data Persistence**: Using `localStorage` to save chat history across sessions.
- **Component-Based Thinking**: Building on Lab 6’s component approach for reusable UI elements.
- **Progressive Enhancement**: Ensuring the app remains functional with minimal JavaScript.

## Project Goals
By the end of this lab, the application will:
1. Implement a chat interface using the MVC pattern.
2. Support full CRUD operations for chat messages (Create: send messages, Read: display history, Update: edit user messages, Delete: remove messages).
3. Persist chat history in `localStorage`.
4. Allow exporting chat history as a JSON file and importing from a JSON file.
5. Display message count and last saved timestamp.
6. Provide intuitive UI with edit/delete buttons for user messages and confirmation dialogs for destructive actions.
7. Maintain clean, semantic HTML and CSS from Lab 6, with modular JavaScript code.
8. Demonstrate development progression through incremental Git commits.


## Repository Structure
lab7-mvc-crud/
│
├── src/
│   ├── index.html              # Main application page
│   ├── styles.css             # Application styles
│   ├── js/
│   │   ├── model.js           # Data management (Model)
│   │   ├── view.js            # UI rendering (View)
│   │   ├── controller.js      # Business logic (Controller)
│   │   ├── app.js             # Application initialization
│   │   └── eliza.js           # Bot response logic (from Lab 6)
└── README.md                  # Project documentation


## Design Decisions
### Model (`model.js`)
- **Step 1**: Initialized `messages` array for storage.
- **Step 2**: Added `loadMessages` to retrieve messages from `localStorage` with error handling.
- **Step 3**: Implemented observer pattern (`addObserver`, `notifyObservers`) for View notifications.
- **Step 4**: Added Create operation (`addMessage`, `saveMessages`) to add messages and persist to `localStorage`.
- **Step 5**: Added Read (`getMessages`), Update (`updateMessage`), and Delete (`deleteMessage`, `clearMessages`) operations for full CRUD functionality.
- **Step 6**: Implemented `exportChat` and `importChat` for JSON-based chat history management.
- **Step 7**: Added `lastSaved` timestamp tracking in `saveMessages` and `getLastSaved` for UI display.

### View (`view.js`)
- **Step 1**: Initialized the `ChatView` class with nine variables for DOM elements (chat body, message count, empty state, form, input, export/import/clear buttons, model) and set up an `init` method with a placeholder `render` function to log messages for testing.
- **Step 2**: Added basic rendering using semantic `<article>` tags to display user and bot messages with timestamps and edited flags, replacing initial `<div>` tags per professor feedback.
- **Step 3**: Implemented dynamic message count display and empty state toggling ("No messages yet") based on the number of messages.
- **Step 4**: Added "Edit" and "Delete" buttons for user messages, using `data-message-id` and `data-action` attributes for future CRUD actions.
- **Step 5**: Integrated auto-scroll functionality to keep the latest message in view, completing the View with all required UI features.
- **Step 6**: Fixed a selector mismatch by updating `emptyState` from `.start.chat` to `.start-chat` to match `index.html`, resolving a `null` error during rendering.

### Controller (`controller.js`)
- **Step 1**: Initialized the `ChatController` class with references to the model, view, form, and input elements, setting up a basic `init` method structure.
- **Step 2**: Added a form submission event listener to prevent page reloads with `event.preventDefault()`, trim input text, and add user messages to the model if non-empty.
- **Step 3**: Integrated `eliza.js` by importing `getBotResponse` and adding bot reply logic after each user message, enhancing interactivity.
- **Step 4**: (Placeholder) Planned to add event listeners for edit and delete button clicks to support Update and Delete operations (to be implemented).
- **Step 5**: (Placeholder) Planned to implement export, import, and clear functionality using model methods (to be implemented).

### App (`app.js`)
- **Step 1**: Created the `app.js` file and imported all MVC components (`ChatModel`, `ChatView`, `ChatController`) and `eliza.js` for bot responses.
- **Step 2**: Defined the `initApp` function to instantiate the model, view, and controller, and initialize the view with the model for observer pattern setup.
- **Step 3**: Added a `window.addEventListener('load', initApp)` to ensure the application starts only after the DOM is fully loaded, centralizing initialization.
-**Step 4**: Integrated `app.js` into `index.html` by updating the script tag to load it, removing inline test cases (`model.addMessage()`) for user-driven interaction.

## Development Progress
- **Project Setup**: Initialized repository with `index.html`, `styles.css`, and `js/` directory structure.
- **Eliza Integrated**: Copied `eliza.js` from Lab 6 for bot response logic.
- **HTML/CSS**: Built out the base HTML and CSS to look like completed project,
- **Model.js**:Implemented `model.js` with full CRUD, export/import, and timestamp tracking.
- **View.js**: Implemented `view.js` to render messages, buttons, count. Assigns classes to messages for CSS labeling
- **Controller.js**: Added `controller.js` to handle form submission, preventing page reloads, and integrating `eliza.js` for bot responses.
- **App.js**: Created `app.js` to centralize MVC component initialization, updating `index.html` to load it and removing inline test cases for user-driven interaction.
- **Bug Fixes**: Resolved CSS loading issues by verifying `styles.css` path, fixed `view.js` DOM selector mismatches, and ensured proper module imports.
## License
This project is licensed under the MIT License.

## Author
**Roy Haynes**  
University of San Diego – COMP 305