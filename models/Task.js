const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    title: {

        type: String,
        required: true

    },

    subject: {

        type: String,
        required: true

    },

    deadline: {

        type: Date,
        required: true

    },

    difficulty: {

        type: String,

        enum: ["Easy", "Medium", "Hard"],

        default: "Easy"

    },

    completed: {

        type: Boolean,

        default: false

    },

    xpReward: {

        type: Number,

        default: 10

    },

    housePointReward: {

        type: Number,

        default: 5

    },

    owner: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true

    }

}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);