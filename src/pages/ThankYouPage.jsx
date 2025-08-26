import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYouPage = () => {
  const location = useLocation();
  const { name } = location.state || { name: 'visitante' };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            
            <h2 className="text-3xl font-bold text-green-500 mb-4">FlowContent</h2>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Obrigado, {name}!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Sua inscrição na lista VIP foi confirmada! Fique de olho no seu e-mail e<br />WhatsApp, pois enviaremos os próximos passos e informações exclusivas por lá.
            </p>
            
            {/* --- Secondary Actions --- */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Seu próximo passo: Junte-se à nossa comunidade!</h3>
              <p className="text-gray-600 mb-6">Entre em nosso grupo exclusivo no Telegram para não perder nenhuma novidade<br />e receber dicas que não compartilhamos em nenhum outro lugar.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://l.alessandrobarros.com/telegram" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>
                  Entrar no Grupo do Telegram
                </a>
                <a 
                  href="https://www.youtube.com/@alessandrobarros" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  Ver Canal no YouTube
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYouPage;