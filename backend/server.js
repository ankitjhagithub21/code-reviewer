require("dotenv").config();
const express = require("express");
const cors = require("cors");
const generateContent = require("./services/ai.service");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({
  origin:process.env.ORIGIN
}))

app.get("/", (req, res) => {
  res.json({ message: "Api working" });
});



app.post("/get-review", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required." });
  }
  try {
    const result = await generateContent(prompt);
    res.send(result);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server error." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
