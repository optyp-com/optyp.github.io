import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  try {
    const { resumeText, jobDescription } = JSON.parse(event.body || "{}");
    if (!resumeText)
      return { statusCode: 400, body: JSON.stringify({ error: "Missing resume text" }) };

    // Pick model dynamically
    const modelName =
      resumeText.length > 18000 ? "gemini-1.5-pro" : "gemini-1.5-flash";

    if (resumeText.length > 190000)
      resumeText =
        resumeText.slice(0, 190000) +
        "\n\n[Resume truncated to fit Gemini input limit]";

    console.log(`🚀 Using Gemini model: ${modelName} | length = ${resumeText.length}`);

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
    const output = result.response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ result: output }),
    };
  } catch (err) {
    console.error("❌ analyze-resume error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
