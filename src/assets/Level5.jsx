import React from "react";
import { useState } from "react";
import "./EachLev.css";

export default function Level5() {
  const questions = [
    {
      question:
        "Which SQL constraint is used to limit the range of values in a column?",
      options: ["CHECK", "LIMIT", "RANGE", "RESTRICT"],
      answer: "CHECK",
    },
    {
      question:
        "Which SQL command permanently saves all changes in a transaction?",
      options: ["SAVE", "COMMIT", "UPDATE", "EXECUTE"],
      answer: "COMMIT",
    },
    {
      question: "Which command is used to undo recent uncommitted changes?",
      options: ["UNDO", "RESTART", "ROLLBACK", "CANCEL"],
      answer: "ROLLBACK",
    },
    {
      question:
        "Which statement creates a virtual table based on the result of a query?",
      options: ["CREATE TABLE", "CREATE VIEW", "GENERATE TABLE", "NEW VIEW"],
      answer: "CREATE VIEW",
    },
    {
      question:
        "Which keyword is used to give a temporary name to a column or table?",
      options: ["ALIAS", "AS", "NAME", "RENAME"],
      answer: "AS",
    },
    {
      question:
        "Which clause is used to copy structure and data from one table to another?",
      options: [
        "COPY TABLE",
        "CLONE TABLE",
        "CREATE TABLE AS SELECT",
        "DUPLICATE TABLE",
      ],
      answer: "CREATE TABLE AS SELECT",
    },
    {
      question:
        "Which SQL concept ensures multiple operations execute as a single unit?",
      options: ["FUNCTION", "TRIGGER", "TRANSACTION", "CONSTRAINT"],
      answer: "TRANSACTION",
    },
    {
      question: "Which command revokes previously granted permissions?",
      options: ["REMOVE GRANT", "TAKE", "REVOKE", "DENY ACCESS"],
      answer: "REVOKE",
    },
    {
      question:
        "Which command is used to give user access rights to database objects?",
      options: ["PERMIT", "GRANT", "ALLOW", "ACCESS"],
      answer: "GRANT",
    },
    {
      question:
        "Which feature stores the previous version of a view when updated?",
      options: [
        "MATERIALIZED VIEW",
        "STATIC VIEW",
        "ARCHIVED VIEW",
        "CACHED VIEW",
      ],
      answer: "MATERIALIZED VIEW",
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
    window.location.href = "/Level5";
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
          <h1 className="level-title">Level 5 Completed!</h1>
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
        <h1 className="level-title">Level 5: Transactions & Views</h1>
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
