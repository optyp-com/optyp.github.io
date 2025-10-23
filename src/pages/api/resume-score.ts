import type { APIRoute } from "astro";
import { extractTextFromPdf } from "../../server/utils/fileParser.js";
import { analyzeText } from "../../server/lib/openai.js";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const jobDescription = formData.get("jobDescription") as string | null;

    console.log("📥 Received request - File:", file?.name, "JD:", jobDescription ? "Yes" : "No");

    if (!file) {
      console.log("❌ No file provided");
      return new Response(
        JSON.stringify({ success: false, error: "No resume file uploaded." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("📄 Extracting text from PDF...");
    const resumeText = await extractTextFromPdf(file);
    console.log("✅ Resume text extracted, length:", resumeText.length);

    const prompt = jobDescription
      ? `You are an expert career coach and ATS analyst. Analyze the resume against the Job Description.
Resume: ${resumeText}
Job Description: ${jobDescription}
Respond in JSON: { "resume_score": number, "jd_match_score": number, "strengths": [], "weaknesses": [], "recommendations": [] }`
      : `You are a resume expert. Analyze this resume.
Resume: ${resumeText}
Respond in JSON: { "resume_score": number, "strengths": [], "weaknesses": [], "recommendations": [] }`;

    console.log("🤖 Analyzing with AI...");
    const result = await analyzeText(prompt);
    console.log("✅ Analysis completed:", result);

    return new Response(
      JSON.stringify({ success: true, data: result }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("❌ Resume Score Error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message || "Analysis failed." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
