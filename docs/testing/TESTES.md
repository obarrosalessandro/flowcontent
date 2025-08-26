# Testes Automatizados

## Executando os Testes

### Testes Simples
```bash
npm test
```

### Testes em Modo Watch
```bash
npm run test:watch
```

### Testes com Cobertura
```bash
npm run test:coverage
```

## Estrutura dos Testes

```
src/
└── __tests__/
    ├── setup.js              # Setup dos testes
    ├── jest.setup.js         # Configuração do Jest
    ├── utils.test.js         # Testes das funções utilitárias
    ├── Header.test.js        # Testes do componente Header
    ├── Form.test.js          # Testes do componente Form
    └── ThankYouPage.test.js  # Testes da página de agradecimento
```

## Tecnologias Utilizadas

- **Jest** - Framework de testes
- **React Testing Library** - Biblioteca para testar componentes React
- **JSDOM** - Ambiente DOM para testes Node.js
- **Babel** - Transpilação de código para testes

## Cobertura de Testes

A cobertura atual dos testes pode ser vista executando `npm run test:coverage`. Atualmente, temos:

- **Funções utilitárias**: ~73% de cobertura
- **Componentes**: ~14-24% de cobertura
- **Páginas**: ~17-21% de cobertura

## Adicionando Novos Testes

Para adicionar novos testes:

1. Crie um novo arquivo no diretório `src/__tests__` com a extensão `.test.js`
2. Importe os módulos necessários
3. Use `describe`, `test` ou `it` para organizar os testes
4. Use asserções do Jest (`expect`) para verificar resultados

Exemplo:
```javascript
import { soma } from '../utils/math';

describe('Funções Matemáticas', () => {
  test('deve somar dois números corretamente', () => {
    expect(soma(2, 3)).toBe(5);
  });
});
```

## Mocks e Stubs

### Mock de Módulos
```javascript
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
}));
```

### Mock de Funções
```javascript
const mockFunction = jest.fn();
mockFunction.mockReturnValue('valor de retorno');
```

## Resolução de Problemas

### Problemas Comuns

1. **ReferenceError: TextEncoder is not defined**
   - Solução: Adicione `TextEncoder` e `TextDecoder` ao arquivo `jest.setup.js`

2. **Cannot find module**
   - Solução: Verifique os caminhos dos imports nos arquivos de teste

3. **Unexpected token**
   - Solução: Verifique a configuração do Babel no `babel.config.json`

### Configurações Importantes

- **jest.config.cjs**: Configuração principal do Jest
- **babel.config.json**: Configuração do Babel para transpilação
- **jest.setup.js**: Setup global do Jest
- **setup.js**: Setup dos testes individuais