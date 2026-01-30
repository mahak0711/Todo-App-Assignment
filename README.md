# To-Do Web App

A **full-stack task management application** that allows users to create boards and manage todos within them.  
Built with **React.js** for the frontend and **Node.js + Express** for the backend with **MongoDB** as the database.

---

## Features

- User authentication via **email & password**  
- Create, read, update, and delete (**CRUD**) **boards**  
- Create, read, update, and delete (**CRUD**) **todos** inside boards  
- Responsive and clean **UI/UX**  
- Protected routes with **JWT-based authentication**  

---

## Tech Stack

- **Frontend:** React.js, React Router DOM, Axios  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Authentication:** JWT (manual setup)  

---

## Project Structure
```
frontend/
├─ src/
│ ├─ components/ # Navbar, BoardCard, TodoItem, ModalForm
│ ├─ pages/ # Login, Register, Dashboard, Board
│ ├─ services/ # api.js (Axios API calls)
│ └─ App.jsx
├─ package.json
└─ README.md

backend/
├─ src/
│ ├─ controllers/ # auth.controller.js, board.controller.js, todo.controller.js
│ ├─ middleware/ # auth.middleware.js
│ ├─ models/ # User.js, Board.js, Todo.js
│ ├─ routes/ # auth.routes.js, board.routes.js, todo.routes.js
│ └─ config/ # db.js
├─ server.js
└─ package.json
```

---

## Setup Instructions

### Backend

1. Go to the backend folder:
```bash
cd backend
```
2. Install dependencies::
```bash
npm install
```
3. Create a .env file in backend/:
```bash
PORT=5000
MONGO_URI=mongodb+srv://kankariamahak7:1xXlrXE0yalkaAPd@cluster0.5avzqxn.mongodb.net/
JWT_SECRET=mahaksecretkey1
```
4. Start the backend server:
```bash
npm start
```

### Frontend

1.Go to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3.Start the frontend:
```bash
npm start
```

### Usage

1. Open http://localhost:5173/ in your browser

2. Register a new account

3. Log in using your email & password

4. Create new boards and manage todos

5. Use the Navbar to navigate and logout

## API Endpoints

### **Auth**
| Method | Endpoint               | Description                     |
|--------|-----------------------|---------------------------------|
| POST   | /api/auth/register    | Register a new user             |
| POST   | /api/auth/login       | Log in an existing user         |

### **Boards**
| Method | Endpoint             | Description                     |
|--------|---------------------|---------------------------------|
| GET    | /api/board          | Get all boards of the logged-in user |
| POST   | /api/board          | Create a new board              |
| DELETE | /api/board/:id      | Delete a board by ID            |

### **Todos**
| Method | Endpoint                     | Description                     |
|--------|-------------------------------|---------------------------------|
| GET    | /api/todo/:boardId           | Get all todos of a specific board |
| POST   | /api/todo/:boardId          | Create a new todo in a board     |
| PUT    | /api/todo/item/:todoId      | Update a todo by ID             |
| DELETE | /api/todo/item/:todoId      | Delete a todo by ID             |
