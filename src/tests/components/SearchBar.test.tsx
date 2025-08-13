import { render, screen } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';
import type { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('search bar component', () => {
  const user = userEvent.setup();

  const renderWithRouter = (component: ReactElement) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
  };

  it('renders search input field', () => {
    renderWithRouter(<SearchBar isLoading={false} />);

    const searchInput = screen.getByLabelText('What word are you looking for?');
    expect(searchInput).toBeInTheDocument();
  });

  it("displays user's input when typing", async () => {
    renderWithRouter(<SearchBar isLoading={false} />);
    const searchInput = screen.getByLabelText('What word are you looking for?');

    await user.type(searchInput, 'test');
    expect(searchInput).toHaveDisplayValue('test');
  });

  it('sets keyword query parameter when submitting', async () => {
    renderWithRouter(<SearchBar isLoading={false} />);
    const searchInput = screen.getByLabelText('What word are you looking for?');

    await user.type(searchInput, 'test');
    expect(searchInput).toHaveDisplayValue('test');

    await user.keyboard('[Enter]');
    expect(location.search).toBe('?keyword=test');
  });

  it('displays loading icon when searching for entries', () => {
    renderWithRouter(<SearchBar isLoading={true} />);

    const loadingIcon = screen.getByTestId('loading-icon');
    expect(loadingIcon).toBeInTheDocument();
  });
});
