import React from 'react';

const About = () => {
  const scrollToTop = () => {
    // Calcula a distância total a ser percorrida
    const startPosition = window.pageYOffset;
    const distance = -startPosition;
    const duration = 1000; // 1 segundo
    let start = null;

    // Função de animação
    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Função de easing para suavizar o movimento
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    // Inicia a animação
    requestAnimationFrame(animation);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5 flex justify-center">
              <img 
                src="https://alessandrobarros.com/wp-content/uploads/2024/12/Alessandro-Barros.png" 
                alt="Alessandro Barros" 
                className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm transition-all duration-300 hover:shadow-xl"
                style={{ maxWidth: '380px', height: 'auto' }}
                loading="lazy"
              />
            </div>
            
            <div className="md:w-3/5">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Oi, sou Alessandro Barros...</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Como nutricionista empreendedor, entendo os desafios de criar conteúdo relevante para o Instagram. Por isso, desenvolvi o FlowContent: uma solução de inteligência artificial especializada em nutrição para transformar seu conhecimento em conteúdo que engaja e converte.
                </p>
              </div>
              
              <button 
                onClick={scrollToTop}
                className="mt-8 bg-[#2ECC71] hover:bg-[#27AE60] text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                Quero Transformar Meu Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;