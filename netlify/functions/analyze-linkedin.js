// ✅ /netlify/functions/analyze-linkedin.js
// Evaluate a LinkedIn profile for optimization using Gemini

import { GoogleGenerativeAI } from "@google/generative-ai";

console.log(
  "🔍 GEMINI_API_KEY status:",
  process.env.GEMINI_API_KEY ? "FOUND ✅" : "MISSING ❌"
);

export async function handler(event) {
  try {
    const { profileUrl } = JSON.parse(event.body || "{}");

    if (!profileUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing LinkedIn profile URL" }),
      };
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
You are a LinkedIn optimization specialist.
Analyze the public LinkedIn profile at ${profileUrl}.
Provide:
1. Optimization Score (0–100)
2. Strengths & weaknesses
3. Missing or underdeveloped sections (About, Headline, Skills, Recommendations)
4. SEO / keyword tips
5. 3 quick actionable improvements
`;

    const result = await model.generateContent(prompt);
    const aiText = result.response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ result: aiText }),
    };
  } catch (error) {
    console.error("❌ analyze-linkedin error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error:
          error?.message ||
          "Internal server error while processing LinkedIn analysis",
      }),
    };
  }
}
