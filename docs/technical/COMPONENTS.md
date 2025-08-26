# Documentação dos Componentes

## Visão Geral

Esta documentação detalha cada componente do projeto FlowContent, incluindo suas props, estado, funções e integrações.

## Estrutura de Componentes

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Form.jsx
│   ├── ProcessSection.jsx
│   ├── About.jsx
│   └── WhatsAppButton.jsx
├── pages/
│   ├── LandingPage.jsx
│   └── ThankYouPage.jsx
```

## Componentes

### Header.jsx

#### Descrição
Componente de cabeçalho atualmente não utilizado e oculto (`display: none`). Pode ser ativado para exibir um logo ou navegação.

#### Props
Nenhuma prop específica.

#### Estado
Nenhum estado local.

#### Funções
Nenhuma função específica.

#### Estilização
- Atualmente oculto. Se ativado, utilizaria classes do Tailwind CSS.

#### Importações
```javascript
import React from 'react';
```

#### Código Base
```jsx
import React from 'react';

const Header = () => {
  return (
    <div style={{ display: 'none' }}>
    </div>
  );
};

export default Header;
```

### Footer.jsx

#### Descrição
Componente de rodapé que exibe informações de copyright, links importantes e o logo textual "FlowContent".

#### Props
Nenhuma prop específica.

#### Estado
Nenhum estado local.

#### Funções
Nenhuma função específica.

#### Estilização
- Utiliza classes do Tailwind CSS.
- Cores da marca para o logo textual "FlowContent".
- Links e texto em tons de cinza.

#### Importações
```javascript
import React from 'react';
```

#### Código Base
```jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-flow-green">FlowContent</h3>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          FlowContent © 2025. Todos os direitos reservados.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="#" className="text-[#2ECC71] hover:underline text-sm">Sobre</a>
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
```

### Form.jsx

#### Descrição
Componente principal de captura de leads com validação em tempo real, envio para webhook e placeholder customizado para o campo de nome.

#### Props
Nenhuma prop específica.

#### Estado
- `isSubmitting`: Boolean - Indica se o formulário está sendo enviado
- `submitSuccess`: Boolean - Indica se o formulário foi enviado com sucesso
- `submitError`: String - Mensagem de erro, se houver

#### Hooks
- `useForm`: Hook personalizado para manipulação do formulário

#### Funções
- `handleSubmit`: Função para lidar com o envio do formulário
- `formatPhoneInput`: Função para formatar o input de telefone em tempo real

#### Estilização
- Utiliza classes do Tailwind CSS.
- Estilos específicos para estados de validação.
- Animações de transição.
- Cores do botão de envio: `bg-[#58D68D]` (verde mais claro) para o estado habilitado e `bg-[#2ECC71]` (verde principal) para o estado desabilitado.

#### Importações
```javascript
import React from 'react';
import { useForm } from '../hooks/useForm';
import { validateEmail, validatePhone, formatPhone, formatName } from '../utils/validation';
import { formatPhoneNumberForSubmission, formatNameForSubmission, getUTMParameters } from '../utils/formatter';
```

#### Código Base
```jsx
const Form = () => {
  // Implementação do formulário
  // Inclui validações, formatações e envio para webhook
};

export default Form;
```

### ProcessSection.jsx

#### Descrição
Componente que explica como o FlowContent transforma o Instagram em uma máquina de leads.

#### Props
Nenhuma prop específica.

#### Estado
Nenhum estado local.

#### Funções
Nenhuma função específica.

#### Estilização
- Utiliza classes do Tailwind CSS
- Layout em cards para cada passo do processo
- Ícones para ilustrar os passos

#### Importações
```javascript
import React from 'react';
```

#### Código Base
```jsx
const ProcessSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Como o FlowContent Transforma Seu Instagram em uma Máquina de Leads</h2>
        {/* Passos do processo */}
      </div>
    </section>
  );
};

export default ProcessSection;
```

### About.jsx

#### Descrição
Componente que apresenta o criador do produto, estabelecendo conexão humana e autoridade.

#### Props
Nenhuma prop específica.

#### Estado
Nenhum estado local.

#### Funções
Nenhuma função específica.

#### Estilização
- Utiliza classes do Tailwind CSS
- Layout com imagem e texto
- Cores da marca para destaques

#### Importações
```javascript
import React from 'react';
import AlessandroImage from '../assets/images/alessandro-barros.jpg';
```

#### Código Base
```jsx
const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Imagem e conteúdo sobre o criador */}
        </div>
      </div>
    </section>
  );
};

export default About;
```

### WhatsAppButton.jsx

#### Descrição
Componente de botão flutuante para contato direto via WhatsApp.

#### Props
Nenhuma prop específica.

#### Estado
Nenhum estado local.

#### Funções
- `handleWhatsAppClick`: Função para abrir o link do WhatsApp

#### Estilização
- Botão flutuante fixo na tela
- Estilos responsivos
- Animações de hover

#### Importações
```javascript
import React from 'react';
```

#### Código Base
```jsx
const WhatsAppButton = () => {
  const phoneNumber = '5522999999999';
  const message = 'Olá, gostaria de saber mais sobre o FlowContent!';
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      aria-label="Contato via WhatsApp"
    >
      {/* Ícone do WhatsApp */}
    </button>
  );
};

export default WhatsAppButton;
```

## Páginas

### LandingPage.jsx

#### Descrição
Página principal que integra todos os componentes da landing page.

#### Props
Nenhuma prop específica.

#### Estado
Nenhum estado local.

#### Funções
Nenhuma função específica.

#### Estilização
- Utiliza classes do Tailwind CSS
- Layout responsivo
- Animações de entrada

#### Importações
```javascript
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
import ProcessSection from '../components/ProcessSection';
import About from '../components/About';
import WhatsAppButton from '../components/WhatsAppButton';
```

#### Código Base
```jsx
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Seção principal da landing page */}
        <ProcessSection />
        <About />
        <Form />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
```

### ThankYouPage.jsx

#### Descrição
Página de agradecimento exibida após o envio bem-sucedido do formulário.

#### Props
- `location`: Object - Objeto de localização do React Router com estado

#### Estado
Nenhum estado local.

#### Funções
Nenhuma função específica.

#### Estilização
- Utiliza classes do Tailwind CSS
- Layout centrado com mensagem de sucesso
- Links para redes sociais

#### Importações
```javascript
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
```

#### Código Base
```jsx
const ThankYouPage = () => {
  const location = useLocation();
  const { name } = location.state || { name: 'Interessado' };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Obrigado, {name}!</h1>
          <p className="text-xl mb-8">Sua inscrição foi recebida com sucesso.</p>
          {/* Links para redes sociais */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
```