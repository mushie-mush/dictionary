import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import * as hooks from '../hooks/useSavedWords';

const mockSavedWordsContext = {
  savedWords: [],
  addSavedWords: vi.fn(),
  removeSavedWords: vi.fn(),
  isWordSaved: vi.fn(),
  totalSavedWords: 0,
};

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

it('renders navigation links correctly', () => {
  vi.spyOn(hooks, 'useSavedWords').mockReturnValue({
    ...mockSavedWordsContext,
    totalSavedWords: 0,
  });
  renderWithRouter(<Header />);

  const dictionaryLink = screen.getByText('Dictionary');
  const savedWordsLink = screen.getByText(/Saved Words/i);

  expect(dictionaryLink).toHaveAttribute('href', '/');
  expect(savedWordsLink).toHaveAttribute('href', '/saved');
});

it('displays correct number of saved words', () => {
  vi.spyOn(hooks, 'useSavedWords').mockReturnValue({
    ...mockSavedWordsContext,
    totalSavedWords: 5,
  });
  renderWithRouter(<Header />);

  const counter = screen.getByText('5');
  expect(counter).toHaveClass('bg-orange-600', 'rounded-full');
});

it('has correct header styling', () => {
  vi.spyOn(hooks, 'useSavedWords').mockReturnValue({
    ...mockSavedWordsContext,
    totalSavedWords: 0,
  });
  renderWithRouter(<Header />);

  const header = screen.getByRole('banner');
  expect(header).toHaveClass('fixed', 'flex', 'justify-between', 'w-full');
});
