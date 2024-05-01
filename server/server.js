const express = require('express');
const cors = require('cors'); // Import the cors package
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());
app.use(cors()); // Enable CORS middleware

app.get("/", (req, res) => {
    res.send("Hello, this is your Express server!");
});

app.post("/chat", async (req, res) => {
    const { text } = req.body;
    try {
        // Make a request to the OpenAI API with the provided text
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: text }],
        });
        // Send the completion data back to the client
        res.json(response.choices[0].message.content);
        console.log(response.choices[0].message.content);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "An error occurred while processing your request." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
