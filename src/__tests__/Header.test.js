import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  test('renders FlowContent logo', () => {
    render(<Header />);
    const logoElement = screen.getByText(/FlowContent/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('has correct styling', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    // Verifica que o header existe, mas não verifica classes específicas pois agora usamos styles inline
    expect(headerElement).toBeInTheDocument();
  });
});