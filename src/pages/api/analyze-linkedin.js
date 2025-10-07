// src/pages/api/analyze-linkedin.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST({ request }) {
  try {
    const { profileUrl } = await request.json();
    const geminiApiKey = import.meta.env.GEMINI_API_KEY;
    const scraperApiKey = import.meta.env.SCRAPER_API_KEY;

    if (!geminiApiKey || !scraperApiKey) {
      console.error("❌ Missing API keys in environment.");
      return new Response(JSON.stringify({ error: "API keys not configured." }), { status: 500 });
    }

    if (!profileUrl || !profileUrl.includes("linkedin.com/in/")) {
      return new Response(JSON.stringify({ error: "Please enter a valid LinkedIn profile URL." }), { status: 400 });
    }

    // --- Use ScraperAPI to Get Profile Text ---
    const scrapeUrl = `http://api.scraperapi.com?api_key=${scraperApiKey}&url=${encodeURIComponent(profileUrl)}`;
    
    // We need to fetch the HTML content first, as ScraperAPI returns the raw page
    const scraperResponse = await fetch(scrapeUrl);

    if (!scraperResponse.ok) {
        throw new Error("Failed to scrape the LinkedIn profile. The profile might be private or the URL is incorrect.");
    }

    // Since we get HTML back, we'll just use the text content. 
    // A more advanced version might parse the HTML, but this is a great start.
    const profileHtml = await scraperResponse.text();
    
    // A simple way to get text from HTML is to strip tags
    const profileText = profileHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

    if (profileText.length < 200) { // Increased minimum length for better analysis
        throw new Error("Could not extract enough text from the profile. It may be private or incomplete.");
    }

    // --- Analyze the Scraped Text with Gemini AI ---
    const genAI = new GoogleGenerativeAI(geminiApiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const prompt = `You are a LinkedIn optimization expert. Analyze the following text extracted from a LinkedIn profile and provide:
      1. Overall Score (0-100)
      2. Strengths (2-3 points)
      3. Weaknesses (2-3 points)
      4. Missing Elements
      5. Keyword Optimization suggestions
      6. Top 5 Actionable Recommendations
      Profile Content: ${profileText}`;

    const result = await model.generateContent(prompt);
    const aiText = result.response.text();

    return new Response(JSON.stringify({ result: aiText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error("❌ analyze-linkedin error:", err);
    return new Response(JSON.stringify({ error: err.message || "Analysis failed" }), {
      status: 500
    });
  }
}