import fs from "fs";
import path from "path";
import { createRequire } from "module";

// ✅ allow require inside ESM
const require = createRequire(import.meta.url);
const { extractTextFromPdf } = await import("./src/server/utils/fileParser.ts");

(async () => {
  try {
    // Path to your sample PDF
    const pdfPath = path.resolve("./sample_resume.pdf");

    // Read the file buffer
    const buffer = fs.readFileSync(pdfPath);

    // Extract text from PDF
    const text = await extractTextFromPdf(buffer);

    console.log("✅ Extracted Text:\n");
    console.log(text.substring(0, 500)); // print first 500 chars only
  } catch (err) {
    console.error("❌ Error during PDF extraction:", err.message);
  }
})();
