import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-flow-green">FlowContent</h3>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          FlowContent © 2025. Todos os direitos reservados.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="http://alessandrobarros.com/sobre" target="_blank" rel="noopener noreferrer" className="text-[#2ECC71] hover:underline text-sm">Sobre</a>
          <span className="text-[#2ECC71]">|</span>
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