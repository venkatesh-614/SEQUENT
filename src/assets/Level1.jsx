import React from "react";
import { useState } from "react";
import "./EachLev.css";

export default function Level1() {
  const questions = [
    {
      question: "Which SQL statement is used to get data from a database?",
      options: ["FETCH", "GET", "SELECT", "EXTRACT"],
      answer: "SELECT",
    },
    {
      question: "Which SQL statement is used to add new data to a table?",
      options: ["UPDATE", "ADD", "INSERT INTO", "NEW ROW"],
      answer: "INSERT INTO",
    },
    {
      question: "Which SQL statement is used to modify existing data?",
      options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
      answer: "UPDATE",
    },
    {
      question: "Which SQL statement is used to remove data from a table?",
      options: ["DELETE", "DROP", "REMOVE", "ERASE"],
      answer: "DELETE",
    },
    {
      question: "Which clause is used to filter records?",
      options: ["SELECT", "HAVING", "FILTER", "WHERE"],
      answer: "WHERE",
    },
    {
      question: "Which keyword is used to arrange data in ascending order?",
      options: ["ARRANGE ASC", "SORT ASC", "ORDER BY ASC", "ORDER ASC"],
      answer: "ORDER BY ASC",
    },
    {
      question: "Which SQL function counts the number of rows?",
      options: ["COUNT()", "SUM()", "TOTAL()", "NUMBER()"],
      answer: "COUNT()",
    },
    {
      question: "Which SQL statement is used to create a new table?",
      options: ["CREATE TABLE", "NEW TABLE", "INSERT TABLE", "MAKE TABLE"],
      answer: "CREATE TABLE",
    },
    {
      question: "Which keyword removes a table from the database?",
      options: ["REMOVE TABLE", "DELETE TABLE", "DROP TABLE", "ERASE TABLE"],
      answer: "DROP TABLE",
    },
    {
      question: "Which operator is used to select values within a range?",
      options: ["RANGE", "IN", "LIKE", "BETWEEN"],
      answer: "BETWEEN",
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
    window.location.href = "/level2";
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
          <h1 className="level-title">Level 1 Completed!</h1>
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
        <h1 className="level-title">Level 1: Basic Queries</h1>
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
