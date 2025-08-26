import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#2ECC71] footer-logo">FlowContent</h2>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          FlowContent © 2025. Todos os direitos reservados.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-[#2ECC71] hover:underline text-sm">Sobre</a>
          <a 
            href="https://alessandrobarros.com/politica-de-privacidade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#2ECC71] hover:underline text-sm"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;