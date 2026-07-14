const express = require("express");

const router = express.Router();

const User = require("../models/User");
const isLoggedIn = require("../middleware/authMiddleware");

// ==========================
// Sorting Quiz Page
// ==========================

router.get("/sorting", isLoggedIn, (req, res) => {

    res.render("sorting/quiz");

});

// ==========================
// Sorting Result
// ==========================

router.post("/sorting", isLoggedIn, async (req, res) => {

    try {

        const user = await User.findById(req.session.userId);

        let scores = {

            Gryffindor: 0,
            Ravenclaw: 0,
            Hufflepuff: 0,
            Slytherin: 0

        };

        const answers = Object.values(req.body);

        answers.forEach(answer => {

            if(scores[answer] !== undefined){

                scores[answer]++;

            }

        });

        let selectedHouse = "Gryffindor";
        let maxScore = -1;

        for(const house in scores){

            if(scores[house] > maxScore){

                maxScore = scores[house];
                selectedHouse = house;

            }

        }

        user.house = selectedHouse;

        await user.save();

        res.render("sorting/result", {

            house: selectedHouse

        });

    }

    catch(err){

        console.log(err);

        res.send("Server Error");

    }

});

module.exports = router;