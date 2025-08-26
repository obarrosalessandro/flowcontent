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
    
    expect(screen.getByPlaceholderText('Seu nome completo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Seu melhor e-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('(00) 00000-0000')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Qual é seu maior desafio ao criar conteúdo para o Instagram?')).toBeInTheDocument();
    expect(screen.getByText(/Concordo em receber comunicações sobre o FlowContent e com a/)).toBeInTheDocument();
  });

  test('deve ter um botão de submit', () => {
    render(<Form />);
    
    expect(screen.getByText('Entrar na Lista de Espera VIP')).toBeInTheDocument();
  });
});