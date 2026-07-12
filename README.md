# 🏰 Hogwarts Academy

A Harry Potter-themed full-stack web application that transforms studying into a magical Hogwarts experience. Complete study tasks, earn XP, gain House Points, unlock magical charms, and progress through your academic journey while representing your Hogwarts House.

---

## ✨ Features

### 🔐 Authentication

* User Registration
* Secure Login
* Password Encryption using bcrypt
* Session-based Authentication

### 🏰 Sorting Ceremony

* Students are sorted into a Hogwarts House
* House assignment is saved permanently

### 📊 Dashboard

* Personalized welcome page
* Displays:

  * House
  * XP
  * House Points
  * Study Streak
* XP Progress Bar
* Quick access to all features

### 📚 Study Planner

* Create study tasks
* Set subject and deadline
* Choose task difficulty
* View all personal tasks
* Mark tasks as completed
* Delete tasks

### ⭐ XP & House Points

* Earn XP by completing tasks
* Gain House Points for your house
* Track your academic progress

### 🪄 Magical Charms

Unlock magical spells as you earn XP.

| Charm        | Unlock Requirement |
| ------------ | -----------------: |
| ✨ Lumos      |             100 XP |
| 🧲 Accio     |             250 XP |
| 🛡️ Protego  |             500 XP |
| 🚪 Alohomora |             800 XP |

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* bcrypt
* express-session

### Version Control

* Git
* GitHub

---

## 📂 Project Structure

```text
hogwarts-academy/
│
├── config/
├── middleware/
├── models/
├── routes/
├── views/
├── public/
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/hogwarts-academy.git
```

### 2. Move into the project directory

```bash
cd hogwarts-academy
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=3000
SESSION_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection_string
```

### 5. Start MongoDB

* If using MongoDB Compass, make sure MongoDB is running locally.
* If using MongoDB Atlas, use your Atlas connection string.

### 6. Start the application

```bash
node app.js
```

or

```bash
npm start
```

### 7. Open in your browser

```
http://localhost:3000
```

---

## 📸 Screenshots

### 🏠 Landing Page

![Landing Page](https://github.com/user-attachments/assets/c26308dc-1d1e-497c-98b5-7dd2f2697ccf)

---

### 🔐 Login Page

![Login Page](https://github.com/user-attachments/assets/76d26ef8-48f8-4484-b15c-a3b56b9a7575)

---

### 📝 Signup Page

![Signup Page](https://github.com/user-attachments/assets/c5a930f1-6201-4941-9c7a-f6575f5806ba)

---

### 🎩 Sorting Ceremony

![Sorting Ceremony](https://github.com/user-attachments/assets/2d945d9f-b858-4ec0-a8e3-7ba7555c483e)

---

### 📊 Dashboard

![Dashboard](https://github.com/user-attachments/assets/0cf0b722-489b-4760-8f36-9189dce36330)

---

### 📚 Study Planner

![Study Planner](https://github.com/user-attachments/assets/ab736e7a-e2f3-46ba-b2ab-da2cbc88aa47)

## 🎯 Future Enhancements

* 🏆 House Cup Leaderboard
* 🦉 Owl Reminder System
* 📅 Study Calendar
* 📈 Weekly Progress Analytics
* 🎖️ Achievement Badges
* 🔔 Notifications
* 🎵 Hogwarts Background Music
* 🌙 Multiple Dashboard Themes
* 📱 Responsive Mobile Design

---

## 👩‍💻 Author

**Aanshi Srivastava**

B.Tech (Electronics & Communication Engineering)

MNNIT Allahabad

---

## 📜 License

This project is created for educational and learning purposes.

---

## ⭐ Support

If you enjoyed this project, consider giving it a ⭐ on GitHub!

*"Happiness can be found even in the darkest of times, if one only remembers to turn on the light."*
— Albus Dumbledore
