import { render, screen } from '@testing-library/react';
import App from './App';

test('renders words page heading', () => {
  render(<App />);
  const h1Element = screen.getByText(/Words Page/i);
  expect(h1Element).toBeInTheDocument()
});
