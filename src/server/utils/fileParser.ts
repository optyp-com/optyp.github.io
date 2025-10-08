/**
 * ✅ PDF Text Extraction using pdfjs-dist
 * 100% ESM-compatible and works in Astro/Vercel server environments.
 */

import * as pdfjsLib from "pdfjs-dist";

export async function extractTextFromPdf(file: File): Promise<string> {
  try {
    if (!file) {
      throw new Error("No file uploaded.");
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // Configure pdfjs for Node.js (disable workers)
    pdfjsLib.GlobalWorkerOptions.workerSrc = false;

    // Load the PDF document
    const loadingTask = pdfjsLib.getDocument({ data: uint8Array });
    const pdfDocument = await loadingTask.promise;

    let extractedText = "";

    // Loop through all pages and extract text
    for (let i = 1; i <= pdfDocument.numPages; i++) {
      const page = await pdfDocument.getPage(i);
      const content = await page.getTextContent();

      const pageText = content.items
        .map((item: any) => ("str" in item ? item.str : ""))
        .join(" ");

      extractedText += pageText + "\n";
    }

    if (!extractedText.trim()) {
      throw new Error("No readable text found in PDF.");
    }

    console.log("✅ PDF text extracted successfully. Length:", extractedText.length);
    return extractedText.trim();
  } catch (err) {
    console.error("❌ PDF text extraction failed:", err);
    throw new Error("Failed to extract text from PDF. Please upload a valid resume file.");
  }
}
