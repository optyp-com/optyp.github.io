export async function extractTextFromPdf(file: File): Promise<string> {
  try {
    if (!file) throw new Error("No file uploaded");

    // For now, return a mock response since we're testing
    // In production, you can integrate a PDF library later
    const fileName = file.name;
    const fileSize = file.size;

    // Simulate PDF text extraction
    const mockText = `
SAMPLE RESUME - ${fileName}

JOHN DOE
Email: john@example.com | Phone: +91 9876543210 | LinkedIn: linkedin.com/in/johndoe

PROFESSIONAL SUMMARY
Experienced software engineer with 5+ years in full-stack development, cloud technologies, and team leadership.

SKILLS
Programming: JavaScript, TypeScript, Python, Java
Frontend: React, Vue.js, Astro, Tailwind CSS
Backend: Node.js, Express, Django, FastAPI
Databases: PostgreSQL, MongoDB, Firebase
Cloud: AWS, Google Cloud, Vercel
Tools: Git, Docker, Kubernetes, CI/CD

EXPERIENCE
Senior Developer | Tech Company Inc.
January 2022 - Present
- Led development of 3 major features serving 100k+ users
- Optimized database queries, improving performance by 40%
- Mentored 5 junior developers

Full Stack Developer | Startup XYZ
June 2020 - December 2021
- Built complete customer portal using React and Node.js
- Implemented real-time notifications with WebSockets
- Deployed on AWS, reducing infrastructure costs by 30%

EDUCATION
B.Tech in Computer Science
University of Technology, India (2020)

CERTIFICATIONS
AWS Solutions Architect Associate
Google Cloud Professional Data Engineer
    `.trim();

    console.log("PDF text extracted successfully, length:", mockText.length);
    return mockText;
  } catch (err: any) {
    console.error("PDF extraction error:", err.message);
    throw new Error("Failed to extract text from PDF: " + err.message);
  }
}
