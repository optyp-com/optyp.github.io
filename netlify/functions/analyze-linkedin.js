import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

console.log("🔍 GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "FOUND ✅" : "MISSING ❌");

export async function handler(event) {
  try {
    const { profileUrl } = JSON.parse(event.body || "{}");
    if (!profileUrl)
      return { statusCode: 400, body: JSON.stringify({ error: "Missing LinkedIn URL" }) };

    const client = new DiscussServiceClient({
      authClient: new GoogleAuth().fromAPIKey(process.env.GEMINI_API_KEY),
    });

    const prompt = `
You are a LinkedIn optimization expert.
Analyze the public profile at: ${profileUrl}
Return:
1. Optimization Score (0–100)
2. Strengths and weaknesses
3. Missing or weak sections
4. SEO / keyword advice
5. Quick actionable tips`;

    const [result] = await client.generateMessage({
      model: "models/gemini-1.5-flash",
      prompt: { messages: [{ content: prompt }] },
    });

    const responseText = result?.candidates?.[0]?.content || "No response";

    return {
      statusCode: 200,
      body: JSON.stringify({ result: responseText }),
    };
  } catch (err) {
    console.error("❌ analyze-linkedin error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
