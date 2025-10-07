import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("🔍 GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "FOUND ✅" : "MISSING ❌");

export async function handler(event) {
  try {
    const { resumeText, jobDescription } = JSON.parse(event.body || "{}");
    if (!resumeText) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing resume text" }) };
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You are an ATS evaluator.
Analyze this resume${jobDescription ? ` for this job description: ${jobDescription}` : ""}.
Return:
1. ATS score (0–100)
2. Missing or weak skills
3. Top 5 recommendations
4. Formatting suggestions

Resume:
${resumeText}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return { statusCode: 200, body: JSON.stringify({ result: text }) };
  } catch (err) {
    console.error("❌ analyze-resume error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
