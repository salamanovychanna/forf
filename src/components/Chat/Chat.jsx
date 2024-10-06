// src/Chat.js
import React, { useState } from "react";
import axios from "axios";
import "./chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add the user message to the conversation
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);
    try {
      // Send request to OpenAI API
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [...messages, userMessage],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer sk-oeQABhKjOeNdPTrKF4y4kQA0h06nvYR6Oh-oxaOJkqT3BlbkFJpDStE24hlnhVTmzRhhHaqrMwoyOoNg1WEXYy-VSUgA`, // Replace with your OpenAI API key
          },
        }
      );

      // Add the bot's response to the conversation
      const botMessage = response.data.choices[0].message;
      setLoading(false);
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-title">Ask Dr. Farmer</div>
      <div className="chat-window">
        <div>
          <p className="bot-message">Hey, how can I help you today? You may ask me different qustions regarding
            culturals.</p>
        </div>
        {messages.map((msg, index) => (
            <div
                key={index}
                className={msg.role === "user" ? "user-message" : "bot-message"}
            >
              <p>{msg.content}</p>
            </div>
        ))}
        <div>
          {loading && <p className="bot-message small">
            <svg width="80" height="30" viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg" fill="black">
              <circle cx="10" cy="15" r="8">
                <animate attributeName="opacity" from="1" to="0" dur="1s" repeatCount="indefinite" begin="0s"/>
              </circle>
              <circle cx="40" cy="15" r="8" fill="black">
                <animate attributeName="opacity" from="1" to="0" dur="1s" repeatCount="indefinite" begin="0.33s"/>
              </circle>
              <circle cx="70" cy="15" r="8" fill="black">
                <animate attributeName="opacity" from="1" to="0" dur="1s" repeatCount="indefinite" begin="0.66s"/>
              </circle>
            </svg>

          </p>}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="MainInput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
        />
        <button type="submit" className="SubmitButton">
          <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 17L0 0L8.09408 14.8023L27.0865 17L8.09408 19.1977L0 34L42 17Z" fill="#0032A0"/>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chat;
