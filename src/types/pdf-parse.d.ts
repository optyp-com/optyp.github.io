/**
 * Type definitions for pdfjs-dist (Node.js + ESM)
 * This helps VS Code recognize pdfjs-dist APIs like getDocument().
 */

declare module "pdfjs-dist" {
  export interface TextItem {
    str: string;
  }

  export interface TextContent {
    items: TextItem[];
  }

  export interface PDFPageProxy {
    getTextContent(): Promise<TextContent>;
  }

  export interface PDFDocumentProxy {
    numPages: number;
    getPage(pageNumber: number): Promise<PDFPageProxy>;
  }

  export const GlobalWorkerOptions: {
    workerSrc: boolean | string;
  };

  export function getDocument(params: { data: Uint8Array }): {
    promise: Promise<PDFDocumentProxy>;
  };
}
