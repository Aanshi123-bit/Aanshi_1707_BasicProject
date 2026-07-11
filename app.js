require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");

const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const taskRoutes = require("./routes/task");
const charmRoutes = require("./routes/charm");

const app = express();

// =======================
// Connect Database
// =======================

connectDB();

// =======================
// Middlewares
// =======================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

// =======================
// View Engine
// =======================

app.set("view engine", "ejs");

// =======================
// Routes
// =======================

app.get("/", (req, res) => {
    res.render("index");
});

app.use("/", authRoutes);
app.use("/", dashboardRoutes);
app.use("/", taskRoutes);
app.use("/", charmRoutes);

// =======================
// 404 Page
// =======================

app.use((req, res) => {
    res.status(404).send("404 | Page Not Found");
});

// =======================
// Server
// =======================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});