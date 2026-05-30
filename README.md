# AI Resume Analyzer

An AI-powered resume analysis web app built with React and Vite.  
It compares a resume against a job description and gives a match score, missing skills, and improvement suggestions.  
Supports **manual input and PDF resume upload**.

---

## 🚀 Live Demo
https://ai-resume-analyzer-ten-vert.vercel.app/

---

## 📌 Features

- 📄 Paste resume or upload PDF file
- 🤖 Extracts text from PDF resumes automatically
- 📊 AI-style skill matching between resume and job description
- 📉 Generates match score (0–100)
- 🧠 Detects:
  - Found skills
  - Missing skills
  - Resume improvement suggestions
- ⚡ Fast client-side analysis (no backend required)

---

## 🛠️ Tech Stack

- React (useState hooks)
- Vite
- JavaScript (ES6+)
- pdfjs-dist (PDF text extraction)
- HTML/CSS (inline styling)

---

## 📂 Project Structure

ai-resume-analyzer/
│
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ └── App.css
│
├── public/
├── package.json
└── vite.config.js

---

## 📄 How It Works

1. User enters a job description
2. User either:
   - Pastes resume text OR
   - Uploads a PDF resume
3. PDF is parsed into text using `pdfjs-dist`
4. App compares resume vs job skills
5. Generates:
   - Match score
   - Found skills
   - Missing skills
   - Suggestions for improvement

---

## 📦 Installation & Setup

```bash
# Clone repo
git clone git@github.com:Hola-Apple/ai-resume-analyzer.git

# Go into project
cd ai-resume-analyzer

# Install dependencies
npm install

# Start development server
npm run dev