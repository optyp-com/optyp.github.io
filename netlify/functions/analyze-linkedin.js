import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  try {
    const { profileUrl } = JSON.parse(event.body || "{}");
    if (!profileUrl)
      return { statusCode: 400, body: JSON.stringify({ error: "Missing LinkedIn URL" }) };

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You are a LinkedIn optimization expert.
Analyze the public profile at: ${profileUrl}
Return:
1. Optimization Score (0–100)
2. Strengths and weaknesses
3. Missing or weak sections
4. SEO / keyword advice
5. Quick actionable tips
`;

    const result = await model.generateContent(prompt);
    const aiText = result.response.text();

    return { statusCode: 200, body: JSON.stringify({ result: aiText }) };
  } catch (err) {
    console.error("❌ analyze-linkedin error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
