declare module "pdf-parse" {
  interface PDFParseResult {
    text: string;
  }

  const pdfParse: (buffer: Buffer) => Promise<PDFParseResult>;
  export = pdfParse;
}
