// api/analyze-linkedin.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  const body = event.body ? JSON.parse(event.body) : event;
  const { profileText } = body;
  
  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ Missing GEMINI_API_KEY in environment.");
      return new Response(JSON.stringify({ error: "API key not configured." }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    if (!profileText || profileText.trim().length < 50) {
      return new Response(JSON.stringify({ error: "Please paste your LinkedIn profile text." }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const prompt = `You are a LinkedIn optimization expert. Analyze this profile and provide:
      1. Overall Score (0-100)
      2. Strengths (2-3 points)
      3. Weaknesses (2-3 points)
      4. Missing Elements
      5. Keyword Optimization suggestions
      6. Top 5 Actionable Recommendations
      Profile Content: ${profileText}`;

    const result = await model.generateContent(prompt);
    const aiText = result.response.text();

    return new Response(JSON.stringify({ result: aiText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error("❌ analyze-linkedin error:", err);
    return new Response(JSON.stringify({ error: err.message || "Analysis failed" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}