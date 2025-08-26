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

- **Formulário de captura de leads** com validação em tempo real
- **Máscara de telefone** automática no campo de WhatsApp
- **Formatação de nome** para primeiro e último nome
- **Envio para webhook** com dados formatados e parâmetros UTM
- **Botão flutuante de WhatsApp** para contato direto
- **Design responsivo** que funciona em mobile e desktop
- **Otimização de performance** para carregamento rápido
- **Animação de digitação** na headline principal
- **Scroll suave** entre seções
- **Página de agradecimento** personalizada

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

Para fazer deploy na Vercel:

1. Crie um novo projeto na Vercel
2. Conecte com o repositório GitHub
3. Configure o domínio personalizado: `espera.alessandrobastos.com.br`
4. Adicione as variáveis de ambiente necessárias

## 👨‍💻 Desenvolvimento

Para iniciar o ambiente de desenvolvimento:

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Inicie o servidor de desenvolvimento com `npm run dev`
4. Acesse `http://localhost:5173` no seu navegador

## 📈 Estratégia de Conversão

A página foi desenvolvida com foco em conversão, utilizando:

- **Headline impactante** que conecta diretamente com a dor do público
- **Sub-headline de conexão** que mostra empatia e apresenta a solução
- **Formulário otimizado** com campos relevantes e validação clara
- **Seção de processo** que explica como funciona de forma simples
- **Conexão humana** com o criador do produto
- **Chamadas claras para ação** em pontos estratégicos

## ⚡ Performance

- Carregamento otimizado para menos de 2 segundos
- Código otimizado para SEO e acessibilidade
- Práticas de performance web implementadas

## 📖 Documentação

- [Análise e Recomendações Técnicas](./docs/project-management/ANALISE_E_RECOMENDACOES.md)
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
