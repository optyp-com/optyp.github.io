// netlify/functions/analyze-linkedin.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event) {
  try {
    const { profileText } = JSON.parse(event.body || "{}");
    
    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ Missing GEMINI_API_KEY in environment.");
      return { 
        statusCode: 500, 
        body: JSON.stringify({ error: "API key not configured. Please contact admin." }) 
      };
    }

    if (!profileText || profileText.trim().length < 50) {
      return { 
        statusCode: 400, 
        body: JSON.stringify({ 
          error: "Please paste your LinkedIn profile text (minimum 50 characters)" 
        }) 
      };
    }

    console.log(`🚀 Analyzing LinkedIn profile | Text length: ${profileText.length}`);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      }
    });

    const prompt = `You are a LinkedIn optimization expert and career coach.

Analyze this LinkedIn profile and provide:

1. **Overall Score (0-100)**: Rate the profile's effectiveness
2. **Strengths**: What's working well (2-3 points)
3. **Weaknesses**: Areas that need improvement (2-3 points)
4. **Missing Elements**: Critical sections that are absent or incomplete
5. **Keyword Optimization**: Industry-specific keywords to add
6. **Top 5 Actionable Recommendations**: Specific, prioritized improvements

Profile Content:
${profileText.slice(0, 15000)}

Format your response clearly with sections and bullet points.`;

    const result = await model.generateContent(prompt);
    const aiText = result.response.text();

    console.log("✅ LinkedIn analysis successful");

    return { 
      statusCode: 200, 
      body: JSON.stringify({ result: aiText }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

  } catch (err) {
    console.error("❌ analyze-linkedin error:", err);
    
    let errorMessage = "An unexpected error occurred";
    
    if (err.message.includes("API key")) {
      errorMessage = "Invalid API key. Please check your Gemini API configuration.";
    } else if (err.message.includes("quota") || err.message.includes("429")) {
      errorMessage = "API rate limit reached. Please try again in a minute.";
    } else if (err.message.includes("timeout")) {
      errorMessage = "Request timeout. Please try with a shorter profile text.";
    } else {
      errorMessage = err.message || "Analysis failed";
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ error: errorMessage }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
}