// ✅ /netlify/functions/analyze-resume.js
// Function: Analyzes resume (with or without job description) using Google Gemini API

import { GoogleGenerativeAI } from "@google/generative-ai";

// Netlify Function Entry Point
export async function handler(event) {
  try {
    const { resumeText, jobDescription } = JSON.parse(event.body || "{}");

    if (!resumeText) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing resume text." }),
      };
    }

    // ✅ Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // ✅ Prompt for Gemini
    const prompt = `
You are an ATS (Applicant Tracking System) expert and professional career analyst.

Evaluate the following resume ${
      jobDescription
        ? "based on this job description for relevance and match quality."
        : "in general for its ATS compatibility and structure."
    }

Provide your response in the following format:
1. ATS Score: (number between 0–100)
2. Key Missing Sections
3. Weak Keywords (if any)
4. Suggestions / Recommendations for improvement

---
${jobDescription ? `Job Description:\n${jobDescription}` : ""}
---
Resume Content:
${resumeText}
    `;

    // ✅ Generate content using Gemini
    const result = await model.generateContent(prompt);

    // ✅ Extract text output
    const aiText = result.response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ result: aiText }),
    };
  } catch (error) {
    console.error("Error in analyze-resume:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
}
