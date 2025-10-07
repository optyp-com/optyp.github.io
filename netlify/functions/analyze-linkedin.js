import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

console.log("🔍 GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "FOUND ✅" : "MISSING ❌");

export async function handler(event) {
  try {
    const { profileUrl } = JSON.parse(event.body || "{}");
    if (!profileUrl) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing LinkedIn URL" }) };
    }

    const client = new DiscussServiceClient({
      auth: new GoogleAuth().fromAPIKey(process.env.GEMINI_API_KEY),
    });

    const prompt = `
You are a LinkedIn optimization expert.
Analyze the public profile at: ${profileUrl}
Return:
1. Optimization Score (0–100)
2. Strengths & weaknesses
3. Missing or weak sections (About, Headline, Skills, Recommendations)
4. SEO / keyword improvements
5. 3 quick actionable tips`;

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
    console.error("❌ analyze-linkedin error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
