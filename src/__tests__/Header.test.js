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
    const logoElement = screen.getByText(/FlowContent/i);
    // Verifica que o elemento existe e tem o estilo correto
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveStyle({
      color: 'rgb(46, 204, 113)',
      fontSize: '2.25rem',
      fontWeight: '700',
      margin: '0px',
      padding: '0px'
    });
  });
});