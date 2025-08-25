import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          FlowContent © 2025. Todos os direitos reservados. |{' '}
          <a href="#" className="text-[#2ECC71] hover:underline">Sobre</a> |{' '}
          <a 
            href="https://alessandrobarros.com/politica-de-privacidade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#2ECC71] hover:underline"
          >
            Política de Privacidade
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;