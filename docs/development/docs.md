# Documentação do Projeto FlowContent - Página de Captura de Leads

## Fase 0: Pesquisa, Estratégia e Planejamento

### Análise de Mercado e Público-Alvo

#### Pesquisa Profunda do Público-Alvo
**Público-Alvo**: Nutricionistas com menos de 50.000 seguidores no Instagram

**Principais Dores e Frustrações**:
- Falta de tempo para criar conteúdo consistente
- Dificuldade em gerar ideias criativas para posts
- Medo de parecer "vendedores" demais no conteúdo
- Resultados insatisfatórios apesar do esforço
- Falta de conhecimento técnico sobre estratégias do Instagram
- Sobrecarga de informações sobre marketing digital

**Desejos e Objetivos**:
- Crescer sua autoridade como nutricionista
- Conectar-se melhor com seu público
- Gerar mais leads através do Instagram
- Economizar tempo na criação de conteúdo
- Ter um conteúdo que realmente engaje

**Linguagem e Tom**:
O tom da comunicação deve ser:
- Profissional, mas empático
- Encorajador e inspirador
- Direto e objetivo
- Com linguagem acessível (sem jargões técnicos)
- Focado em resultados e transformação

### Análise de Copywriting Estratégico

#### Princípios Aplicados
- **Simplicidade de Ryan Deiss**: Mensagens claras e diretas que falam diretamente para a dor do público
- **Clareza de Ramit Sethi**: Foco em benefícios reais e transformação concreta
- **Estrutura AIDA**: Atenção, Interesse, Desejo e Ação claramente definidos
- **Foco em Benefício**: Cada elemento da copy deve responder "O que isso faz por mim?"

#### Estratégia de Conversão
1. **Headline Impactante**: Gera atenção imediata conectando com a dor principal
2. **Sub-headline de Conexão**: Cria empatia mostrando que entendemos o público
3. **Prova Social e Autoridade**: Estabelece credibilidade
4. **Apresentação da Solução**: Mostra como o produto resolve a dor
5. **Chamada Clara para Ação**: Direciona para o próximo passo

### Plano de Ação e Documentação

#### Tecnologias Escolhidas

**React com Vite**
- Justificativa: Vite oferece build mais rápido e HMR (Hot Module Replacement) superior, ideal para desenvolvimento ágil. React proporciona componentização eficiente e é amplamente adotado no mercado.

**Tailwind CSS**
- Justificativa: Permite estilização utility-first, acelerando o desenvolvimento e garantindo consistência visual. Facilita a manutenção e responsividade.

**React Hook Form**
- Justificativa: Biblioteca leve e performática para validação de formulários, com excelente DX (Developer Experience) e suporte a validações complexas.

**Axios**
- Justificativa: Cliente HTTP confiável com suporte a interceptors, transformação de dados e tratamento de erros simplificado.

#### Estrutura de Pastas

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
└── styles/             # Estilos globais
    └── index.css
