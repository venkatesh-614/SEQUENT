import "./Playground.css";
import React, { useState } from "react";

const Playground = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sections = [
    {
      id: "database",
      title: "Database Operations",
      emoji: "🗄️",
      color: "#3B82F6",
      level: "Beginner",
      items: [
        {
          title: "CREATE DATABASE",
          desc: "Create a new database",
          code: "CREATE DATABASE company;",
        },
        {
          title: "USE",
          desc: "Select a database to work with",
          code: "USE company;",
        },
        {
          title: "ALTER DATABASE",
          desc: "Modify database attributes",
          code: "ALTER DATABASE database_name;",
        },
        {
          title: "DROP DATABASE",
          desc: "Delete an existing database",
          code: "DROP DATABASE company;",
        },
      ],
    },
    {
      id: "create",
      title: "Creating Data",
      emoji: "📝",
      color: "#10B981",
      level: "Beginner",
      items: [
        {
          title: "CREATE TABLE",
          desc: "Create a new table with columns",
          code: `CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  department VARCHAR(50),
  salary DECIMAL(10, 2)
);`,
        },
        {
          title: "INSERT INTO",
          desc: "Add new records to a table",
          code: `INSERT INTO employees (employee_id, first_name, last_name, department, salary)
VALUES
  (1, 'John', 'Doe', 'HR', 50000.00),
  (2, 'Jane', 'Smith', 'IT', 60000.00);`,
        },
        {
          title: "ALTER TABLE",
          desc: "Modify table structure",
          code: `ALTER TABLE employees
ADD COLUMN new_column INT;`,
        },
        {
          title: "DROP TABLE",
          desc: "Delete a table and its data",
          code: "DROP TABLE employees;",
        },
      ],
    },
    {
      id: "read",
      title: "Reading/Querying Data",
      emoji: "🔍",
      color: "#8B5CF6",
      level: "Beginner",
      items: [
        {
          title: "SELECT",
          desc: "Retrieve data from tables",
          code: "SELECT * FROM employees;",
        },
        {
          title: "DISTINCT",
          desc: "Select unique values",
          code: "SELECT DISTINCT department FROM employees;",
        },
        {
          title: "WHERE",
          desc: "Filter rows by conditions",
          code: "SELECT * FROM employees WHERE salary > 55000.00;",
        },
        {
          title: "LIMIT",
          desc: "Limit number of rows returned",
          code: "SELECT * FROM employees LIMIT 3;",
        },
        {
          title: "OFFSET",
          desc: "Skip specified rows",
          code: "SELECT * FROM employees LIMIT 10000 OFFSET 2;",
        },
        {
          title: "FETCH",
          desc: "Retrieve specified number of rows",
          code: "SELECT * FROM employees FETCH FIRST 3 ROWS ONLY;",
        },
        {
          title: "CASE",
          desc: "Conditional logic in queries",
          code: `SELECT 
  first_name,
  last_name,
  CASE 
    WHEN salary > 55000 THEN 'High'
    WHEN salary > 50000 THEN 'Medium'
    ELSE 'Low'
  END AS salary_category
FROM employees;`,
        },
      ],
    },
    {
      id: "update",
      title: "Updating Data",
      emoji: "✏️",
      color: "#F59E0B",
      level: "Beginner",
      items: [
        {
          title: "UPDATE",
          desc: "Modify existing records",
          code: `UPDATE employees
SET salary = 55000.00
WHERE employee_id = 1;`,
        },
      ],
    },
    {
      id: "delete",
      title: "Deleting Data",
      emoji: "🗑️",
      color: "#EF4444",
      level: "Beginner",
      items: [
        {
          title: "DELETE",
          desc: "Remove records from table",
          code: `DELETE FROM employees
WHERE employee_id = 5;`,
        },
      ],
    },
    {
      id: "filter",
      title: "Filtering & Sorting",
      emoji: "🎯",
      color: "#6366F1",
      level: "Intermediate",
      items: [
        {
          title: "LIKE",
          desc: "Match patterns in columns",
          code: `SELECT * FROM employees
WHERE first_name LIKE 'J%';`,
        },
        {
          title: "IN",
          desc: "Match values in a list",
          code: `SELECT * FROM employees
WHERE department IN ('HR', 'Finance');`,
        },
        {
          title: "BETWEEN",
          desc: "Match values in a range",
          code: `SELECT * FROM employees
WHERE salary BETWEEN 50000 AND 60000;`,
        },
        {
          title: "IS NULL",
          desc: "Match NULL values",
          code: `SELECT * FROM employees
WHERE department IS NULL;`,
        },
        {
          title: "ORDER BY",
          desc: "Sort the result set",
          code: `SELECT * FROM employees
ORDER BY salary DESC;`,
        },
      ],
    },
    {
      id: "operators",
      title: "SQL Operators",
      emoji: "⚡",
      color: "#EC4899",
      level: "Intermediate",
      items: [
        {
          title: "AND",
          desc: "Combine multiple conditions",
          code: `SELECT * FROM employees
WHERE department = 'IT' AND salary > 60000;`,
        },
        {
          title: "OR",
          desc: "Any condition should be true",
          code: `SELECT * FROM employees
WHERE department = 'HR' OR department = 'Finance';`,
        },
        {
          title: "NOT",
          desc: "Negate a condition",
          code: `SELECT * FROM employees
WHERE NOT department = 'IT';`,
        },
        {
          title: "GROUP BY",
          desc: "Group rows with same values",
          code: `SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;`,
        },
      ],
    },
    {
      id: "aggregate",
      title: "Aggregation Functions",
      emoji: "📊",
      color: "#06B6D4",
      level: "Intermediate",
      items: [
        {
          title: "COUNT",
          desc: "Count number of rows",
          code: "SELECT COUNT(*) FROM employees;",
        },
        {
          title: "SUM",
          desc: "Calculate sum of values",
          code: "SELECT SUM(salary) FROM employees;",
        },
        {
          title: "AVG",
          desc: "Calculate average value",
          code: "SELECT AVG(salary) FROM employees;",
        },
        {
          title: "MIN",
          desc: "Find minimum value",
          code: "SELECT MIN(salary) FROM employees;",
        },
        {
          title: "MAX",
          desc: "Find maximum value",
          code: "SELECT MAX(salary) FROM employees;",
        },
        {
          title: "HAVING",
          desc: "Filter groups by conditions",
          code: `SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 55000;`,
        },
      ],
    },
    {
      id: "constraints",
      title: "Constraints",
      emoji: "🔒",
      color: "#F97316",
      level: "Intermediate",
      items: [
        {
          title: "PRIMARY KEY",
          desc: "Uniquely identify records",
          code: `CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50)
);`,
        },
        {
          title: "FOREIGN KEY",
          desc: "Establish table relationships",
          code: `CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);`,
        },
        {
          title: "UNIQUE",
          desc: "Ensure unique column values",
          code: `CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE
);`,
        },
        {
          title: "NOT NULL",
          desc: "Prevent NULL values",
          code: `CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL
);`,
        },
        {
          title: "CHECK",
          desc: "Specify value conditions",
          code: `CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  age INT CHECK (age >= 18)
);`,
        },
      ],
    },
    {
      id: "joins",
      title: "Joins",
      emoji: "🔗",
      color: "#14B8A6",
      level: "Advanced",
      items: [
        {
          title: "INNER JOIN",
          desc: "Records with matching values",
          code: `SELECT * FROM employees
INNER JOIN departments ON employees.department_id = departments.department_id;`,
        },
        {
          title: "LEFT JOIN",
          desc: "All left table + matched right",
          code: `SELECT * FROM employees
LEFT JOIN departments ON employees.department_id = departments.department_id;`,
        },
        {
          title: "RIGHT JOIN",
          desc: "All right table + matched left",
          code: `SELECT * FROM employees
RIGHT JOIN departments ON employees.department_id = departments.department_id;`,
        },
        {
          title: "FULL OUTER JOIN",
          desc: "All records from both tables",
          code: `SELECT * FROM employees
FULL OUTER JOIN departments ON employees.department_id = departments.department_id;`,
        },
        {
          title: "CROSS JOIN",
          desc: "Cartesian product of tables",
          code: `SELECT * FROM employees
CROSS JOIN departments;`,
        },
        {
          title: "SELF JOIN",
          desc: "Join table to itself",
          code: `SELECT e1.first_name, e2.first_name
FROM employees e1, employees e2
WHERE e1.employee_id = e2.manager_id;`,
        },
      ],
    },
    {
      id: "functions",
      title: "SQL Functions",
      emoji: "⚙️",
      color: "#84CC16",
      level: "Advanced",
      items: [
        {
          title: "Scalar Functions",
          desc: "Return single value",
          code: `SELECT UPPER(first_name) AS upper_case_name FROM employees;`,
        },
        {
          title: "String Functions",
          desc: "Manipulate string values",
          code: `SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;

SELECT SUBSTR(first_name, 1, 3) AS short_name FROM employees;`,
        },
        {
          title: "Date Functions",
          desc: "Operate on date/time values",
          code: `SELECT CURRENT_DATE AS current_date FROM dual;`,
        },
        {
          title: "Math Functions",
          desc: "Mathematical operations",
          code: `SELECT SQRT(25) AS square_root FROM dual;`,
        },
      ],
    },
    {
      id: "subqueries",
      title: "Subqueries",
      emoji: "🔎",
      color: "#7C3AED",
      level: "Advanced",
      items: [
        {
          title: "Single-row Subquery",
          desc: "Returns one row",
          code: `SELECT first_name, last_name
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);`,
        },
        {
          title: "Multiple-row Subquery",
          desc: "Returns multiple rows",
          code: `SELECT department_name
FROM departments
WHERE department_id IN (SELECT department_id FROM employees);`,
        },
        {
          title: "Correlated Subquery",
          desc: "References outer query column",
          code: `SELECT first_name, last_name
FROM employees e
WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = e.department);`,
        },
        {
          title: "Nested Subquery",
          desc: "Subquery inside another",
          code: `SELECT first_name, last_name
FROM employees
WHERE department_id IN (
    SELECT department_id FROM departments WHERE department_name = 'IT'
);`,
        },
      ],
    },
    {
      id: "views",
      title: "Views",
      emoji: "👁️",
      color: "#F43F5E",
      level: "Advanced",
      items: [
        {
          title: "CREATE VIEW",
          desc: "Create virtual table",
          code: `CREATE VIEW high_paid_employees AS
SELECT * FROM employees WHERE salary > 60000;`,
        },
        {
          title: "DROP VIEW",
          desc: "Delete a view",
          code: `DROP VIEW IF EXISTS high_paid_employees;`,
        },
      ],
    },
    {
      id: "indexes",
      title: "Indexes",
      emoji: "⚡",
      color: "#F59E0B",
      level: "Advanced",
      items: [
        {
          title: "CREATE INDEX",
          desc: "Create index for performance",
          code: `CREATE INDEX idx_department ON employees (department);`,
        },
        {
          title: "DROP INDEX",
          desc: "Remove an index",
          code: `DROP INDEX IF EXISTS idx_department;`,
        },
      ],
    },
    {
      id: "transactions",
      title: "Transactions",
      emoji: "💾",
      color: "#10B981",
      level: "Advanced",
      items: [
        {
          title: "BEGIN TRANSACTION",
          desc: "Start new transaction",
          code: `BEGIN TRANSACTION;`,
        },
        {
          title: "COMMIT",
          desc: "Save transaction changes",
          code: `COMMIT;`,
        },
        {
          title: "ROLLBACK",
          desc: "Undo transaction changes",
          code: `ROLLBACK;`,
        },
      ],
    },
    {
      id: "advanced",
      title: "Advanced Concepts",
      emoji: "🚀",
      color: "#D946EF",
      level: "Expert",
      items: [
        {
          title: "Stored Procedures",
          desc: "Precompiled SQL statements",
          code: `CREATE PROCEDURE get_employee_count()
BEGIN
  SELECT COUNT(*) FROM employees;
END;`,
        },
        {
          title: "Triggers",
          desc: "Auto-execute on events",
          code: `CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
  SET NEW.creation_date = NOW();
END;`,
        },
        {
          title: "User-defined Functions",
          desc: "Custom SQL functions",
          code: `CREATE FUNCTION calculate_bonus(salary DECIMAL) RETURNS DECIMAL
BEGIN
  RETURN salary * 0.1;
END;`,
        },
        {
          title: "Common Table Expressions",
          desc: "Temporary result sets (CTEs)",
          code: `WITH high_paid_employees AS (
  SELECT * FROM employees WHERE salary > 60000
)
SELECT * FROM high_paid_employees;`,
        },
      ],
    },
  ];

  return (
    <div className="sql-cheatsheet">
      <style>{`
        .sql-cheatsheet {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);
        }
        
        .main-title {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }
        
        .subtitle {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 800px;
          margin: 0 auto 1.5rem;
          line-height: 1.6;
        }
        
        .tags {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .tag {
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .tag-green { background: #d1fae5; color: #065f46; }
        .tag-blue { background: #dbeafe; color: #1e40af; }
        .tag-purple { background: #e9d5ff; color: #6b21a8; }
        
        .sections {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .section {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: box-shadow 0.3s;
        }
        
        .section:hover {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          cursor: pointer;
          background: white;
          border: none;
          width: 100%;
          text-align: left;
          transition: background 0.2s;
        }
        
        .section-header:hover {
          background: #f8fafc;
        }
        
        .section-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .section-text h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 0.25rem 0;
        }
        
        .section-text p {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
        }
        
        .section-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .level-badge {
          padding: 0.375rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .level-beginner { background: #d1fae5; color: #065f46; }
        .level-intermediate { background: #dbeafe; color: #1e40af; }
        .level-advanced { background: #e9d5ff; color: #6b21a8; }
        .level-expert { background: #fee2e2; color: #991b1b; }
        
        .chevron {
          color: #94a3b8;
          transition: transform 0.3s;
        }
        
        .chevron.expanded {
          transform: rotate(90deg);
        }
        
        .section-content {
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
        }
        
        .item {
          padding: 1.5rem;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .item:last-child {
          border-bottom: none;
        }
        
        .item-header {
          margin-bottom: 0.75rem;
        }
        
        .item-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 0.25rem 0;
        }
        
        .item-desc {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
        }
        
        .code-block {
          background: #1e293b;
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
        }
        
        .code-block pre {
          margin: 0;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.875rem;
          color: #10b981;
          white-space: pre;
        }
        
        .footer {
          margin-top: 3rem;
          text-align: center;
          padding-bottom: 2rem;
        }
        
        .footer-card {
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
          border-radius: 1rem;
          padding: 2rem;
          color: white;
          box-shadow: 0 10px 15px rgba(59, 130, 246, 0.3);
        }
        
        .footer-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }
        
        .footer-card p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 1rem 0;
        }
        
        .footer-tags {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .footer-tag {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          font-size: 0.875rem;
          backdrop-filter: blur(10px);
        }
        
        @media (max-width: 768px) {
          .sql-cheatsheet {
            padding: 1rem;
          }
          
          .main-title {
            font-size: 2.5rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .section-header {
            padding: 1rem;
          }
          
          .item {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="badge">COMPLETE SQL GUIDE</div>
          <h1 className="main-title">SQL Cheat Sheet</h1>
          <p className="subtitle">
            Master SQL from Zero to Hero. A comprehensive guide covering
            everything from basic queries to advanced database concepts.
          </p>
          <div className="tags">
            <span className="tag tag-green">Beginner Friendly</span>
            <span className="tag tag-blue">70+ Commands</span>
            <span className="tag tag-purple">Real Examples</span>
          </div>
        </div>

        {/* Sections */}
        <div className="sections">
          {sections.map((section) => {
            const isExpanded = expandedSections[section.id];
            const levelClass = `level-${section.level.toLowerCase()}`;

            return (
              <div key={section.id} className="section">
                <button
                  className="section-header"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="section-info">
                    <div className="icon" style={{ background: section.color }}>
                      {section.emoji}
                    </div>
                    <div className="section-text">
                      <h2>{section.title}</h2>
                      <p>{section.items.length} commands</p>
                    </div>
                  </div>
                  <div className="section-meta">
                    <span className={`level-badge ${levelClass}`}>
                      {section.level}
                    </span>
                    <span className={`chevron ${isExpanded ? "expanded" : ""}`}>
                      ▶
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div className="section-content">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="item">
                        <div className="item-header">
                          <h3 className="item-title">{item.title}</h3>
                          <p className="item-desc">{item.desc}</p>
                        </div>
                        <div className="code-block">
                          <pre>{item.code}</pre>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-card">
            <h3>Ready to Master SQL?</h3>
            <p>Practice these commands and become a database expert!</p>
            <div className="footer-tags">
              <span className="footer-tag">⚡ Copy & Practice</span>
              <span className="footer-tag">🚀 Build Projects</span>
              <span className="footer-tag">💪 Level Up</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
