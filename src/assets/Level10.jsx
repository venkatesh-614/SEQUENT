import React from "react";
import { useState } from "react";
import "./EachLev.css";

export default function Level10() {
  const questions = [
    {
      question:
        "Which SQL clause is used to create a secure view with limited column access?",
      options: [
        "SECURE VIEW",
        "LIMITED VIEW",
        "WITH CHECK OPTION",
        "PROTECTED VIEW",
      ],
      answer: "WITH CHECK OPTION",
    },
    {
      question:
        "Which function is used to find the rank of a row within a partition?",
      options: ["ROW_NUMBER()", "RANK()", "DENSE_RANK()", "PARTITION_RANK()"],
      answer: "RANK()",
    },
    {
      question:
        "Which function returns the cumulative sum of a column over a window?",
      options: ["SUM()", "CUMSUM()", "SUM() OVER", "TOTAL() OVER"],
      answer: "SUM() OVER",
    },
    {
      question:
        "Which SQL feature allows dividing result sets into partitions for analysis?",
      options: ["GROUP BY", "WINDOW FUNCTION", "PARTITION BY", "ROLLUP"],
      answer: "PARTITION BY",
    },
    {
      question: "Which function returns the first value in a window partition?",
      options: ["FIRST_VALUE()", "LEAD()", "LAG()", "TOP_VALUE()"],
      answer: "FIRST_VALUE()",
    },
    {
      question:
        "Which function returns the next row value in a window without moving the cursor?",
      options: ["LEAD()", "LAG()", "NEXT_VALUE()", "OFFSET()"],
      answer: "LEAD()",
    },
    {
      question:
        "Which command encrypts data stored in a column for security purposes?",
      options: ["ENCRYPT()", "AES_ENCRYPT()", "HASH()", "SECURE_COLUMN()"],
      answer: "AES_ENCRYPT()",
    },
    {
      question:
        "Which function returns a value from the previous row in a window?",
      options: ["LAG()", "LEAD()", "PREV()", "ROW_PREV()"],
      answer: "LAG()",
    },
    {
      question:
        "Which clause allows generating subtotals and grand totals in aggregation?",
      options: ["ROLLUP", "CUBE", "GROUPING SETS", "ALL OF THE ABOVE"],
      answer: "ALL OF THE ABOVE",
    },
    {
      question:
        "Which SQL feature restricts users from accessing sensitive columns in a table?",
      options: [
        "COLUMN MASKING",
        "VIEW PERMISSIONS",
        "DATA ENCRYPTION",
        "ALL OF THE ABOVE",
      ],
      answer: "ALL OF THE ABOVE",
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
    window.location.href = "/Level10";
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
          <h1 className="level-title">Level 10 Completed!</h1>
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
        <h1 className="level-title">Level 10: Expert SQL & Security</h1>
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
