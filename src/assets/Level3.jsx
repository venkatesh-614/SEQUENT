import React from "react";
import { useState } from "react";
import "./EachLev.css";

export default function Level3() {
  const questions = [
    {
      question:
        "Which SQL command is used to remove duplicate rows while retrieving data?",
      options: ["REMOVE DUP", "UNIQUE", "DISTINCT", "FILTER DISTINCT"],
      answer: "DISTINCT",
    },
    {
      question:
        "Which keyword is used to limit the number of returned rows in SQL?",
      options: ["LIMIT", "TOP", "FETCH", "ROWS"],
      answer: "LIMIT",
    },
    {
      question:
        "Which clause is used to sort query results in descending order?",
      options: ["ORDER DESC", "SORT BY DESC", "ORDER BY DESC", "DESCENDING"],
      answer: "ORDER BY DESC",
    },
    {
      question: "Which statement is used to change the name of a table?",
      options: [
        "ALTER RENAME TABLE",
        "RENAME TABLE",
        "UPDATE NAME TABLE",
        "CHANGE TABLE",
      ],
      answer: "RENAME TABLE",
    },
    {
      question: "Which function returns the number of non-null values?",
      options: ["COUNT(*)", "COUNT(column)", "COUNT ALL", "COUNTNULL()"],
      answer: "COUNT(column)",
    },
    {
      question:
        "Which SQL constraint ensures that no two rows have the same value in a column?",
      options: ["PRIMARY KEY", "NOT NULL", "UNIQUE", "CHECK"],
      answer: "UNIQUE",
    },
    {
      question: "Which command is used to backup a database?",
      options: [
        "STORE DATABASE",
        "BACKUP DATABASE",
        "SAVE DB",
        "EXPORT DATABASE",
      ],
      answer: "BACKUP DATABASE",
    },
    {
      question: "Which operator is used to check for NULL values?",
      options: ["= NULL", "IS EMPTY", "IS NULL", "EQUALS NULL"],
      answer: "IS NULL",
    },
    {
      question: "Which command is used to restore a database from backup?",
      options: ["LOAD BACKUP", "IMPORT DB", "RESTORE DATABASE", "RECOVER DB"],
      answer: "RESTORE DATABASE",
    },
    {
      question: "Which command is used to change the data type of a column?",
      options: [
        "MODIFY COLUMN",
        "CHANGE TYPE",
        "ALTER COLUMN TYPE",
        "EDIT TYPE",
      ],
      answer: "MODIFY COLUMN",
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
    window.location.href = "/Level3";
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
          <h1 className="level-title">Level 3 Completed!</h1>
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
        <h1 className="level-title">Level 3: Advanced Commands</h1>
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
