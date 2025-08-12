import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import Footer from '../components/Footer';

it('renders a link to Free Dictionary API', () => {
  render(<Footer />);
  expect(screen.getByRole('link')).toHaveTextContent('Free Dictionary API');
  expect(screen.getByRole('link')).toHaveAttribute(
    'href',
    'https://freedictionaryapi.com/'
  );
});
