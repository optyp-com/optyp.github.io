// netlify/functions/analyze-resume.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  try {
    const { resumeText, jobDescription } = JSON.parse(event.body || "{}");

    // Check API key
    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ Missing GEMINI_API_KEY in environment.");
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "API key not configured. Please add GEMINI_API_KEY to Netlify environment variables."
        }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

    // Validate input
    if (!resumeText || resumeText.trim().length < 50) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Resume text is too short or missing. Please upload a valid resume file."
        }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

    // Use gemini-pro (free tier model)
    const modelName = "gemini-pro";
    console.log(`🚀 Using model: ${modelName} | Resume size: ${resumeText.length} chars`);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: modelName,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2000,
      }
    });

    // Limit text to Gemini's input limit
    const text = resumeText.slice(0, 180000);

    const prompt = `You are an expert ATS (Applicant Tracking System) evaluator and career coach.

${jobDescription ? `Job Description:\n${jobDescription.slice(0, 5000)}\n\n` : ''}

Analyze this resume and provide:

1. **ATS Score (0-100)**: Rate how well this resume would perform in ATS systems
2. **Key Strengths**: What makes this resume effective (2-3 points)
3. **Weaknesses**: Areas that need improvement (2-3 points)
4. **Missing Keywords**: Important skills/keywords that should be added${jobDescription ? ' based on the job description' : ''}
5. **Formatting Issues**: Any ATS-unfriendly formatting
6. **Top 5 Recommendations**: Specific, actionable improvements prioritized by impact

Resume Content:
${text}

Provide a clear, structured analysis with specific examples and actionable advice.`;

    const result = await model.generateContent(prompt);
    const output = result.response.text();

    console.log("✅ Resume analysis successful");

    return {
      statusCode: 200,
      body: JSON.stringify({ result: output }),
      headers: { 'Content-Type': 'application/json' }
    };

  } catch (err) {
    console.error("❌ analyze-resume error:", err);

    let errorMessage = "An unexpected error occurred during analysis";
    let statusCode = 500;

    // Handle specific error types
    if (err.message.includes("API key")) {
      errorMessage = "Invalid or missing API key. Please check your Gemini API configuration.";
      statusCode = 500;
    } else if (err.message.includes("quota") || err.message.includes("429")) {
      errorMessage = "API rate limit reached. Free tier allows 15 requests/minute. Please try again in a minute.";
      statusCode = 429;
    } else if (err.message.includes("timeout")) {
      errorMessage = "Request timeout. Try uploading a smaller resume file.";
      statusCode = 504;
    } else if (err.message.includes("SAFETY")) {
      errorMessage = "Content flagged by safety filters. Please check your resume for inappropriate content.";
      statusCode = 400;
    } else if (err.message.includes("Invalid argument")) {
      errorMessage = "Invalid file format or content. Please use .txt, .pdf, or .docx files.";
      statusCode = 400;
    } else {
      errorMessage = err.message || "Resume analysis failed";
    }

    return {
      statusCode,
      body: JSON.stringify({
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? err.stack : undefined
      }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
}