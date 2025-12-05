import React from "react";
import { useState } from "react";
import "./EachLev.css";

export default function Level7() {
  const questions = [
    {
      question:
        "Which join returns all rows from the right table and matched rows from the left table?",
      options: ["LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "INNER JOIN"],
      answer: "RIGHT JOIN",
    },
    {
      question:
        "Which SQL operator combines two queries and includes duplicate rows?",
      options: ["UNION", "UNION ALL", "INTERSECT", "EXCEPT"],
      answer: "UNION ALL",
    },
    {
      question:
        "Which SQL operator returns rows from the first query that are not in the second query?",
      options: ["EXCEPT", "INTERSECT", "MINUS", "NOT IN"],
      answer: "EXCEPT",
    },
    {
      question:
        "Which type of subquery depends on the outer query for its values?",
      options: [
        "Correlated Subquery",
        "Independent Subquery",
        "Nested Query",
        "Derived Query",
      ],
      answer: "Correlated Subquery",
    },
    {
      question: "Which join allows a table to join with itself?",
      options: ["SELF JOIN", "CROSS JOIN", "INNER JOIN", "OUTER JOIN"],
      answer: "SELF JOIN",
    },
    {
      question: "Which clause is used to filter results in a subquery?",
      options: ["WHERE", "HAVING", "FILTER", "SUBWHERE"],
      answer: "WHERE",
    },
    {
      question:
        "Which operator is used to compare a value with any value returned by a subquery?",
      options: ["ANY", "ALL", "SOME", "EACH"],
      answer: "ANY",
    },
    {
      question:
        "Which SQL operation returns only the common rows between two queries?",
      options: ["UNION", "INTERSECT", "EXCEPT", "JOIN"],
      answer: "INTERSECT",
    },
    {
      question:
        "Which join returns all rows from both tables, filling NULLs when there is no match?",
      options: ["FULL OUTER JOIN", "LEFT JOIN", "RIGHT JOIN", "INNER JOIN"],
      answer: "FULL OUTER JOIN",
    },
    {
      question:
        "Which clause allows renaming columns or tables temporarily in a query?",
      options: ["AS", "ALIAS", "RENAME", "TEMP"],
      answer: "AS",
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
    window.location.href = "/Level7";
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
          <h1 className="level-title">Level 7 Completed!</h1>
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
        <h1 className="level-title">Level 7: Set Operations</h1>
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
