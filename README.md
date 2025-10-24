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
- **Step 5**: Added Read (`getMessages`), Update (`updateMessage`), and Delete (`deleteMessage`, `clearMessages`)operations for full CRUD functionality.
- **Step 6**: Implemented `exportChat` and `importChat` for JSON-based chat history management.
- **Step 7**: Added `lastSaved` timestamp tracking in `saveMessages` and `getLastSaved` for UI display.

## Development Progress
- **Project Setup**: Initialized repository with `index.html`, `styles.css`, and `js/` directory structure.
- **Eliza Integrated**: Copied `eliza.js` from Lab 6 for bot response logic.
- **HTML/CSS**: Built out the base HTML and CSS to look like completed project,
- **Model.js**:Implemented `model.js` with full CRUD, export/import, and timestamp tracking.
- 
## License
This project is licensed under the MIT License.

## Author
**Roy Haynes**  
University of San Diego – COMP 305