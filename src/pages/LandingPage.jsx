import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import ProcessSection from '../components/ProcessSection';
import About from '../components/About';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Crie Reels Que Vendem e Stories Que Engajam em 5 Minutos
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