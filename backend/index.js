const express = require('express');
const cors = require('cors');
const { analyzeContract } = require('./src/services/geminiService');

const app = express();
app.use(cors()); // Allows your Next.js app to talk to this server
app.use(express.json());

app.post('/api/audit', async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) return res.status(400).json({ error: "No code provided" });

    const report = await analyzeContract(code);
    res.json({ report });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));