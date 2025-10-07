// api/analyze-resume.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  // Vercel uses req, res objects. We will simulate the event body for consistency.
  const body = event.body ? JSON.parse(event.body) : event;
  const { resumeText, jobDescription } = body;

  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ Missing GEMINI_API_KEY in environment.");
      return new Response(JSON.stringify({ error: "API key not configured." }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    if (!resumeText || resumeText.trim().length < 50) {
      return new Response(JSON.stringify({ error: "Resume text is too short or missing." }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const modelName = "gemini-1.5-flash-latest";
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: modelName });

    const prompt = `You are an expert ATS (Applicant Tracking System) evaluator and career coach.
      Analyze this resume based on the following job description if provided:
      Job Description: ${jobDescription || "Not provided"}
      Resume Content: ${resumeText}
      Provide:
      1. ATS Score (0-100)
      2. Key Strengths (2-3 points)
      3. Weaknesses (2-3 points)
      4. Missing Keywords
      5. Formatting Issues
      6. Top 5 Actionable Recommendations`;

    const result = await model.generateContent(prompt);
    const output = result.response.text();

    return new Response(JSON.stringify({ result: output }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error("❌ analyze-resume error:", err);
    return new Response(JSON.stringify({ error: err.message || "Resume analysis failed" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}