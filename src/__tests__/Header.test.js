import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  test('renders nothing', () => {
    const { container } = render(<Header />);
    // Verifica que o container está vazio ou tem display none
    expect(container.firstChild).toHaveStyle('display: none');
  });
});