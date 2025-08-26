# Documentação Técnica Completa - FlowContent

## Visão Geral

Esta é a documentação técnica completa da página de captura de leads do FlowContent, um sistema que cria conteúdo estratégico para Instagram usando agentes de IA.

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis da interface
│   ├── Header.jsx       # Cabeçalho com logo da marca
│   ├── Footer.jsx       # Rodapé da página
│   ├── Form.jsx         # Formulário de captura de leads
│   ├── ProcessSection.jsx # Seção que explica como o FlowContent funciona
│   ├── About.jsx        # Seção sobre o criador do produto
│   └── WhatsAppButton.jsx # Botão flutuante de contato via WhatsApp
├── pages/               # Páginas da aplicação
│   ├── LandingPage.jsx  # Página principal que integra todos os componentes
│   └── ThankYouPage.jsx # Página de agradecimento após envio do formulário
├── utils/               # Funções utilitárias
│   ├── validation.js    # Funções de validação e formatação de dados
│   └── formatter.js     # Funções de formatação para envio de dados
├── hooks/               # Hooks personalizados
│   └── useForm.js       # Hook para manipulação de formulários
├── __tests__/           # Testes unitários e de integração
│   ├── setup.js         # Setup dos testes
│   ├── jest.setup.js    # Configuração do Jest
│   ├── utils.test.js    # Testes das funções utilitárias
│   ├── Header.test.js   # Testes do componente Header
│   ├── Form.test.js     # Testes do componente Form
│   └── ThankYouPage.test.js # Testes da página de agradecimento
├── assets/              # Recursos estáticos (imagens, ícones, etc.)
├── App.jsx              # Componente principal da aplicação
└── main.jsx             # Ponto de entrada da aplicação
```

## Tecnologias Utilizadas

### Framework e Build
- **React** - Biblioteca para construção de interfaces de usuário
- **Vite** - Ferramenta de build rápida com Hot Module Replacement
- **React Router DOM** - Roteamento entre páginas

### Estilização
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Processador de CSS

### Formulários e Validação
- **React Hook Form** - Biblioteca para validação de formulários
- **Custom validation functions** - Funções personalizadas de validação

### Requisições HTTP
- **Axios** - Cliente HTTP para requisições

### Testes
- **Jest** - Framework de testes
- **React Testing Library** - Biblioteca para testes de componentes React
- **JSDOM** - Ambiente DOM para testes Node.js

## Componentes

### Header.jsx
Componente de cabeçalho que exibe o logo da marca FlowContent.

### Form.jsx
Componente principal de captura de leads com as seguintes funcionalidades:
- Validação em tempo real dos campos
- Máscara automática para telefone (WhatsApp)
- Formatação de nome (apenas primeiro e último)
- Checkbox de aceite da Política de Privacidade (obrigatório)
- Envio estruturado para webhook
- Feedback visual do estado do botão de envio
- Mensagem de sucesso após envio

### ProcessSection.jsx
Seção que explica como o FlowContent transforma o Instagram em uma máquina de leads.

### About.jsx
Seção sobre o criador do produto, estabelecendo conexão humana e autoridade.

### WhatsAppButton.jsx
Botão flutuante de contato direto via WhatsApp.

### Footer.jsx
Rodapé com links importantes e informações de copyright.

### LandingPage.jsx
Página principal que integra todos os componentes mencionados acima.

### ThankYouPage.jsx
Página de agradecimento exibida após o envio bem-sucedido do formulário.

## Funções Utilitárias

### validation.js

#### formatPhone(value)
Formata números de telefone brasileiros:
- 10 dígitos: (XX) XXXX-XXXX
- 11 dígitos: (XX) XXXXX-XXXX

#### validatePhone(phone)
Valida se um número de telefone está no formato correto: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX

#### validateEmail(email)
Valida se um email está no formato correto usando regex.

#### formatName(name)
Formata um nome completo para exibir apenas o primeiro e último nome.

### formatter.js

#### formatPhoneNumberForSubmission(phone)
Formata um número de telefone para o padrão E.164 internacional (+55XXXXXXXXX).

#### formatNameForSubmission(name)
Formata um nome para envio, mantendo apenas o primeiro e último nome.

#### getUTMParameters()
Captura automaticamente os parâmetros UTM da URL para tracking de marketing.

## Hooks Personalizados

### useForm.js
Hook personalizado para manipulação de formulários com:
- Gerenciamento de estado
- Validação
- Submissão
- Tratamento de erros

## Testes

### Estratégia de Testes
- Testes unitários para funções utilitárias
- Testes de componentes para verificar renderização e comportamento
- Testes de integração para o fluxo completo do formulário

### Executando Testes
```bash
# Todos os testes
npm test

# Testes em modo watch
npm run test:watch

# Testes com cobertura
npm run test:coverage
```

### Cobertura Atual
- **Funções utilitárias**: ~73% de cobertura
- **Componentes**: ~14-24% de cobertura
- **Páginas**: ~17-21% de cobertura

## Configurações

### package.json
Contém as dependências do projeto e scripts de desenvolvimento.

### vite.config.js
Configuração do Vite para build e desenvolvimento.

### tailwind.config.js
Configuração do Tailwind CSS com cores da marca e tipografia personalizada.

### postcss.config.js
Configuração do PostCSS.

### jest.config.cjs
Configuração do Jest para testes.

### babel.config.json
Configuração do Babel para transpilação de código.

## Variáveis de Ambiente
O projeto não requer variáveis de ambiente para funcionar, mas pode ser configurado para ambientes de desenvolvimento e produção conforme necessário.

## Deploy

### Plataforma
O projeto está configurado para deploy na Vercel, com deploy automático via GitHub Actions.

### Domínio
O projeto é hospedado no domínio `espera.alessandrobastos.com.br`.

### Processo de Deploy
1. Push para a branch `main`
2. GitHub Actions automaticamente faz o deploy na Vercel
3. O Vercel constrói e publica a aplicação

## Manutenção

### Atualizações de Conteúdo
- Modifique os arquivos JSX nos componentes conforme necessário
- Faça push para o repositório no GitHub
- O Vercel fará deploy automático após o push

### Atualizações de Estilo
- Modifique os arquivos CSS ou as classes do Tailwind
- As mudanças terão efeito imediato após o deploy

### Monitoramento
- Utilize o painel da Vercel para monitorar performance e erros
- Configure alertas conforme necessário

### Backup
- Mantenha o repositório no GitHub atualizado
- O Vercel mantém histórico de deploys

## Troubleshooting

### Problemas Comuns

1. **ReferenceError: TextEncoder is not defined**
   - Solução: Verifique se o `TextEncoder` e `TextDecoder` estão adicionados ao arquivo `jest.setup.js`

2. **Cannot find module**
   - Solução: Verifique os caminhos dos imports nos arquivos de teste

3. **Unexpected token**
   - Solução: Verifique a configuração do Babel no `babel.config.json`

## Próximos Passos

1. **Melhorias de SEO**
   - Implementar React Helmet para meta tags dinâmicas
   - Adicionar estrutura semântica HTML

2. **Otimizações de Performance**
   - Code splitting para componentes pesados
   - Memoização de componentes e funções

3. **Expansão dos Testes**
   - Aumentar a cobertura de testes para > 80%
   - Adicionar testes E2E com Cypress ou Playwright

4. **Internacionalização**
   - Implementar suporte a múltiplos idiomas se necessário

5. **Melhorias na Estrutura**
   - Refatorar para organização por funcionalidades
   - Criar arquivos index.js para facilitar importações