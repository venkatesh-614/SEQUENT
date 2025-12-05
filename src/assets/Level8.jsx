import React from "react";
import { useState } from "react";
import "./EachLev.css";

export default function Level8() {
  const questions = [
    {
      question: "Which SQL command starts a transaction explicitly?",
      options: [
        "BEGIN TRANSACTION",
        "START TRANSACTION",
        "INIT TRANSACTION",
        "TRANSACTION BEGIN",
      ],
      answer: "START TRANSACTION",
    },
    {
      question:
        "Which SQL command is used to permanently save changes in a transaction?",
      options: ["SAVE", "COMMIT", "EXECUTE", "APPLY"],
      answer: "COMMIT",
    },
    {
      question:
        "Which SQL command undoes uncommitted changes in a transaction?",
      options: ["UNDO", "ROLLBACK", "REVERT", "CANCEL"],
      answer: "ROLLBACK",
    },
    {
      question:
        "Which SQL object automatically executes a procedure in response to events on a table?",
      options: ["VIEW", "TRIGGER", "FUNCTION", "INDEX"],
      answer: "TRIGGER",
    },
    {
      question:
        "Which trigger executes before an insert, update, or delete operation?",
      options: [
        "AFTER TRIGGER",
        "BEFORE TRIGGER",
        "DURING TRIGGER",
        "INSTEAD OF TRIGGER",
      ],
      answer: "BEFORE TRIGGER",
    },
    {
      question:
        "Which trigger executes instead of an insert, update, or delete on a view?",
      options: [
        "BEFORE TRIGGER",
        "AFTER TRIGGER",
        "INSTEAD OF TRIGGER",
        "ON TRIGGER",
      ],
      answer: "INSTEAD OF TRIGGER",
    },
    {
      question:
        "Which SQL object stores reusable code that can be executed multiple times?",
      options: ["VIEW", "PROCEDURE", "TRIGGER", "FUNCTION"],
      answer: "PROCEDURE",
    },
    {
      question:
        "Which SQL object returns a single value or table and can be used in queries?",
      options: ["VIEW", "STORED PROCEDURE", "FUNCTION", "TRIGGER"],
      answer: "FUNCTION",
    },
    {
      question: "Which command is used to delete a trigger from a table?",
      options: [
        "DROP TRIGGER",
        "DELETE TRIGGER",
        "REMOVE TRIGGER",
        "ALTER TRIGGER",
      ],
      answer: "DROP TRIGGER",
    },
    {
      question:
        "Which transaction property ensures that a series of operations are treated as a single unit?",
      options: ["Atomicity", "Consistency", "Isolation", "Durability"],
      answer: "Atomicity",
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
    window.location.href = "/Level8";
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
          <h1 className="level-title">Level 8 Completed!</h1>
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
        <h1 className="level-title">Level 8: Triggers & Procedures</h1>
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
