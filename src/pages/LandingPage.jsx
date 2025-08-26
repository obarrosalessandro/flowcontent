import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import ProcessSection from '../components/ProcessSection';
import About from '../components/About';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const LandingPage = () => {
  const fullText = "Crie Reels Que Vendem e Stories Que Engajam em 5 Minutos";
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50); // Velocidade de digitação (50ms por caractere)

      return () => clearTimeout(timeout);
    } else {
      // Quando terminar de escrever, remove o cursor após 1 segundo
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, 1000);
      
      return () => clearTimeout(cursorTimeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-[#2ECC71] animate-pulse-glow">FlowContent</h1>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 min-h-[120px] flex items-center justify-center">
                {displayText}
                {showCursor && <span className="ml-1 animate-pulse">|</span>}
              </h1>
              <p className="text-xl text-gray-700 mb-10">
                FlowContent é o combo de agentes de IA que cria conteúdo estratégico pra nutricionistas ocupadas. 
                Entre na lista VIP e seja um dos primeiros a transformar seu Instagram!
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <Form />
            </div>
          </div>
        </section>
        
        <ProcessSection />
        <About />
      </main>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default LandingPage;