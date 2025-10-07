// ✅ /netlify/functions/analyze-resume.js
// Evaluate a resume (with or without job description) using Gemini

import { GoogleGenerativeAI } from "@google/generative-ai";

console.log(
  "🔍 GEMINI_API_KEY status:",
  process.env.GEMINI_API_KEY ? "FOUND ✅" : "MISSING ❌"
);

export async function handler(event) {
  try {
    const { resumeText, jobDescription } = JSON.parse(event.body || "{}");

    if (!resumeText) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing resume text" }),
      };
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const prompt = `
You are an ATS (Applicant Tracking System) evaluator.
Analyze this resume${jobDescription ? ` for the following job description: ${jobDescription}` : ""}.
Provide:
1. ATS Score (0–100)
2. Missing or weak keywords / skills
3. Top 5 recommendations for improvement
4. Tone or formatting suggestions

Resume:
${resumeText}
`;

    const result = await model.generateContent(prompt);
    const aiText = result.response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ result: aiText }),
    };
  } catch (error) {
    console.error("❌ analyze-resume error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error:
          error?.message ||
          "Internal server error while processing resume analysis",
      }),
    };
  }
}
