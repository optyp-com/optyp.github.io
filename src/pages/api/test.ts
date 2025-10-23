import type { APIRoute } from "astro";
import { analyzeText } from "../../server/lib/openai.js";

export const GET: APIRoute = async () => {
  try {
    console.log("🧪 TEST API CALLED");
    
    const result = await analyzeText("Analyze this resume");
    
    console.log("📊 Mock analysis result:", result);
    
    return new Response(
      JSON.stringify({
        success: true,
        message: "API is working!",
        result: result
      }),
      { 
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (err: any) {
    console.error("❌ Error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message
      }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
