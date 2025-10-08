import OpenAI from "openai";

/* ------------------------------
 * 🧩 Type Definitions
 * ------------------------------ */

/** Expected AI analysis output structure */
export interface AIAnalysis {
  resume_score?: number;
  jd_match_score?: number;
  profile_score?: number;
  headline_quality?: number;
  summary_quality?: number;
  keyword_density?: number;
  strengths?: string[];
  weaknesses?: string[];
  recommendations?: string[];
  raw_text?: string;
}

/* ------------------------------
 * ⚙️ Environment Configuration
 * ------------------------------ */

const apiKey = import.meta.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("❌ Missing OPENAI_API_KEY in your .env file.");
  throw new Error("OPENAI_API_KEY is required for OpenAI integration.");
}

/* ------------------------------
 * 🤖 Initialize OpenAI Client
 * ------------------------------ */

export const openai = new OpenAI({
  apiKey,
});

/* ------------------------------
 * 🧠 AI Analyzer Function
 * ------------------------------ */

/**
 * Sends a prompt to OpenAI and returns structured text or JSON.
 * Automatically handles JSON parsing and fallback.
 */
export async function analyzeText(prompt: string): Promise<AIAnalysis | string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // use GPT-4o-mini for speed + low cost
      temperature: 0.3,
      messages: [
        {
          role: "system",
          content:
            "You are a professional AI career coach. Always respond with clear, structured JSON containing resume or LinkedIn profile analysis fields.",
        },
        { role: "user", content: prompt },
      ],
    });

    const content = response.choices?.[0]?.message?.content?.trim();
    if (!content) throw new Error("No response content received from OpenAI.");

    // Attempt to parse structured JSON if returned
    try {
      const parsed = JSON.parse(content) as AIAnalysis;
      return parsed;
    } catch {
      return content; // fallback to plain text
    }
  } catch (err: any) {
    console.error("❌ OpenAI API Error:", err);
    throw new Error("Failed to analyze text with OpenAI API.");
  }
}
