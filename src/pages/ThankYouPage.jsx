import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYouPage = () => {
  const location = useLocation();
  const { name } = location.state || { name: 'visitante' };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-lg p-8 shadow-lg">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#2ECC71]">FlowContent</h1>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Obrigado, {name}!
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              Sua inscrição na lista VIP foi realizada com sucesso. Em breve você receberá um e-mail com todas as informações sobre o FlowContent.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <a 
                href="https://www.youtube.com/@alessandrobarros" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                Canal no YouTube
              </a>
              
              <a 
                href="https://l.alessandrobarros.com/telegram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                Grupo no Telegram
              </a>
            </div>
          </div>
        </div>
      </main>
      
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
    </div>
  );
};

export default ThankYouPage;