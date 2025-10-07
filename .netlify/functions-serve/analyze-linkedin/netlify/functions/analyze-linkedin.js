var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/analyze-linkedin.js
var analyze_linkedin_exports = {};
__export(analyze_linkedin_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(analyze_linkedin_exports);
var import_generative_ai = require("@google/generative-ai");
console.log(
  "\u{1F50D} GEMINI_API_KEY status:",
  process.env.GEMINI_API_KEY ? "FOUND \u2705" : "MISSING \u274C"
);
async function handler(event) {
  try {
    const { profileUrl } = JSON.parse(event.body || "{}");
    if (!profileUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing LinkedIn profile URL" })
      };
    }
    const genAI = new import_generative_ai.GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
You are a LinkedIn optimization specialist.
Analyze the public LinkedIn profile at ${profileUrl}.
Provide:
1. Optimization Score (0\u2013100)
2. Strengths & weaknesses
3. Missing or underdeveloped sections (About, Headline, Skills, Recommendations)
4. SEO / keyword tips
5. 3 quick actionable improvements
`;
    const result = await model.generateContent(prompt);
    const aiText = result.response.text();
    return {
      statusCode: 200,
      body: JSON.stringify({ result: aiText })
    };
  } catch (error) {
    console.error("\u274C analyze-linkedin error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error?.message || "Internal server error while processing LinkedIn analysis"
      })
    };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=analyze-linkedin.js.map
