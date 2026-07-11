const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/User");

const router = express.Router();

// =========================
// SIGNUP PAGE
// =========================

router.get("/signup", (req, res) => {
    res.render("auth/signup");
});

// =========================
// LOGIN PAGE
// =========================

router.get("/login", (req, res) => {
    res.render("auth/login");
});

// =========================
// CREATE ACCOUNT
// =========================

router.post("/signup", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.send("Please fill all fields.");
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.send("Email already registered.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.redirect("/login");

    } catch (err) {

        console.log(err);
        res.send("Server Error");

    }

});

// =========================
// LOGIN
// =========================

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.send("User not found.");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.send("Incorrect Password.");
        }

        req.session.userId = user._id;

        res.redirect("/dashboard");

    } catch (err) {

        console.log(err);
        res.send("Server Error");

    }

});

// =========================
// LOGOUT
// =========================

router.get("/logout", (req, res) => {

    req.session.destroy(() => {
        res.redirect("/");
    });

});

module.exports = router;