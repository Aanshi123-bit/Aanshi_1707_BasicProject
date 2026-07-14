const express = require("express");

const router = express.Router();

const User = require("../models/User");
const isLoggedIn = require("../middleware/authMiddleware");

router.get("/leaderboard", isLoggedIn, async (req, res) => {

    try {

        const users = await User.find();

        const houses = {
            Gryffindor: 0,
            Ravenclaw: 0,
            Hufflepuff: 0,
            Slytherin: 0
        };

        users.forEach(user => {

            if (houses[user.house] !== undefined) {

                houses[user.house] += user.housePoints;

            }

        });

        const leaderboard = Object.entries(houses)
            .sort((a, b) => b[1] - a[1]);

        res.render("leaderboard/leaderboard", {

            leaderboard

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).send("Server Error");

    }

});

module.exports = router;