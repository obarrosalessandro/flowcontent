# FlowContent - Página de Captura de Leads

Página de captura de leads de alta performance para o FlowContent, um combo de agentes de IA focado em criar conteúdo estratégico para Instagram.

## 📋 Descrição

Esta landing page foi desenvolvida especificamente para nutricionistas com menos de 50.000 seguidores no Instagram, que reconhecem a importância do marketing digital, mas não têm tempo, conhecimento técnico ou criatividade para produzir conteúdo de forma consistente.

## 🚀 Tecnologias Utilizadas

- **React** com **Vite** para desenvolvimento rápido
- **Tailwind CSS** para estilização utility-first
- **React Hook Form** para validação de formulários
- **React Router DOM** para navegação
- **Axios** para requisições HTTP

## 📁 Estrutura do Projeto

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
│   ├── LandingPage.jsx
│   └── ThankYouPage.jsx
├── utils/              # Funções utilitárias
│   ├── validation.js
│   └── formatter.js
├── hooks/              # Hooks personalizados
└── styles/             # Estilos globais
    └── index.css
```

## 🛠️ Setup do Projeto

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Rodar em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Preview do build de produção:**
   ```bash
   npm run preview
   ```

## ✨ Funcionalidades

- **Formulário de captura de leads** com validação em tempo real e placeholder customizado
- **Máscara de telefone** automática no campo de WhatsApp
- **Formatação de nome** para primeiro e último nome
- **Envio para webhook** com dados formatados e parâmetros UTM
- **Botão flutuante de WhatsApp** para contato direto
- **Design responsivo** que funciona em mobile e desktop
- **Otimização de performance** para carregamento rápido

- **Scroll suave** entre seções
- **Página de agradecimento estratégica** com foco em engajamento e próximos passos

## 🧪 Testes

Para rodar os testes:
```bash
npm test
```

Para rodar os testes em modo watch:
```bash
npm run test:watch
```

## ☁️ Deploy

Este projeto está configurado para deploy automático na Cloudflare Pages.

1.  **Conecte o repositório:** No painel da Cloudflare Pages, crie um novo projeto e conecte-o a este repositório GitHub.
2.  **Configuração de Build:**
    *   **Framework Preset:** `Vite`
    *   **Build command:** `npm run build`
    *   **Publish directory:** `dist`
3.  **Domínio Personalizado:** Configure seu domínio personalizado (ex: `espera.alessandrobastos.com.br`) no painel da Cloudflare Pages.
4.  **Variáveis de Ambiente:** Adicione quaisquer variáveis de ambiente necessárias no painel da Cloudflare Pages.

Cada push para a branch `main` (ou a branch configurada) irá disparar um novo deploy automaticamente.

## 👨‍💻 Desenvolvimento

Para iniciar o ambiente de desenvolvimento:

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Inicie o servidor de desenvolvimento com `npm run dev`
4. Acesse `http://localhost:5173` no seu navegador

## 📈 Estratégia de Conversão

A estratégia de conversão desta landing page é multifacetada, focando em guiar o lead através de uma jornada otimizada:

-   **Página de Captura:**
    *   **Headline e Sub-headline:** Desenvolvidas para conectar com a dor do público-alvo (nutricionistas ocupadas) e apresentar a solução de forma clara e empática.
    *   **Formulário Otimizado:** Campos relevantes com validação em tempo real e placeholder customizado para facilitar o preenchimento.
    *   **Seções de Engajamento:** Explicação do processo e conexão humana para construir confiança.
    *   **Chamadas para Ação:** Botões claros e visíveis para guiar o usuário.

-   **Página de Obrigado (Estratégia Natanael Oliveira):**
    *   **Confirmação Imediata:** Mensagem clara de sucesso da inscrição e instruções para verificar e-mail/WhatsApp.
    *   **Oferta Única (Tripwire - Oculta):** Estrutura preparada para uma oferta de baixo custo e alto valor, visando a conversão imediata do lead em cliente. Atualmente oculta, mas pronta para ser ativada.
    *   **Engajamento Pós-Inscrição:** Direcionamento estratégico para a comunidade no Telegram e canal no YouTube, garantindo que o lead continue engajado mesmo sem a oferta imediata.

## ⚡ Performance

- Carregamento otimizado para menos de 2 segundos
- Código otimizado para SEO e acessibilidade
- Práticas de performance web implementadas

## 📖 Documentação

- [Análise e Recomendações Técnicas](./docs/project-management/ANALISE_E_RECOMENDACOES.md)
- [Documentação Técnica Completa](./docs/technical/TECHNICAL_DOCS.md)
- [Documentação do Repositório](./REPOSITORY.md)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

Alessandro Barros - [@alessandrobarros](https://twitter.com/alessandrobarros)

Link do Projeto: [https://espera.alessandrobarros.com](https://espera.alessandrobarros.com)
