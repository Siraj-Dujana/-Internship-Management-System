
# 📝 Internship Management System

This project is a simple **Internship Management System** built with **Node.js, Express, and MongoDB**.  
It allows you to **manage interns and their assigned tasks** through RESTful APIs.  

---

## 🚀 Features

### 👨‍🎓 Interns
- Get all interns  
- Add a new intern  
- Update intern performance  
- Delete an intern  

### ✅ Tasks
- Get all tasks (with assigned intern details)  
- Get tasks assigned to a specific intern  
- Add a new task for an intern  
- Update task status (e.g., mark as completed)  
- Delete a task  

---

## ⚙️ Tech Stack
- **Node.js** (server-side runtime)  
- **Express.js** (web framework)  
- **MongoDB & Mongoose** (database and ODM)  

---

## 📌 API Endpoints

### 🔹 Interns
- `GET /interns` → Get all interns  
- `POST /interns` → Add new intern  
- `PUT /interns/:id` → Update intern performance  
- `DELETE /interns/:id` → Delete intern  

### 🔹 Tasks
- `GET /tasks` → Get all tasks (populated with assigned interns)  
- `GET /tasks/:id` → Get tasks of a specific intern  
- `POST /tasks/:id` → Assign a new task to an intern  
- `PUT /tasks/:id` → Update task status to completed  
- `DELETE /tasks/:id` → Delete a task  

---

## 📂 Project Structure
```

├── model/
│   ├── internmodel.js   # Intern schema
│   ├── taskmodel.js     # Task schema
├── server.js            # Main server file

````

---

## ▶️ How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/internship-management.git
   cd internship-management

2. Install dependencies:

   ```bash
   npm install
   ```
3. Start MongoDB locally:

   ```bash
   mongod
   ```
4. Run the server:

   ```bash
   node server.js
   ```
5. Open API in browser/Postman:

   ```
   http://localhost:3000
   ```

---

## 📧 Author

Developed by **Siraj Dujana**
📩 Contact: [dujanadujana16@gmail.com](mailto:dujanadujana16@gmail.com)

```

Do you want me to also **add example request & response JSON** (for interns and tasks) in the README, so it's super clear for GitHub users?
```