```

#### Critérios de Sucesso
1. **Performance**: Carregamento em < 2 segundos
2. **Taxa de Conversão**: > 5% de conversão no formulário
3. **Responsividade**: Funcionamento perfeito em mobile e desktop
4. **Acessibilidade**: Nível AA das WCAG
5. **Manutenibilidade**: Código limpo, documentado e testável

## Fase 1: Refinamento da Copy e Estrutura da Página

### Estrutura Aprimorada

#### Header
- Logo textual "FlowContent" com tipografia moderna
- Design clean e profissional

#### Seção Principal (Dobra 1)
**Headline Otimizada**: "Crie Reels Que Vendem e Stories Que Engajam em 5 Minutos"
**Sub-headline Otimizada**: "FlowContent é o combo de agentes de IA que cria conteúdo estratégico pra nutricionistas ocupadas. Entre na lista VIP e seja um dos primeiros a transformar seu Instagram!"

#### Seção de Processo
**Título**: "Como o FlowContent Transforma Seu Instagram em uma Máquina de Leads"
- Passos simplificados com foco em benefícios
- Linguagem direta e empática

#### Seção Sobre
- Conexão humana com o criador
- Autoridade estabelecida através de resultados
- Empatia com a dor do público

### Mudanças na Copy - Justificativa

1. **Headline**: "Crie Reels Que Vendem e Stories Que Engajam em 5 Minutos"
   - Justificativa: Mais específico sobre os benefícios (vendas e engajamento) e inclui um número concreto (5 minutos) que gera credibilidade

2. **Sub-headline**: "FlowContent é o combo de agentes de IA que cria conteúdo estratégico pra nutricionistas ocupadas. Entre na lista VIP e seja um dos primeiros a transformar seu Instagram!"
   - Justificativa: Personalização direta ("pra nutricionistas ocupadas") e criação de urgência/escassez ("seja um dos primeiros")

3. **Título da Seção de Processo**: "Como o FlowContent Transforma Seu Instagram em uma Máquina de Leads"
   - Justificativa: Mais específico sobre o resultado final (máquina de leads) e uso da palavra "seu" para conexão pessoal

## Fase 2: Desenvolvimento e Implementação Técnica

### Estrutura de Componentes
Detalhada na seção de Estrutura de Pastas

### Lógica de Validação
- Validação em tempo real dos campos
- Máscara de telefone com formatação automática
- Validação de e-mail com regex específico
- Tratamento de nome para formato padrão

### Tratamento de Dados
- Normalização de nome (primeiro e último)
- Formatação de telefone para padrão E.164
- Captura automática de parâmetros UTM
- Envio estruturado via webhook

### Decisões Técnicas Finais

#### Componentização
- Cada seção da página foi dividida em componentes reutilizáveis para facilitar manutenção
- O formulário foi isolado para permitir testes específicos
- Componentes de UI comuns (Header, Footer) foram separados

#### Validação de Formulário
- Utilizado React Hook Form para validação eficiente
- Validação em tempo real com feedback imediato
- Máscara de telefone implementada com formatação automática
- Checkbox de privacidade obrigatório para conformidade LGPD

#### Tratamento de Dados
- Funções utilitárias criadas para formatação de dados
- Normalização de nome para primeiro e último nome apenas
- Formatação de telefone para padrão internacional E.164
- Captura automática de parâmetros UTM da URL

#### Integração com Webhook
- Envio de dados estruturados em JSON para o webhook especificado
- Tratamento de erros com feedback ao usuário
- Confirmação de envio com mensagem de sucesso

#### Design e UX
- Cores da marca aplicadas conforme especificação (#2ECC71, #27AE60, #219653)
- Tipografia Montserrat aplicada em toda a página
- Design responsivo mobile-first
- Botão flutuante de WhatsApp para contato fácil

## Fase 3: Testes e Validação

### Estratégia de Testes
- Testes unitários para funções utilitárias
- Testes de integração para o formulário
- Testes de snapshot para componentes
- Testes e2e para o fluxo completo

### Métricas de Qualidade
- Cobertura de testes > 80%
- Performance auditada com Lighthouse
- Acessibilidade verificada
- Validação cross-browser

## Fase 4: Entrega e Instruções de Deploy

### Deploy na Vercel

#### Pré-requisitos
1. Conta na Vercel (https://vercel.com)
2. Repositório do projeto no GitHub
3. Acesso ao domínio `espera.alessandrobastos.com.br`

#### Passo a passo para deploy

1. **Importar projeto na Vercel**:
   - Acesse o painel da Vercel
   - Clique em "New Project"
   - Selecione o repositório `flowcontent-captura` do GitHub
   - Clique em "Import"

2. **Configurações do projeto**:
   - Framework Preset: `Vite`
   - Root Directory: Deixe em branco (raiz do projeto)
   - Build and Output Settings:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

3. **Variáveis de ambiente** (se necessário):
   - Nenhuma variável de ambiente é necessária para esta aplicação

4. **Configuração de domínio personalizado**:
   - Após o deploy inicial, vá para as configurações do projeto
   - Acesse "Domains"
   - Adicione o domínio `espera.alessandrobastos.com.br`
   - Siga as instruções da Vercel para configurar os registros DNS no seu provedor

5. **Configurações de produção**:
   - Certifique-se de que as configurações de produção estão corretas
   - Verifique se o webhook está acessível
   - Teste o formulário em produção

#### Comandos úteis

```bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Executar testes
npm test

# Executar testes em modo watch
npm run test:watch
```

#### Verificação pós-deploy

1. Acesse `https://espera.alessandrobastos.com.br`
2. Verifique se todos os elementos da página estão carregando corretamente
3. Teste o formulário de captura de leads
4. Verifique se o botão de WhatsApp está funcionando
5. Confirme se os dados estão sendo enviados corretamente para o webhook
6. Verifique se a página é responsiva em diferentes dispositivos

#### Manutenção e atualizações

1. **Atualizações de conteúdo**:
   - Modifique os arquivos JSX nos componentes conforme necessário
   - Faça push para o repositório no GitHub
   - O Vercel fará deploy automático após o push

2. **Atualizações de estilo**:
   - Modifique os arquivos CSS ou as classes do Tailwind
   - As mudanças terão efeito imediato após o deploy

3. **Monitoramento**:
   - Utilize o painel da Vercel para monitorar performance e erros
   - Configure alertas conforme necessário

4. **Backup**:
   - Mantenha o repositório no GitHub atualizado
   - O Vercel mantém histórico de deploys