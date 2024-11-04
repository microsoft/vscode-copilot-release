import React from 'react';

interface ChatSidebarProps {
  indexedQuestions: { question: string, responseId: string }[];
  onNavigate: (responseId: string) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ indexedQuestions, onNavigate }) => {
  return (
    <div className="chat-sidebar">
      <h2>Chat History</h2>
      <ul>
        {indexedQuestions.map((item, index) => (
          <li key={index} onClick={() => onNavigate(item.responseId)}>
            {item.question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
