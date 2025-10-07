import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  try {
    let { resumeText, jobDescription } = JSON.parse(event.body || "{}");
    if (!resumeText)
      return { statusCode: 400, body: JSON.stringify({ error: "Missing resume text" }) };

    // Pick model dynamically
    const modelName =
      resumeText.length > 18000 ? "gemini-1.5-pro" : "gemini-1.5-flash";

    // Trim to Pro’s 200 k-char limit
    if (resumeText.length > 190000)
      resumeText =
        resumeText.slice(0, 190000) + "\n\n[Resume truncated to fit Gemini input limit]";

    console.log(`🚀 Using model: ${modelName}, chars: ${resumeText.length}`);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: modelName });

    const prompt = `
You are an ATS evaluator.
Analyze this resume${jobDescription ? ` for this job description: ${jobDescription}` : ""}.
Return:
1. ATS Score (0–100)
2. Missing or weak skills
3. Top 5 recommendations
4. Formatting suggestions

Resume:
${resumeText}
`;

    const result = await model.generateContent(prompt);
    const aiText = result.response.text();

    return { statusCode: 200, body: JSON.stringify({ result: aiText }) };
  } catch (err) {
    console.error("❌ analyze-resume error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
