import React from "react";
import { useState } from "react";
import "./EachLev.css";

export default function Level2() {
  const questions = [
    {
      question: "Which clause groups rows that have the same values?",
      options: ["ORDER BY", "GROUP BY", "AGGREGATE", "COLLECT"],
      answer: "GROUP BY",
    },
    {
      question: "Which function returns the highest value?",
      options: ["MAX()", "HIGH()", "TOP()", "LARGEST()"],
      answer: "MAX()",
    },
    {
      question: "Which SQL keyword is used to restrict returned rows?",
      options: ["WHERE", "LIMIT", "STOP", "TOP"],
      answer: "LIMIT",
    },
    {
      question: "Which operator checks for a pattern match?",
      options: ["LIKE", "PATTERN", "MATCH", "CHECK"],
      answer: "LIKE",
    },
    {
      question:
        "Which clause is used with aggregate functions to filter results?",
      options: ["WHERE", "FILTER", "HAVING", "GROUP BY"],
      answer: "HAVING",
    },
    {
      question: "What does the DISTINCT keyword do?",
      options: [
        "Removes duplicate records",
        "Sorts data",
        "Deletes records",
        "Shows all data",
      ],
      answer: "Removes duplicate records",
    },
    {
      question: "Which JOIN returns only matching rows from both tables?",
      options: ["FULL JOIN", "INNER JOIN", "OUTER JOIN", "LEFT JOIN"],
      answer: "INNER JOIN",
    },
    {
      question:
        "Which JOIN returns all rows from left table and matches from right?",
      options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "CROSS JOIN"],
      answer: "LEFT JOIN",
    },
    {
      question: "Which command is used to modify table structure?",
      options: ["CHANGE TABLE", "ALTER TABLE", "MODIFY TABLE", "UPDATE TABLE"],
      answer: "ALTER TABLE",
    },
    {
      question:
        "Which of the following deletes entire table including structure?",
      options: ["DELETE", "DROP", "REMOVE", "ERASE"],
      answer: "DROP",
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
    window.location.href = "/Level2";
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
          <h1 className="level-title">Level 2 Completed!</h1>
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
        <h1 className="level-title">Level 2: Intermediate Functions</h1>
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
