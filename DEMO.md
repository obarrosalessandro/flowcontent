# Demonstração do Projeto FlowContent

## Visão Geral

Esta é uma demonstração da página de captura de leads para o FlowContent, um combo de agentes de IA focado em criar conteúdo estratégico para Instagram.

## Como Executar a Demonstração

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Rodar em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar no navegador:**
   Abra `http://localhost:5173` no seu navegador

## Funcionalidades Demonstradas

### 1. Design Responsivo
- Layout otimizado para desktop e dispositivos móveis
- Cores da marca aplicadas (#2ECC71, #27AE60, #219653)
- Tipografia Montserrat

### 2. Formulário de Captura de Leads
- Validação em tempo real dos campos
- Máscara automática para telefone (WhatsApp)
- Checkbox de aceite da Política de Privacidade (obrigatório)
- Envio estruturado para webhook
- Feedback visual do estado do botão de envio
- Mensagem de sucesso após envio

### 3. Tratamento de Dados
- Formatação de nome (apenas primeiro e último)
- Formatação de telefone para padrão E.164 (+55XX9XXXXXXXX)
- Captura automática de parâmetros UTM da URL

### 4. Componentes Interativos
- Botão flutuante de WhatsApp
- Seção de processo em passos
- Seção "Sobre" com conexão humana

### 5. Performance
- Carregamento otimizado
- Código modular e bem organizado
- Práticas de performance web aplicadas

## Testes

Para executar os testes:
```bash
npm test
```

## Build para Produção

Para gerar o build de produção:
```bash
npm run build
```

## Tecnologias Utilizadas

- **React** com **Vite** para desenvolvimento rápido
- **Tailwind CSS** para estilização
- **React Hook Form** para validação de formulários
- **Jest** e **Testing Library** para testes

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Form.jsx
│   ├── ProcessSection.jsx
│   ├── About.jsx
│   └── WhatsAppButton.jsx
├── pages/              # Páginas da aplicação
│   └── LandingPage.jsx
├── utils/              # Funções utilitárias
│   ├── validation.js
│   └── formatter.js
├── hooks/              # Hooks personalizados
│   └── useForm.js
├── __tests__/          # Testes unitários e de integração
│   ├── utils.test.js
│   └── Header.test.js
└── styles/             # Estilos globais
    └── index.css
```

## Considerações Finais

Esta demonstração mostra uma página de captura de leads de alta performance, otimizada para conversão e desenvolvida com as melhores práticas de desenvolvimento front-end.

A página está pronta para ser implantada na Vercel com o domínio `espera.alessandrobastos.com.br` seguindo as instruções detalhadas no arquivo `docs.md`.