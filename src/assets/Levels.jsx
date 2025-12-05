import React from "react";
import "./Levels.css";

export default function Levels() {
  const levels = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `Level ${i + 1}`,
  }));

  return (
    <div className="levels-map-container">
      <h1 className="levels-title">SQL Journey</h1>

      <div className="levels-path">
        {levels.map((lvl) => (
          <button
            key={lvl.id}
            className="level-node"
            onClick={() => (window.location.href = `/Level${lvl.id}`)}
          >
            {lvl.id}
          </button>
        ))}
      </div>
    </div>
  );
}
