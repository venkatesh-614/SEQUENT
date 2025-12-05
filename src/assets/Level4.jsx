import React from "react";
import { useState } from "react";
import "./EachLev.css";

export default function Level4() {
  const questions = [
    {
      question:
        "Which join returns all records when there is a match in either left or right table?",
      options: ["INNER JOIN", "FULL OUTER JOIN", "LEFT JOIN", "CROSS JOIN"],
      answer: "FULL OUTER JOIN",
    },
    {
      question:
        "Which SQL keyword allows comparing a value with multiple values in a subquery?",
      options: ["BETWEEN", "ANY", "IN", "ALL"],
      answer: "IN",
    },
    {
      question:
        "Which clause is used to compare every value of a column with subquery results?",
      options: ["IN", "BETWEEN", "ALL", "ALL WHERE"],
      answer: "ALL",
    },
    {
      question:
        "Which operator is used to return rows only when both queries return the same result?",
      options: ["JOIN", "INTERSECT", "UNION ALL", "LINK"],
      answer: "INTERSECT",
    },
    {
      question:
        "Which command combines two result sets and removes duplicate rows?",
      options: ["UNION", "UNION ALL", "JOIN", "MERGE"],
      answer: "UNION",
    },
    {
      question:
        "Which type of join produces a Cartesian product of the two tables?",
      options: ["INNER JOIN", "CROSS JOIN", "RIGHT JOIN", "SELF JOIN"],
      answer: "CROSS JOIN",
    },
    {
      question:
        "Which type of key uniquely identifies a record but is not the primary key?",
      options: ["Foreign Key", "Candidate Key", "Super Key", "Alternate Key"],
      answer: "Alternate Key",
    },
    {
      question: "Which key refers to the primary key of another table?",
      options: ["Alternate Key", "Unique Key", "Foreign Key", "Composite Key"],
      answer: "Foreign Key",
    },
    {
      question:
        "Which SQL feature allows running a query inside another query?",
      options: ["Nested SELECT", "Subquery", "Inner Logic", "Query Block"],
      answer: "Subquery",
    },
    {
      question: "Which constraint ensures a column cannot accept NULL values?",
      options: ["CHECK", "NOT NULL", "REFERENCES", "DEFAULT"],
      answer: "NOT NULL",
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
    window.location.href = "/Level4";
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
          <h1 className="level-title">Level 4 Completed!</h1>
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
        <h1 className="level-title">Level 4: Joins & Subqueries</h1>
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
                selected === opt ? (opt === q.answer ? "correct" : "wrong") : ""
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
