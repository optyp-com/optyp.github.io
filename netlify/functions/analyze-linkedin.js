// ✅ /netlify/functions/analyze-linkedin.js
// Purpose: Evaluate a LinkedIn profile for optimization score and recommendations

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  try {
    const { profileUrl } = JSON.parse(event.body || "{}");

    if (!profileUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing LinkedIn profile URL" }),
      };
    }

    // ✅ Initialize Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // ✅ Prompt for LinkedIn analysis
    const prompt = `
You are a LinkedIn optimization expert.
Review and rate the public LinkedIn profile available at:
${profileUrl}

Your output should include:
1. Optimization Score (0–100)
2. Strengths and Weaknesses
3. Missing or underdeveloped sections (About, Headline, Skills, Recommendations)
4. SEO and Keyword Improvement Suggestions
5. Final Summary and Recommended Actions
    `;

    // ✅ Generate AI response
    const result = await model.generateContent(prompt);
    const aiText = result.response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ result: aiText }),
    };
  } catch (error) {
    console.error("❌ Error in analyze-linkedin:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
}
