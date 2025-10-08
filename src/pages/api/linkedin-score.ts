import type { APIRoute } from "astro";
import { analyzeText } from "@/server/lib/openai";

/**
 * 🌐 LinkedIn Profile Analyzer API
 * Accepts a LinkedIn profile URL or pasted content and returns:
 * - profile_score (0–100)
 * - strengths
 * - weaknesses
 * - recommendations
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const linkedInUrl = formData.get("linkedInUrl") as string | null;
    const linkedInContent = formData.get("linkedInContent") as string | null;

    if (!linkedInUrl && !linkedInContent) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Please provide a LinkedIn URL or profile text.",
        }),
        { status: 400 }
      );
    }

    // 🧠 Build prompt
    const prompt = linkedInUrl
      ? `
You are an expert LinkedIn coach and profile optimization specialist.
Analyze the provided LinkedIn profile based on its public content.

Profile URL: ${linkedInUrl}

If you cannot fetch the full data, assume typical LinkedIn structure and evaluate:
- Headline quality
- Summary clarity
- Skill and keyword strength
- Professional tone

Respond ONLY in this JSON format:
{
  "profile_score": number (0-100),
  "headline_quality": number (0-100),
  "summary_quality": number (0-100),
  "keyword_density": number (0-100),
  "strengths": [string],
  "weaknesses": [string],
  "recommendations": [string]
}
`
      : `
You are a LinkedIn optimization expert.
Analyze the following LinkedIn profile content provided by the user.

Profile Content:
${linkedInContent}

Respond ONLY in this JSON format:
{
  "profile_score": number (0-100),
  "headline_quality": number (0-100),
  "summary_quality": number (0-100),
  "keyword_density": number (0-100),
  "strengths": [string],
  "weaknesses": [string],
  "recommendations": [string]
}
`;

    // 🔍 Analyze via ChatGPT
    const result = await analyzeText(prompt);
    console.log("✅ LinkedIn analysis completed.");

    return new Response(
      JSON.stringify({
        success: true,
        data: result,
      }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error("❌ LinkedIn Score Error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message || "Failed to analyze LinkedIn profile.",
      }),
      { status: 500 }
    );
  }
};
