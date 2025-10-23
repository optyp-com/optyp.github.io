import type { APIRoute } from "astro";
import { analyzeText } from "../../server/lib/openai.js";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const linkedInUrl = formData.get("linkedInUrl") as string | null;
    const linkedInContent = formData.get("linkedInContent") as string | null;

    if (!linkedInUrl && !linkedInContent) {
      return new Response(
        JSON.stringify({ success: false, error: "Please provide LinkedIn URL or content." }),
        { status: 400 }
      );
    }

    const prompt = linkedInUrl
      ? `You are a LinkedIn expert. Analyze this profile URL: ${linkedInUrl}
Respond in JSON: { "profile_score": number, "headline_quality": number, "summary_quality": number, "keyword_density": number, "strengths": [], "weaknesses": [], "recommendations": [] }`
      : `You are a LinkedIn expert. Analyze this profile.
Profile: ${linkedInContent}
Respond in JSON: { "profile_score": number, "headline_quality": number, "summary_quality": number, "keyword_density": number, "strengths": [], "weaknesses": [], "recommendations": [] }`;

    const result = await analyzeText(prompt);
    console.log("LinkedIn analysis completed.");

    return new Response(JSON.stringify({ success: true, data: result }), { status: 200 });
  } catch (err: any) {
    console.error("LinkedIn Score Error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message || "Analysis failed." }),
      { status: 500 }
    );
  }
};
