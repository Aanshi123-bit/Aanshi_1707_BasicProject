const express = require("express");

const router = express.Router();

const User = require("../models/User");
const isLoggedIn = require("../middleware/authMiddleware");

// =========================
// DASHBOARD
// =========================

router.get("/dashboard", isLoggedIn, async (req, res) => {

    try {

        const user = await User.findById(req.session.userId);

        if (!user) {
            return res.redirect("/login");
        }

        if (!user.house) {
            return res.redirect("/sorting");
        }

        res.render("dashboard/dashboard", {
            user
        });

    }

    catch (err) {

        console.log(err);
        res.status(500).send("Something went wrong!");

    }

});


// =========================
// SORTING PAGE
// =========================

router.get("/sorting", isLoggedIn, async (req, res) => {

    try {

        const user = await User.findById(req.session.userId);

        if (!user) {
            return res.redirect("/login");
        }

        if (user.house) {
            return res.redirect("/dashboard");
        }

        res.render("dashboard/sorting", {
            user
        });

    }

    catch (err) {

        console.log(err);
        res.status(500).send("Something went wrong!");

    }

});


// =========================
// SORTING CEREMONY
// =========================

router.post("/sorting", isLoggedIn, async (req, res) => {

    try {

        const user = await User.findById(req.session.userId);

        if (!user) {
            return res.redirect("/login");
        }

        // Prevent assigning a house again
        if (user.house) {
            return res.redirect("/dashboard");
        }

        const houses = [
            "Gryffindor",
            "Ravenclaw",
            "Hufflepuff",
            "Slytherin"
        ];

        const randomHouse = houses[Math.floor(Math.random() * houses.length)];

        user.house = randomHouse;

        await user.save();

        res.redirect("/dashboard");

    }

    catch (err) {

        console.log(err);
        res.status(500).send("Something went wrong!");

    }

});

module.exports = router;