// ✅ /netlify/functions/analyze-resume.js
// Purpose: Evaluate resume content with or without job description using Gemini AI

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  try {
    const { resumeText, jobDescription } = JSON.parse(event.body || "{}");

    if (!resumeText) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing resume text" }),
      };
    }

    // ✅ Initialize Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // ✅ Prompt for analysis
    const prompt = `
You are an advanced ATS (Applicant Tracking System) evaluator.
Analyze the following resume${jobDescription ? ` for this job description: ${jobDescription}` : ""}.
Provide:
1. ATS Score (0–100)
2. Missing keywords or weak areas
3. Key recommendations to improve shortlisting chances
4. Professional tone improvements if needed

Resume content:
${resumeText}
    `;

    // ✅ Generate AI response
    const result = await model.generateContent(prompt);
    const aiText = result.response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ result: aiText }),
    };
  } catch (error) {
    console.error("❌ Error in analyze-resume:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
}
