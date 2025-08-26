import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Briefing Personalizado',
      description: 'Após fechar o plano, agendamos uma call online com nosso agente de IA de briefing pra entender teu negócio de nutrição.'
    },
    {
      number: '02',
      title: 'Modelo de Negócio',
      description: 'Definimos ou ajustamos teu modelo de negócios, sob medida pra ti.'
    },
    {
      number: '03',
      title: 'Posicionamento Único',
      description: 'Criamos teu posicionamento único pra te destacar como autoridade.'
    },
    {
      number: '04',
      title: 'Agentes de IA Personalizados',
      description: 'Desenvolvemos teus agentes de IA personalizados pra Reels, Stories e mais.'
    },
    {
      number: '05',
      title: 'Treinamento Prático',
      description: 'Te ensinamos a usar em uma call simples, com metodologia testada. Tu escolhe as ferramentas – nós te orientamos!'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Como o FlowContent Pode Transformar Seu<br className="hidden md:block" /> Instagram em uma Máquina de Leads
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Descubra os 5 passos que vão transformar sua presença no Instagram e atrair mais clientes qualificados
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.slice(0, 3).map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2ECC71] flex items-center justify-center text-white font-bold text-xl mr-4">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {steps.slice(3).map((step, index) => (
            <div 
              key={index + 3} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2ECC71] flex items-center justify-center text-white font-bold text-xl mr-4">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;