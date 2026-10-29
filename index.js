import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3333;
const DB_URI = process.env.MONGO_URI || "uri";

mongoose.connect(DB_URI).
    then(() => {
        console.log("Successfully connected to MongoDB.")
    }).catch((err) => {
        console.error("Failes connectiong to MongoDB.")
    });


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is working")
});

app.listen(port, (req, res) => {
    console.log(`Server is running on http://localhost:${port}`);
})