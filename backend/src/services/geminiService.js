const Groq = require("groq-sdk");
require('dotenv').config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function analyzeContract(contractCode) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a professional Blockchain Security Auditor. 
          Provide a two-part response.
          PART 1: Vulnerability Report. List bugs with Severity and Explanation.
          PART 2: The complete fixed contract.
          
          CRITICAL: You MUST separate the two parts with exactly this string: ---SEPARATOR---`
        },
        {
          role: "user",
          content: `Analyze this contract:\n\n${contractCode}`
        }
      ],
      model: "llama-3.3-70b-versatile", 
      temperature: 0.1,
    });

    return chatCompletion.choices[0].message.content;
  } catch (error) {
    return "Audit Failed: Server Timeout. Please check connection.";
  }
}

module.exports = { analyzeContract };