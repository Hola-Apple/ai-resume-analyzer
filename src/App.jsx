import { useState } from "react";

export default function App() {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeResume = () => {
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const resumeText = resume.toLowerCase();
      const jobText = job.toLowerCase();

      const skills = [
        "react",
        "javascript",
        "node",
        "express",
        "api",
        "sql",
        "mongodb",
        "python",
        "html",
        "css",
        "git",
        "aws",
        "typescript",
      ];

      let matchCount = 0;
      let foundSkills = [];
      let missingSkills = [];

      skills.forEach((skill) => {
        const inResume = resumeText.includes(skill);
        const inJob = jobText.includes(skill);

        if (inResume && inJob) {
          matchCount++;
          foundSkills.push(skill);
        } else if (inJob && !inResume) {
          missingSkills.push(skill);
        }
      });

      const score = Math.round((matchCount / skills.length) * 100);

      const suggestions = [];

      if (missingSkills.length > 0) {
        suggestions.push(
          "Add these missing skills: " + missingSkills.join(", ")
        );
      }

      if (resume.length < 200) {
        suggestions.push("Add more detailed project descriptions.");
      }

      if (!resumeText.includes("project")) {
        suggestions.push("Include at least 2–3 projects with descriptions.");
      }

      if (!resumeText.includes("github")) {
        suggestions.push("Add your GitHub profile link.");
      }

      if (!resumeText.includes("experience")) {
        suggestions.push("Add internship or experience section.");
      }

      setResult({
        score,
        foundSkills,
        missingSkills,
        suggestions,
      });

      setLoading(false);
    }, 800);
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "auto",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <h1>AI Resume Analyzer (Free Version)</h1>

      <textarea
        placeholder="Paste Job Description here..."
        value={job}
        onChange={(e) => setJob(e.target.value)}
        rows={6}
        style={{
          width: "100%",
          marginBottom: 10,
          padding: 10,
        }}
      />

      <textarea
        placeholder="Paste Resume here..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        rows={10}
        style={{
          width: "100%",
          marginBottom: 10,
          padding: 10,
        }}
      />

      <button
        onClick={analyzeResume}
        disabled={loading}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {result && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            border: "1px solid #ddd",
            borderRadius: 8,
          }}
        >
          <h2>Match Score: {result.score}/100</h2>

          <h3>Found Skills:</h3>
          <p>{result.foundSkills.join(", ") || "None"}</p>

          <h3>Missing Skills:</h3>
          <p>{result.missingSkills.join(", ") || "None"}</p>

          <h3>Suggestions:</h3>
          <ul>
            {result.suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}