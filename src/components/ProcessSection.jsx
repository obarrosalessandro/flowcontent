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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Como o FlowContent Transforma Seu Instagram em uma Máquina de Leads
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex mb-12 last:mb-0">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#2ECC71] flex items-center justify-center text-white font-bold text-xl mr-6">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;