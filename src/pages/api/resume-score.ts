import type { APIRoute } from "astro";
import { extractTextFromPdf } from "@/server/utils/fileParser";
import { analyzeText } from "@/server/lib/openai";

/**
 * 📄 Handles resume upload and analysis.
 * Works in two conditions:
 * 1️⃣ Resume only — gives resume score & feedback.
 * 2️⃣ Resume + Job Description — gives JD match score & detailed suggestions.
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File | null;
    const jobDescription = formData.get("jobDescription") as string | null;

    if (!file) {
      return new Response(
        JSON.stringify({ success: false, error: "No resume file uploaded." }),
        { status: 400 }
      );
    }

    // ✅ Extract text from PDF
    const resumeText = await extractTextFromPdf(file);
    console.log("✅ Resume text extracted, length:", resumeText.length);

    // 🧠 Build prompt based on whether JD is provided
    const prompt = jobDescription
      ? `
You are an expert career coach and ATS (Applicant Tracking System) analyst.
Analyze the following resume *against the given Job Description* and respond in JSON format.

Resume:
${resumeText}

Job Description:
${jobDescription}

Respond ONLY in this JSON format:
{
  "resume_score": number (0-100),
  "jd_match_score": number (0-100),
  "strengths": [string],
  "weaknesses": [string],
  "recommendations": [string]
}
`
      : `
You are a professional career coach and resume expert.
Analyze the following resume for structure, clarity, keyword optimization, and professionalism.
Respond ONLY in this JSON format:

{
  "resume_score": number (0-100),
  "strengths": [string],
  "weaknesses": [string],
  "recommendations": [string]
}

Resume:
${resumeText}
`;

    // 🔍 Send text to OpenAI for analysis
    const result = await analyzeText(prompt);
    console.log("✅ OpenAI analysis completed.");

    return new Response(
      JSON.stringify({
        success: true,
        data: result,
      }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error("❌ Resume Score Error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message || "Something went wrong while analyzing the resume.",
      }),
      { status: 500 }
    );
  }
};
