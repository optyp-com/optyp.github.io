// netlify/functions/analyze-resume.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  try {
    const { resumeText, jobDescription } = JSON.parse(event.body || "{}");

    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ Missing GEMINI_API_KEY in environment.");
      return { statusCode: 500, body: JSON.stringify({ error: "API key missing" }) };
    }

    if (!resumeText) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing resume text" }) };
    }

    // Select model (auto switch)
    const modelName = resumeText.length > 18000 ? "gemini-1.5-pro" : "gemini-1.5-flash";
    console.log(`🚀 Using model: ${modelName} | Resume size: ${resumeText.length}`);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: modelName });

    // Limit text to Gemini's max (200k chars)
    const text = resumeText.slice(0, 190000);
    const prompt = `
You are an ATS evaluator. Analyze this resume${jobDescription ? ` for this job description: ${jobDescription}` : ""}.
Return:
1. ATS Score (0–100)
2. Missing or weak skills
3. Top 5 recommendations
4. Formatting suggestions

Resume:
${text}`;

    const result = await model.generateContent(prompt);
    const output = result.response.text();

    return { statusCode: 200, body: JSON.stringify({ result: output }) };
  } catch (err) {
    console.error("❌ analyze-resume error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
