import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

console.log("🔍 GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "FOUND ✅" : "MISSING ❌");

export async function handler(event) {
  try {
    let { resumeText, jobDescription } = JSON.parse(event.body || "{}");

    if (!resumeText) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing resume text" }) };
    }

    // === SMART MODEL SWITCH ===
    let modelName = "models/gemini-1.5-flash";
    if (resumeText.length > 18000) {
      modelName = "models/gemini-1.5-pro";
    }

    console.log(`🚀 Using Gemini model: ${modelName} (text length = ${resumeText.length})`);

    // === HARD LIMIT (Gemini Pro limit ≈ 200k chars) ===
    if (resumeText.length > 190000) {
      resumeText =
        resumeText.slice(0, 190000) + "\n\n[Resume truncated to fit Gemini input limit]";
    }

    const client = new DiscussServiceClient({
      authClient: new GoogleAuth().fromAPIKey(process.env.GEMINI_API_KEY),
    });

    const prompt = `
You are an ATS evaluator.
Analyze this resume${jobDescription ? ` for this job description: ${jobDescription}` : ""}.
Return:
1. ATS Score (0–100)
2. Missing or weak skills
3. Top 5 recommendations
4. Formatting suggestions

Resume:
${resumeText}`;

    const [result] = await client.generateMessage({
      model: modelName,
      prompt: { messages: [{ content: prompt }] },
    });

    const responseText = result?.candidates?.[0]?.content || "No response";

    return {
      statusCode: 200,
      body: JSON.stringify({ result: responseText }),
    };
  } catch (err) {
    console.error("❌ analyze-resume error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
