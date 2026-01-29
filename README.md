# 📝 To-Do Board Web App – Backend

A task management backend API where users can create boards and manage todos within those boards.  
Built with a clean architecture, JWT authentication, and secure user-scoped data access.

---

## 🚀 Features

- User authentication using JWT (Email & Password)
- Create and manage Boards
- Create, update, delete Todos inside Boards
- User-specific data access (no cross-user leakage)
- Protected routes using authentication middleware
- RESTful API design

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB 
- **Authentication:** JWT (Manual implementation)  
- **Testing:** Postman  

> Tech stack strictly follows the assignment guidelines.

---

## 📂 Project Structure
```
backend/
├── config/
│   └── db.js                # MongoDB connection logic
├── controllers/
│   ├── auth.controller.js   # Auth logic (login, register)
│   ├── board.controller.js  # Board CRUD logic
│   └── todo.controller.js   # Todo CRUD logic
├── middleware/
│   └── auth.middleware.js   # JWT authentication middleware
├── models/
│   ├── User.js              # User schema
│   ├── Board.js             # Board schema
│   └── Todo.js              # Todo schema
├── routes/
│   ├── auth.routes.js       # Auth routes
│   ├── board.routes.js      # Board routes
│   └── todo.routes.js       # Todo routes
├── .env                     # Environment variables
└── server.js                # App entry point
```


---

## 🔐 Authentication Flow

1. User registers using email & password
2. User logs in and receives a JWT token
3. Token must be sent in `Authorization` header for protected routes

```
Authorization: Bearer <JWT_TOKEN>
```


---

## 📌 API Endpoints

### 🔑 Auth Routes
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

---

### 📋 Board Routes (Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/board` | Create a new board |
| GET | `/api/board` | Get all boards of logged-in user |
| DELETE | `/api/board/:id` | Delete a board |

---

### ✅ Todo Routes (Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/todo/:boardId` | Create todo inside a board |
| GET | `/api/todo/:boardId` | Get todos of a board |
| PUT | `/api/todo/item/:todoId` | Update a todo |
| DELETE | `/api/todo/item/:todoId` | Delete a todo |

---

## 🧪 Testing (Postman)

- All APIs tested using Postman
- JWT token validated on every protected route
- Only owner can access or modify boards and todos

---

## ⚙️ Environment Variables

Create a `.env` file in backend root:
```
PORT=5000
MONGO_URL=mongodb+srv://kankariamahak7:1xXlrXE0yalkaAPd@cluster0.5avzqxn.mongodb.net/
JWT_SECRET=mahaksecretkey1
```


---

## ▶️ Run Locally

```bash
npm install
npm run dev

