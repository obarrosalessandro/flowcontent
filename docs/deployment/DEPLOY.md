# Deploy da Aplicação

## Pré-requisitos

1. Conta no Vercel (https://vercel.com)
2. Projeto configurado no GitHub
3. Variáveis de ambiente configuradas (se necessário)

## Deploy Manual via Vercel CLI

1. Instalar o Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Fazer login:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Para deploy em produção:
   ```bash
   vercel --prod
   ```

## Deploy Automático via GitHub Actions

O projeto já está configurado com GitHub Actions para deploy automático. 
Basta fazer push para a branch `main` que o deploy será feito automaticamente.

### Configuração Necessária

1. No GitHub, adicione os seguintes secrets no repositório:
   - `VERCEL_TOKEN` - Token de acesso do Vercel
   - `VERCEL_ORG_ID` - ID da organização no Vercel
   - `VERCEL_PROJECT_ID` - ID do projeto no Vercel

2. Esses valores podem ser obtidos no dashboard do Vercel.

## Variáveis de Ambiente

Para configurar variáveis de ambiente no Vercel:

1. Acesse o dashboard do Vercel
2. Vá até as configurações do projeto
3. Na aba "Environment Variables", adicione as variáveis necessárias

## Domínio Personalizado

Para configurar domínio personalizado:

1. No dashboard do Vercel, vá até as configurações do projeto
2. Na aba "Domains", adicione o domínio desejado
3. Siga as instruções para configurar o DNS

## Monitoramento

O Vercel oferece monitoramento automático de:
- Performance
- Erros
- Uso de banda
- Tempos de resposta

Acesse o dashboard para visualizar os dados de monitoramento.