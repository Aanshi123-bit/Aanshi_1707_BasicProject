const express = require("express");

const router = express.Router();

const Task = require("../models/Task");
const User = require("../models/User");
const isLoggedIn = require("../middleware/authMiddleware");


// ===========================
// VIEW ALL TASKS
// ===========================

router.get("/tasks", isLoggedIn, async (req, res) => {

    try {

        const tasks = await Task.find({

            owner: req.session.userId

        }).sort({ deadline: 1 });

        res.render("task/tasks", {

            tasks

        });

    }

    catch (err) {

        console.log(err);

        res.send("Something went wrong.");

    }

});


// ===========================
// CREATE TASK
// ===========================

router.post("/tasks", isLoggedIn, async (req, res) => {

    try {

        const { title, subject, deadline, difficulty } = req.body;

        const task = new Task({

            title,

            subject,

            deadline,

            difficulty,

            owner: req.session.userId

        });

        await task.save();

        res.redirect("/tasks");

    }

    catch (err) {

        console.log(err);

        res.send("Unable to create task.");

    }

});


// ===========================
// COMPLETE TASK
// ===========================

router.post("/tasks/:id/complete", isLoggedIn, async (req, res) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {

            return res.send("Task not found.");

        }

        if (task.completed) {

            return res.redirect("/tasks");

        }

        task.completed = true;

        await task.save();

        const user = await User.findById(req.session.userId);

        user.xp += task.xpReward;

        user.housePoints += task.housePointReward;

        await user.save();

        res.redirect("/tasks");

    }

    catch (err) {

        console.log(err);

        res.send("Something went wrong.");

    }

});


// ===========================
// DELETE TASK
// ===========================

router.post("/tasks/:id/delete", isLoggedIn, async (req, res) => {

    try {

        await Task.findByIdAndDelete(req.params.id);

        res.redirect("/tasks");

    }

    catch (err) {

        console.log(err);

        res.send("Something went wrong.");

    }

});


module.exports = router;