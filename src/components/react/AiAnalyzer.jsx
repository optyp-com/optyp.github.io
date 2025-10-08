import { useState } from "preact/hooks";

/**
 * ✅ Professional AI Analyzer (Resume + LinkedIn)
 * - Upload resume (PDF)
 * - Optional JD text
 * - LinkedIn profile scoring
 * - Beautiful visual results
 */
export default function AiAnalyzer() {
  const [mode, setMode] = useState("resume");
  const [resumeFile, setResumeFile] = useState(null);
  const [jdText, setJdText] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // ✅ Resume API handler
  const handleResumeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    if (!resumeFile) {
      setError("Please upload a resume PDF.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);
      if (jdText.trim()) formData.append("jdText", jdText);

      const res = await fetch("/api/resume-score", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to analyze resume.");

      setResult(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ LinkedIn API handler
  const handleLinkedInSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/linkedin-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileUrl }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to analyze profile.");

      setResult(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Helper: Render progress bars
  const ProgressBar = ({ label, value }) => (
    <div class="mb-4">
      <div class="flex justify-between text-sm mb-1">
        <span class="font-medium text-gray-300">{label}</span>
        <span class="font-semibold text-teal-400">{value || 0}%</span>
      </div>
      <div class="w-full bg-gray-700 rounded-full h-3">
        <div
          class="bg-emerald-500 h-3 rounded-full transition-all"
          style={{ width: `${Math.min(value, 100)}%` }}
        ></div>
      </div>
    </div>
  );

  // ✅ Helper: Render bullet list
  const ListSection = ({ title, items, color }) => (
    <div class="mt-4">
      <h4 class={`text-lg font-semibold mb-2 ${color}`}>{title}</h4>
      <ul class="list-disc pl-5 text-gray-300 space-y-1">
        {items && items.length > 0 ? (
          items.map((i) => <li>{i}</li>)
        ) : (
          <li class="italic text-gray-500">No data available</li>
        )}
      </ul>
    </div>
  );

  return (
    <div class="space-y-10 text-gray-100">
      <h2 class="text-3xl font-bold text-center text-teal-400 mb-6">
        🤖 AI Resume & LinkedIn Analyzer
      </h2>

      {/* Toggle buttons */}
      <div class="flex justify-center gap-4">
        <button
          class={`px-4 py-2 rounded-lg ${
            mode === "resume"
              ? "bg-emerald-500 text-white"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setMode("resume")}
        >
          Resume Score
        </button>
        <button
          class={`px-4 py-2 rounded-lg ${
            mode === "linkedin"
              ? "bg-emerald-500 text-white"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setMode("linkedin")}
        >
          LinkedIn Score
        </button>
      </div>

      {/* =============================== */}
      {/* Resume Analyzer */}
      {/* =============================== */}
      {mode === "resume" && (
        <form
          onSubmit={handleResumeSubmit}
          class="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 space-y-4"
        >
          <label class="block text-sm font-medium">
            Upload Resume (PDF)
          </label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setResumeFile(e.target.files[0])}
            class="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          />

          <label class="block text-sm font-medium mt-3">
            (Optional) Job Description
          </label>
          <textarea
            rows="4"
            placeholder="Paste job description here..."
            value={jdText}
            onChange={(e) => setJdText(e.target.value)}
            class="w-full p-3 bg-gray-800 border border-gray-700 rounded"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            class="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium mt-4"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </form>
      )}

      {/* =============================== */}
      {/* LinkedIn Analyzer */}
      {/* =============================== */}
      {mode === "linkedin" && (
        <form
          onSubmit={handleLinkedInSubmit}
          class="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 space-y-4"
        >
          <label class="block text-sm font-medium">
            LinkedIn Profile URL
          </label>
          <input
            type="url"
            placeholder="https://www.linkedin.com/in/username"
            value={profileUrl}
            onChange={(e) => setProfileUrl(e.target.value)}
            class="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            class="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium mt-4"
          >
            {loading ? "Analyzing..." : "Analyze Profile"}
          </button>
        </form>
      )}

      {/* =============================== */}
      {/* Error Display */}
      {/* =============================== */}
      {error && (
        <div class="max-w-lg mx-auto p-4 bg-red-800 text-red-100 rounded text-center">
          ⚠️ {error}
        </div>
      )}

      {/* =============================== */}
      {/* AI Result Display */}
      {/* =============================== */}
      {result && (
        <div class="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg">
          <h3 class="text-2xl font-bold mb-6 text-teal-300 text-center">
            {result.mode === "Resume + JD Match"
              ? "📄 Resume & Job Match Analysis"
              : result.analysis?.profile_score
              ? "🔗 LinkedIn Profile Analysis"
              : "📄 Resume Analysis"}
          </h3>

          {/* Progress Bars */}
          {(() => {
            try {
              const parsed =
                typeof result.analysis === "string"
                  ? JSON.parse(result.analysis)
                  : result.analysis;

              return (
                <>
                  {parsed.resume_score && (
                    <ProgressBar
                      label="Resume Score"
                      value={parsed.resume_score}
                    />
                  )}
                  {parsed.jd_match_score && (
                    <ProgressBar
                      label="JD Match Score"
                      value={parsed.jd_match_score}
                    />
                  )}
                  {parsed.profile_score && (
                    <ProgressBar
                      label="LinkedIn Profile Score"
                      value={parsed.profile_score}
                    />
                  )}
                  {parsed.headline_quality && (
                    <ProgressBar
                      label="Headline Quality"
                      value={parsed.headline_quality}
                    />
                  )}
                  {parsed.summary_quality && (
                    <ProgressBar
                      label="Summary Quality"
                      value={parsed.summary_quality}
                    />
                  )}
                  {parsed.keyword_density && (
                    <ProgressBar
                      label="Keyword Optimization"
                      value={parsed.keyword_density}
                    />
                  )}

                  {/* Lists */}
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <ListSection
                      title="💪 Strengths"
                      items={parsed.strengths}
                      color="text-emerald-400"
                    />
                    <ListSection
                      title="🚧 Improvements"
                      items={parsed.weaknesses || parsed.recommendations}
                      color="text-yellow-400"
                    />
                  </div>
                </>
              );
            } catch (err) {
              console.error("Parse error:", err);
              return (
                <pre class="text-sm text-gray-300 whitespace-pre-wrap">
                  {JSON.stringify(result.analysis, null, 2)}
                </pre>
              );
            }
          })()}
        </div>
      )}
    </div>
  );
}
