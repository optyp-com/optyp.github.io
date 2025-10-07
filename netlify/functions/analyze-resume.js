import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

console.log("🔍 GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "FOUND ✅" : "MISSING ❌");

export async function handler(event) {
  try {
    const { resumeText, jobDescription } = JSON.parse(event.body || "{}");
    if (!resumeText) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing resume text" }) };
    }

    const client = new DiscussServiceClient({
      auth: new GoogleAuth().fromAPIKey(process.env.GEMINI_API_KEY),
    });

    const prompt = `
You are an expert ATS evaluator.
Analyze this resume${jobDescription ? ` for this job description: ${jobDescription}` : ""}.
Return:
1. ATS Score (0–100)
2. Missing keywords / skills
3. Top 5 recommendations
4. Formatting / readability suggestions

Resume:
${resumeText}`;

    const [response] = await client.generateMessage({
      model: "models/gemini-1.5-flash",
      prompt: {
        messages: [
          {
            content: prompt,
          },
        ],
      },
    });

    const resultText = response.candidates?.[0]?.content || "";

    return {
      statusCode: 200,
      body: JSON.stringify({ result: resultText }),
    };
  } catch (err) {
    console.error("❌ analyze-resume error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
