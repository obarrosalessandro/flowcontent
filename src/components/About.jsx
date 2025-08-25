import React from 'react';

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto flex items-center justify-center text-gray-500">
              Foto de Alessandro Barros
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">Oi, sou Alessandro Barros...</h2>
          
          <div className="text-left max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">
              ...e eu sei exatamente como é a rotina de uma nutricionista empreendedora. São consultas, atendimentos, preparação de materiais e, claro, a pressão constante de manter um conteúdo relevante no Instagram.
            </p>
            
            <p className="text-gray-700 mb-4">
              Passando por essa jornada, percebi que a maioria das nutricionistas tem conhecimento técnico excepcional, mas enfrenta um gigantesco desafio criativo: transformar esse conhecimento em conteúdo que engaje e converta.
            </p>
            
            <p className="text-gray-700 mb-4">
              Foi pensando nisso que desenvolvi o FlowContent: uma solução que combina inteligência artificial especializada em nutrição com estratégia de conteúdo comprovada. Meu objetivo é libertar você das tarefas criativas para que possa focar no que faz de melhor: transformar vidas através da nutrição.
            </p>
            
            <p className="text-gray-700">
              Com o FlowContent, você terá agentes de IA que entendem sua área e criam conteúdo estratégico para Reels, Stories e carrosséis automaticamente. Tudo isso com a sua voz e autoridade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;