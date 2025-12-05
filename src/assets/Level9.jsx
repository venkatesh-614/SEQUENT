import React from "react";
import { useState } from "react";
import "./EachLev.css";

export default function Level9() {
  const questions = [
    {
      question:
        "Which type of index is automatically created on a primary key column?",
      options: [
        "UNIQUE INDEX",
        "PRIMARY INDEX",
        "CLUSTERED INDEX",
        "NONCLUSTERED INDEX",
      ],
      answer: "CLUSTERED INDEX",
    },
    {
      question:
        "Which type of index allows duplicate values but speeds up search queries?",
      options: [
        "UNIQUE INDEX",
        "NORMAL INDEX",
        "CLUSTERED INDEX",
        "PRIMARY INDEX",
      ],
      answer: "NORMAL INDEX",
    },
    {
      question: "Which command displays the execution plan of a SQL query?",
      options: ["EXPLAIN PLAN", "SHOW PLAN", "QUERY PLAN", "EXECUTE PLAN"],
      answer: "EXPLAIN PLAN",
    },
    {
      question: "Which technique avoids scanning the entire table for queries?",
      options: ["Indexing", "Caching", "Partitioning", "Sorting"],
      answer: "Indexing",
    },
    {
      question:
        "Which clause improves query performance by reducing the number of returned rows?",
      options: ["WHERE", "HAVING", "LIMIT", "GROUP BY"],
      answer: "LIMIT",
    },
    {
      question:
        "Which type of join can slow down performance if the tables are large?",
      options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "SELF JOIN"],
      answer: "CROSS JOIN",
    },
    {
      question:
        "Which SQL command divides a table into smaller, manageable pieces for faster queries?",
      options: ["SEGMENT", "PARTITION", "DIVIDE", "SHARD"],
      answer: "PARTITION",
    },
    {
      question:
        "Which function is used to aggregate data for optimization and indexing purposes?",
      options: ["SUM()", "COUNT()", "AVG()", "GROUP BY"],
      answer: "GROUP BY",
    },
    {
      question: "Which technique caches query results to reduce database load?",
      options: ["Materialized View", "Indexing", "Stored Procedure", "Trigger"],
      answer: "Materialized View",
    },
    {
      question:
        "Which property ensures that updates in one transaction do not affect other concurrent transactions?",
      options: ["Atomicity", "Consistency", "Isolation", "Durability"],
      answer: "Isolation",
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
    window.location.href = "/Level9";
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
          <h1 className="level-title">Level 9 Completed!</h1>
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
        <h1 className="level-title">Level 9: Optimization & Tuning</h1>
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
