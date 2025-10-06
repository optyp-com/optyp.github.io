// ✅ /netlify/functions/analyze-linkedin.js
// Function: Evaluates LinkedIn profile optimization via Google Gemini API

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  try {
    const { profileUrl } = JSON.parse(event.body || "{}");

    if (!profileUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing LinkedIn profile URL." }),
      };
    }

    // ✅ Initialize Gemini with your API key
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // ✅ AI Prompt
    const prompt = `
You are a LinkedIn optimization and personal branding expert.

Evaluate the LinkedIn profile available at:
${profileUrl}

Your task:
- Assume you can view the public profile sections (headline, summary, experience, skills, education).
- Estimate how well optimized it is for recruiters and keyword visibility.

Return your analysis in the following structure:
1. Optimization Score (0–100)
2. Missing or Weak Sections
3. Keyword/SEO Gaps
4. Actionable Recommendations
5. Suggested Headline Improvements (if relevant)
    `;

    // ✅ Request Gemini response
    const result = await model.generateContent(prompt);
    const aiText = result.response.text();

    // ✅ Return to client
    return {
      statusCode: 200,
      body: JSON.stringify({ result: aiText }),
    };
  } catch (error) {
    console.error("Error in analyze-linkedin:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
}
