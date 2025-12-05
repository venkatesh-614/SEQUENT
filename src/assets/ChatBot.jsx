import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Database, Send } from "lucide-react";
import "./ChatBot.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const REACT_APP_GEMINI_API_KEY = "AIzaSyB854ZGMDGjGcyHJgxSMOzXB7xZJrZBQ9s";

  const genAIRef = useRef(new GoogleGenerativeAI(REACT_APP_GEMINI_API_KEY));
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (messageText) => {
    const textToSend = messageText || input;
    if (textToSend.trim() === "") return;

    setMessages((prev) => [...prev, { role: "user", text: textToSend }]);
    setInput("");
    setIsLoading(true);

    try {
      const model = genAIRef.current.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const systemPrompt = `You are SQLBot, a helpful and professional SQL expert assistant. You ONLY answer questions related to SQL (Structured Query Language), databases, and data querying. 

Your expertise includes:
- SQL syntax and commands (SELECT, INSERT, UPDATE, DELETE, etc.)
- Database design and normalization
- JOINs, subqueries, and complex queries
- Indexes and query optimization
- Database management systems (MySQL, PostgreSQL, SQL Server, Oracle, SQLite, etc.)
- Data types, constraints, and relationships
- Stored procedures, functions, and triggers
- Transactions and ACID properties

If someone asks about topics unrelated to SQL or databases, politely redirect them by saying: "I'm SQLBot, your SQL expert! I can only help with SQL and database-related questions. Please ask me something about SQL queries, database design, or data management."

Always provide clear, accurate, and professional explanations with examples when helpful.`;

      const result = await model.generateContent(
        systemPrompt + "\n\nUser question: " + textToSend
      );
      const text = result.response.text();

      setMessages((prev) => [...prev, { role: "bot", text }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Oops! Something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="header-icon">
          <Database size={32} />
        </div>
        <div className="header-content">
          <h1 className="header-title">SQLBot</h1>
          <p className="header-subtitle">Your Friendly SQL Query Companion </p>
        </div>
      </div>

      <div className="chatbot-body">
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message message-${msg.role}`}>
              <div className="message-avatar">
                {msg.role === "user" ? "👤" : "🤖"}
              </div>
              <div className="message-content">
                <div className="message-text">{msg.text}</div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="message message-bot">
              <div className="message-avatar">🤖</div>
              <div className="message-content">
                <div className="loading-indicator">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} style={{ float: "left", clear: "both" }} />
        </div>

        <div className="input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask me anything about SQL..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !isLoading && sendMessage()}
            disabled={isLoading}
          />
          <button
            className="send-button"
            onClick={() => sendMessage()}
            disabled={isLoading || input.trim() === ""}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
