import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ThankYouPage from '../pages/ThankYouPage';

describe('ThankYouPage Component', () => {
  test('deve renderizar a página de agradecimento com nome do usuário', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/obrigado', state: { name: 'João Silva' } }]}>
        <Routes>
          <Route path="/obrigado" element={<ThankYouPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(screen.getByText('Obrigado, João Silva!')).toBeInTheDocument();
    expect(screen.getByText(/Sua inscrição na lista VIP foi realizada com sucesso/)).toBeInTheDocument();
  });

  test('deve renderizar a página de agradecimento com nome padrão quando não fornecido', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/obrigado' }]}>
        <Routes>
          <Route path="/obrigado" element={<ThankYouPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(screen.getByText('Obrigado, visitante!')).toBeInTheDocument();
  });

  test('deve conter links para YouTube e Telegram', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/obrigado', state: { name: 'Maria' } }]}>
        <Routes>
          <Route path="/obrigado" element={<ThankYouPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(screen.getByText('Canal no YouTube')).toBeInTheDocument();
    expect(screen.getByText('Grupo no Telegram')).toBeInTheDocument();
  });
});