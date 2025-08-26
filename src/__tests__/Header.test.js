import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  test('renders nothing', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toBeNull();
  });
});