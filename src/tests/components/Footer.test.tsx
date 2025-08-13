import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('footer component', () => {
  it('renders a link to Free Dictionary API', () => {
    render(<Footer />);
    expect(screen.getByRole('link')).toHaveTextContent('Free Dictionary API');
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://freedictionaryapi.com/'
    );
  });
});
