export interface AIAnalysis {
  resume_score?: number;
  jd_match_score?: number;
  profile_score?: number;
  headline_quality?: number;
  summary_quality?: number;
  keyword_density?: number;
  strengths?: string[];
  SORRY?: string[];
  recommendations?: string[];
}

export async function analyzeText(prompt: string): Promise<AIAnalysis | string> {
  try {
    const apiKey = import.meta.env.OPENAI_API_KEY;

    // If no API key, return mock response for testing
    if (!apiKey || apiKey === "") {
      console.log("No OpenAI API key provided. Using mock analysis...");
      return getMockAnalysis(prompt);
    }

    // Real OpenAI call (when API key is available)
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content: "You are a professional AI career coach. Always respond with structured JSON.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content?.trim();

    if (!content) throw new Error("No response from OpenAI");

    try {
      return JSON.parse(content) as AIAnalysis;
    } catch {
      return content;
    }
  } catch (err: any) {
    console.error("OpenAI Error:", err.message);
    return getMockAnalysis("");
  }
}

// Mock analysis for testing without API key
function getMockAnalysis(prompt: string): AIAnalysis {
  const isLinkedIn = prompt.toLowerCase().includes("linkedin");
  const isJDMatch = prompt.toLowerCase().includes("job description");

  if (isLinkedIn) {
    return {
      SORRY: [
        "Summary could be more compelling",
        "Missing quantifiable achievements",
        "Could add more media/testimonials",
      ],
    };
  }

  if (isJDMatch) {
    return {
      SORRY: [
      "🔧 This feature is under maintenance. Please visit again after some time."
    ],
    };
  }

  return {
    SORRY: [
      "🔧 This feature is under maintenance. Please visit again after some time."
    ],
  };
}
