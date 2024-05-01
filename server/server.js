const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());
app.use(cors());

app.post("/generate-cover-letter", async (req, res) => {
    const { resume, jobDescription } = req.body;
    try {
        // Make a request to the OpenAI API with the combined prompt
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              {
                "role": "system",
                "content": `Write a cover letter based on the following:\n\nResume:\n${resume}\n\nJob Description:\n${jobDescription}\n\n.`
              },
            ],
            temperature: 0.5,
            max_tokens: 1500,
            top_p: 1,
          });

        // Extract the generated cover letter from the completion object
        const coverLetter = response.choices[0].message.content.trim();

        // Log the generated cover letter
        console.log("Generated Cover Letter:", coverLetter);

        // Send the cover letter back to the client
        res.json({ coverLetter });
    } catch (error) {
        console.error("Error generating cover letter:", error);
        res.status(500).json({ error: "An error occurred while generating the cover letter." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
