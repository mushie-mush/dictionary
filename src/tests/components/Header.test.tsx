import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';
import { MemoryRouter } from 'react-router-dom';
import * as hooks from '../../hooks/useSavedWords';
import type { ReactElement } from 'react';

describe('header component', () => {
  const mockSavedWordsContext = {
    savedWords: [],
    addSavedWords: vi.fn(),
    removeSavedWords: vi.fn(),
    isWordSaved: vi.fn(),
    totalSavedWords: 0,
  };

  const renderWithRouter = (component: ReactElement) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  it('renders navigation links correctly', () => {
    renderWithRouter(<Header />);
    const dictionaryLink = screen.getByText('Dictionary');
    const savedWordsLink = screen.getByText('Saved Words');

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
});
