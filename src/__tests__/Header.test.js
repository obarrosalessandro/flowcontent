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
    expect(headerElement).toHaveClass('pt-4', 'pb-0', 'flex', 'justify-center');
  });
});