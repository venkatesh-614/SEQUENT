import React from "react";
import { useState } from "react";
import "./EachLev.css";

export default function Level6() {
  const questions = [
    {
      question: "Which function returns the current date and time in SQL?",
      options: ["NOW()", "CURRENT_DATE()", "GETDATE()", "TODAY()"],
      answer: "NOW()",
    },
    {
      question:
        "Which function is used to round numeric values to the nearest integer?",
      options: ["ROUND()", "CEIL()", "FLOOR()", "TRUNC()"],
      answer: "ROUND()",
    },
    {
      question: "Which function returns the number of characters in a string?",
      options: ["LEN()", "LENGTH()", "CHAR_COUNT()", "SIZE()"],
      answer: "LENGTH()",
    },
    {
      question: "Which type of index speeds up search queries on a table?",
      options: ["UNIQUE INDEX", "PRIMARY INDEX", "NORMAL INDEX", "INDEX"],
      answer: "INDEX",
    },
    {
      question: "Which type of index does not allow duplicate values?",
      options: [
        "UNIQUE INDEX",
        "PRIMARY INDEX",
        "NORMAL INDEX",
        "FOREIGN INDEX",
      ],
      answer: "UNIQUE INDEX",
    },
    {
      question:
        "Which SQL clause is used to filter records in an aggregate query?",
      options: ["WHERE", "HAVING", "FILTER BY", "GROUP FILTER"],
      answer: "HAVING",
    },
    {
      question:
        "Which operator allows pattern matching using single-character placeholders?",
      options: ["LIKE", "ILIKE", "REGEXP", "MATCH"],
      answer: "LIKE",
    },
    {
      question: "Which function returns the smallest value in a column?",
      options: ["MIN()", "LEAST()", "SMALL()", "LOW()"],
      answer: "MIN()",
    },
    {
      question: "Which function concatenates multiple strings into one?",
      options: ["CONCAT()", "MERGE()", "COMBINE()", "APPEND()"],
      answer: "CONCAT()",
    },
    {
      question:
        "Which clause is used to prevent returning duplicate rows in a query?",
      options: ["DISTINCT", "UNIQUE", "GROUP BY", "FILTER DISTINCT"],
      answer: "DISTINCT",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setCompleted(true);
      }
    }, 500);
  };

  const handleNextLevel = () => {
    window.location.href = "/Level6";
  };

  const handleRetry = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setCompleted(false);
  };

  if (completed) {
    const percentage = (score / questions.length) * 100;
    const passed = percentage >= 70;

    return (
      <div className="level-container">
        <div className="completion-card">
          <h1 className="level-title">Level 6 Completed!</h1>
          <div className="score-display">
            <p className="score-text">Your Score</p>
            <p className="score-number">
              {score} / {questions.length}
            </p>
            <p className="score-percentage">{percentage.toFixed(0)}%</p>
          </div>

          {passed ? (
            <div className="success-message">
              <p>🎉 Great job! You passed!</p>
            </div>
          ) : (
            <div className="fail-message">
              <p>Keep practicing! You need 70% to advance.</p>
            </div>
          )}

          <div className="completion-buttons">
            <button className="retry-button" onClick={handleRetry}>
              Try Again
            </button>
            {passed && (
              <button className="next-button" onClick={handleNextLevel}>
                Next Level →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="level-container">
      <div className="level-header">
        <h1 className="level-title">Level 6: Functions & Indexes</h1>
        <p>
          Question {current + 1} of {questions.length}
        </p>
      </div>
      <div className="question-item">
        <div className="question-text">
          <span className="question-number">Q{current + 1}:</span>
          <span>{q.question}</span>
        </div>
        <ul className="options-list">
          {q.options.map((opt, i) => (
            <li
              key={i}
              className={`option-item ${
                selected === opt
                  ? opt === q.answer
                    ? "selected"
                    : "wrong"
                  : ""
              }`}
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      </div>
      <p>Score: {score}</p>
    </div>
  );
}
