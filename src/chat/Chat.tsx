import React, { useState } from 'react';
import { ChatSidebar } from '../sidebar';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ question: string, response: string }[]>([]);
  const [indexedQuestions, setIndexedQuestions] = useState<{ question: string, responseId: string }[]>([]);

  const handleSendMessage = (question: string) => {
    const response = generateResponse(question); // Assume this function generates a response
    const responseId = `${messages.length}`; // Simple indexing based on message length
    setMessages([...messages, { question, response }]);
    setIndexedQuestions([...indexedQuestions, { question, responseId }]);
  };

  const handleNavigate = (responseId: string) => {
    const responseIndex = parseInt(responseId, 10);
    const responseElement = document.getElementById(`response-${responseIndex}`);
    if (responseElement) {
      responseElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="chat-container">
      <ChatSidebar indexedQuestions={indexedQuestions} onNavigate={handleNavigate} />
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} id={`response-${index}`}>
            <p><strong>Q:</strong> {message.question}</p>
            <p><strong>A:</strong> {message.response}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your question..." onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }} />
      </div>
    </div>
  );
};

export default Chat;
