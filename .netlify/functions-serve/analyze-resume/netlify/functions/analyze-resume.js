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

// netlify/functions/analyze-resume.js
var analyze_resume_exports = {};
__export(analyze_resume_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(analyze_resume_exports);
var import_generative_ai = require("@google/generative-ai");
console.log(
  "\u{1F50D} GEMINI_API_KEY status:",
  process.env.GEMINI_API_KEY ? "FOUND \u2705" : "MISSING \u274C"
);
async function handler(event) {
  try {
    const { resumeText, jobDescription } = JSON.parse(event.body || "{}");
    if (!resumeText) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing resume text" })
      };
    }
    const genAI = new import_generative_ai.GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
You are an ATS (Applicant Tracking System) evaluator.
Analyze this resume${jobDescription ? ` for the following job description: ${jobDescription}` : ""}.
Provide:
1. ATS Score (0\u2013100)
2. Missing or weak keywords / skills
3. Top 5 recommendations for improvement
4. Tone or formatting suggestions

Resume:
${resumeText}
`;
    const result = await model.generateContent(prompt);
    const aiText = result.response.text();
    return {
      statusCode: 200,
      body: JSON.stringify({ result: aiText })
    };
  } catch (error) {
    console.error("\u274C analyze-resume error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error?.message || "Internal server error while processing resume analysis"
      })
    };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=analyze-resume.js.map
