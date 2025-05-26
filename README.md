# Todo App

![Todo App Screenshot](./screenshot.png)

A simple and interactive Todo List application built with React and Vite. This app allows users to add, complete, and track their daily tasks efficiently.

## Features

- **Add Tasks:** Quickly add new tasks to your todo list.
- **Mark as Complete:** Mark tasks as done or undone.
- **Task Counter:** See how many tasks are completed out of the total.
- **Empty State:** Friendly message when there are no tasks.
- **Responsive UI:** Works well on desktop and mobile devices.

## Project Structure

```
todoapp/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    └── components/
        ├── ToDo.jsx
        ├── Form.jsx
        ├── ToDoList.jsx
        └── Footer.jsx
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/todoapp.git
   cd todoapp
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## Usage

- **Add a Task:** Type your task in the input field and press Enter or click the add button.
- **Complete a Task:** Click the checkbox next to a task to mark it as complete.
- **View Progress:** The footer shows how many tasks are completed out of the total.
- **No Tasks:** If there are no tasks, a message "No items in the list" will be displayed.

## Customization

- You can modify the styles in the respective component files or add a global CSS file for custom themes.
- To change the favicon, replace `vite.svg` in the `public` folder.

## Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

## License

This project is licensed under the MIT License.

---

**Happy tasking!**
