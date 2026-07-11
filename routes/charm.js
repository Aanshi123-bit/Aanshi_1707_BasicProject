const express = require("express");

const router = express.Router();

const User = require("../models/User");
const isLoggedIn = require("../middleware/authMiddleware");

router.get("/charms", isLoggedIn, async (req, res) => {

    try {

        const user = await User.findById(req.session.userId);

        if (!user) {
            return res.redirect("/login");
        }

        res.render("charm/charms", {
            user
        });

    }

    catch (err) {

        console.log(err);

        res.status(500).send("Something went wrong!");

    }

});

module.exports = router;