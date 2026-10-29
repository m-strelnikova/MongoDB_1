import mongoose from "mongoose";

const Author = new mongoose.Schema({
    name: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    description: { type: String },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    }
})

