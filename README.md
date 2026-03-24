# 🚀 Full Stack User Management App (MERN)

A modern **Full Stack MERN Application** built using **React, Node.js, Express, and MongoDB** featuring **dynamic filtering, real-time search, and REST API integration**.

This project demonstrates real-world concepts like **API-driven architecture, debouncing, and scalable filtering systems** used in production applications.

---

## 🌐 Tech Stack

### 🖥️ Frontend

* React.js (Hooks: `useState`, `useEffect`)
* Fetch API
* Dynamic UI rendering

### ⚙️ Backend

* Node.js
* Express.js
* REST API architecture

### 🗄️ Database

* MongoDB
* Mongoose ODM

---

## ✨ Features

* 🔍 **Dynamic Filtering** (city & rating)
* ⚡ **Real-Time Search (Debounced)**
* 🔗 **REST API Integration**
* 📡 **Client-Server Architecture**
* 🧠 **Efficient Data Fetching**
* 📱 **Responsive UI Ready**
* 🧩 **Scalable Code Structure**

---

## 🧠 Key Concepts Implemented

* MVC-inspired backend structure
* Query-based filtering using MongoDB
* Regex-based partial search (`$regex`)
* Debouncing for performance optimization
* React state management & lifecycle
* API-driven UI updates

---

## 📂 Project Structure

```
fullstack-user-app/
│
├── backend/        # Node.js + Express API
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── app.js
│
├── frontend/       # React App
│   └── src/
│       └── App.js
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/fullstack-user-app.git
cd fullstack-user-app
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
node app.js
```

📍 Runs on: `http://localhost:5000`

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm start
```

📍 Runs on: `http://localhost:3000`

---

## 🔍 API Endpoints

| Method | Endpoint                       | Description      |
| ------ | ------------------------------ | ---------------- |
| GET    | `/api/users`                   | Get all users    |
| GET    | `/api/users?city=del`          | Filter by city   |
| GET    | `/api/users?rating=5`          | Filter by rating |
| GET    | `/api/users?city=del&rating=5` | Combined filter  |

---

## ⚡ Dynamic Filtering Flow

```
User Input → React State → API Request → Express → MongoDB → Response → UI Update
```

---

## 🚀 Performance Optimization

* ✅ Debouncing implemented (500ms delay)
* ✅ Reduced API calls during typing
* ✅ Improved user experience

---

## 📸 Screenshots

*Add screenshots here (UI, filtering, API response)*

---

## 🚀 Future Improvements

* 🎨 Tailwind / Bootstrap UI upgrade
* 📄 Pagination (large datasets)
* 🔐 Authentication (JWT)
* 🌐 Deployment (Vercel + Render)
* ⚛️ Redux / Advanced State Management

---

## 👨‍💻 Author

**Ayush Kumar**
Aspiring Full Stack Developer 🚀

---

## ⭐ Show Your Support

If you found this helpful, please ⭐ star the repo!

---

## 📌 Keywords (SEO)

MERN Stack, React App, Node.js API, MongoDB Project, Full Stack Development, Dynamic Filtering, REST API, JavaScript Project

---
