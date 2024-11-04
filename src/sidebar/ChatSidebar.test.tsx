import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatSidebar from './ChatSidebar';

describe('ChatSidebar', () => {
  const indexedQuestions = [
    { question: 'What is React?', responseId: '0' },
    { question: 'How do you use hooks?', responseId: '1' },
  ];

  test('displays the indexed questions correctly', () => {
    render(<ChatSidebar indexedQuestions={indexedQuestions} onNavigate={() => {}} />);
    expect(screen.getByText('What is React?')).toBeInTheDocument();
    expect(screen.getByText('How do you use hooks?')).toBeInTheDocument();
  });

  test('navigates to the corresponding response on click', () => {
    const handleNavigate = jest.fn();
    render(<ChatSidebar indexedQuestions={indexedQuestions} onNavigate={handleNavigate} />);
    fireEvent.click(screen.getByText('What is React?'));
    expect(handleNavigate).toHaveBeenCalledWith('0');
    fireEvent.click(screen.getByText('How do you use hooks?'));
    expect(handleNavigate).toHaveBeenCalledWith('1');
  });
});
