import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('toggleLess function toggles showLess state in App component', () => {
  const { queryByText } = render(<App />);

  // Initially, showLess should be false
  const lessContent = queryByText('less');
  expect(lessContent).toBeNull();

  // Find the button that triggers toggleLess
  const toggleLessButton = queryByText('more');

  // Click the "more" button
  fireEvent.click(toggleLessButton);

  // After clicking, showLess should be true
  const updatedLessContent = queryByText('less');
  expect(updatedLessContent).toBeTruthy();

  // Click the "more" button again
  fireEvent.click(toggleLessButton);

  // After clicking again, showLess should be false
  const lessContentAfterSecondClick = queryByText('Less Content');
  expect(lessContentAfterSecondClick).toBeNull();
});




