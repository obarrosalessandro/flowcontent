import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import Form from '../components/Form';

// Mock do useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Mock do fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
);

describe('Form Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve renderizar todos os campos do formulário', () => {
    render(<Form />);
    
    expect(screen.getByPlaceholderText('Nome completo como deseja ser chamado')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('seu@email.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('(00) 00000-0000')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Descreva seu maior desafio...')).toBeInTheDocument();
    expect(screen.getByText(/Concordo em receber comunicações sobre o FlowContent e com a/)).toBeInTheDocument();
  });

  test('deve ter um botão de submit', () => {
    render(<Form />);
    
    expect(screen.getByText('Entrar na Lista de Espera VIP')).toBeInTheDocument();
  });
});