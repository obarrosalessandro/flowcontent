import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import ProcessSection from '../components/ProcessSection';
import About from '../components/About';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-green-500 mb-4">FlowContent</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                Crie Reels Que Vendem e Stories
                <br />
                Que Engajam em 5 Minutos
              </h1>
              <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                Sem tempo para criar conteúdo? <span className="font-bold text-flow-green">FlowContent</span> é o combo de agentes de IA que cria conteúdo estratégico para nutricionistas ocupadas.
              </p>
              <p className="text-xl text-gray-800 mb-10 font-semibold">
                <span className="text-flow-green">Entre na lista VIP</span> e seja um dos primeiros a transformar seu Instagram!
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