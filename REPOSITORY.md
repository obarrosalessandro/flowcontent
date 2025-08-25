# Instruções do Repositório FlowContent

## Estrutura do Repositório

```
flowcontent-captura/
├── src/                    # Código fonte da aplicação
│   ├── components/         # Componentes reutilizáveis
│   ├── pages/              # Páginas da aplicação
│   ├── utils/              # Funções utilitárias
│   ├── hooks/              # Hooks personalizados
│   ├── __tests__/          # Testes unitários e de integração
│   ├── styles/             # Estilos globais
│   ├── App.jsx             # Componente principal da aplicação
│   └── index.css           # Estilos globais
├── public/                 # Arquivos públicos
├── docs.md                 # Documentação completa do projeto
├── DEMO.md                 # Instruções para demonstração
├── REPOSITORY.md           # Instruções do repositório
├── README.md               # Descrição do projeto e setup
├── package.json            # Dependências e scripts
├── tailwind.config.js      # Configuração do Tailwind CSS
├── postcss.config.js       # Configuração do PostCSS
├── jest.config.js          # Configuração do Jest
└── vite.config.js          # Configuração do Vite
```

## Comandos Disponíveis

### Desenvolvimento
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

### Testes
```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch
```

### Linting
```bash
# Executar ESLint
npm run lint
```

## Desenvolvimento Local

1. **Clonar o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd flowcontent-captura
   ```

2. **Instalar dependências:**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acessar a aplicação:**
   Abra `http://localhost:5173` no seu navegador

## Estrutura de Componentes

### Componentes Principais
- `Header.jsx`: Cabeçalho com logo da marca
- `Form.jsx`: Formulário de captura de leads com validação
- `ProcessSection.jsx`: Seção que explica como o FlowContent funciona
- `About.jsx`: Seção sobre o criador do produto
- `WhatsAppButton.jsx`: Botão flutuante de contato via WhatsApp
- `Footer.jsx`: Rodapé com links importantes

### Páginas
- `LandingPage.jsx`: Página principal que integra todos os componentes

### Utilitários
- `validation.js`: Funções de validação de email, telefone e formatação
- `formatter.js`: Funções de formatação de dados para envio

### Hooks
- `useForm.js`: Hook personalizado para manipulação de formulários

## Testes

Os testes estão localizados na pasta `src/__tests__/` e utilizam:
- Jest para testes unitários
- Testing Library para testes de componentes React

### Estratégia de Testes
1. **Testes unitários**: Funções utilitárias de formatação e validação
2. **Testes de componentes**: Renderização e comportamento dos componentes
3. **Testes de integração**: Fluxo completo do formulário

## Deploy

Para informações detalhadas sobre deploy, consulte o arquivo `docs.md`.

## Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

## Licença

Este projeto é privado e pertence à FlowContent.