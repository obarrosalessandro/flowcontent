import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  test('renders FlowContent logo', () => {
    render(<Header />);
    const logoElement = screen.getByText(/FlowContent/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('has correct styling classes', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('pt-6', 'pb-2', 'flex', 'justify-center');
  });
});