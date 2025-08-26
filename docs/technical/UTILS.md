# Documentação das Funções Utilitárias

## Visão Geral

Esta documentação detalha as funções utilitárias criadas para o projeto FlowContent, incluindo validações, formatações e outras funções auxiliares.

## Estrutura de Utilitários

```
src/
└── utils/
    ├── validation.js
    └── formatter.js
```

## Arquivo: validation.js

### Funções de Validação e Formatação

#### formatPhone(value)

##### Descrição
Formata números de telefone brasileiros para os padrões:
- 10 dígitos: (XX) XXXX-XXXX
- 11 dígitos: (XX) XXXXX-XXXX

##### Parâmetros
- `value`: String - Número de telefone não formatado

##### Retorno
- String - Número de telefone formatado

##### Implementação
```javascript
export const formatPhone = (value) => {
  if (!value) return '';
  
  const phoneNumber = value.replace(/\D/g, '');
  
  // Para números brasileiros:
  // 10 dígitos: (XX) XXXX-XXXX
  // 11 dígitos: (XX) XXXXX-XXXX
  
  if (phoneNumber.length === 10) {
    const areaCode = phoneNumber.slice(0, 2);
    const firstPart = phoneNumber.slice(2, 6);
    const secondPart = phoneNumber.slice(6, 10);
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  } else if (phoneNumber.length === 11) {
    const areaCode = phoneNumber.slice(0, 2);
    const firstPart = phoneNumber.slice(2, 7);
    const secondPart = phoneNumber.slice(7, 11);
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }

  // Fallback para números parciais ou outros casos
  const match = phoneNumber.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
  
  if (match[1] && match[2] && match[3]) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  } else if (match[1] && match[2]) {
    return `(${match[1]}) ${match[2]}`;
  } else if (match[1]) {
    return `(${match[1]}`;
  }
  
  return phoneNumber;
};
```

##### Exemplos de Uso
```javascript
formatPhone('22999999999'); // Retorna: "(22) 99999-9999"
formatPhone('2299999999');  // Retorna: "(22) 9999-9999"
formatPhone('');            // Retorna: ""
```

#### validatePhone(phone)

##### Descrição
Valida se um número de telefone está no formato correto: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX

##### Parâmetros
- `phone`: String - Número de telefone a ser validado

##### Retorno
- Boolean - true se válido, false se inválido

##### Implementação
```javascript
export const validatePhone = (phone) => {
  const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  return regex.test(phone);
};
```

##### Exemplos de Uso
```javascript
validatePhone('(22) 99999-9999'); // Retorna: true
validatePhone('(22) 9999-9999');  // Retorna: true
validatePhone('22999999999');     // Retorna: false
```

#### validateEmail(email)

##### Descrição
Valida se um email está no formato correto usando regex.

##### Parâmetros
- `email`: String - Email a ser validado

##### Retorno
- Boolean - true se válido, false se inválido

##### Implementação
```javascript
export const validateEmail = (email) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
};
```

##### Exemplos de Uso
```javascript
validateEmail('teste@example.com'); // Retorna: true
validateEmail('teste@');            // Retorna: false
validateEmail('');                  // Retorna: false
```

#### formatName(name)

##### Descrição
Formata um nome completo para exibir apenas o primeiro e último nome.

##### Parâmetros
- `name`: String - Nome completo a ser formatado

##### Retorno
- String - Nome formatado (primeiro e último nome)

##### Implementação
```javascript
export const formatName = (name) => {
  if (!name) return '';
  
  const nameParts = name.trim().split(' ');
  if (nameParts.length === 1) return nameParts[0];
  
  return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
};
```

##### Exemplos de Uso
```javascript
formatName('João Silva Pereira'); // Retorna: "João Pereira"
formatName('Maria');              // Retorna: "Maria"
formatName('');                   // Retorna: ""
```

## Arquivo: formatter.js

### Funções de Formatação para Envio

#### formatPhoneNumberForSubmission(phone)

##### Descrição
Formata um número de telefone para o padrão E.164 internacional (+55XXXXXXXXX).

##### Parâmetros
- `phone`: String - Número de telefone formatado

##### Retorno
- String - Número de telefone no padrão E.164

##### Implementação
```javascript
export const formatPhoneNumberForSubmission = (phone) => {
  if (!phone) return '';
  
  // Remover todos os caracteres não numéricos
  const phoneNumber = phone.replace(/\D/g, '');
  
  // Adicionar o código do país (+55 para Brasil)
  if (phoneNumber.length === 10) {
    // Para números de 10 dígitos (sem o 9)
    return `+55${phoneNumber}`;
  } else if (phoneNumber.length === 11) {
    // Para números de 11 dígitos (com o 9)
    return `+55${phoneNumber}`;
  }
  
  return '';
};
```

##### Exemplos de Uso
```javascript
formatPhoneNumberForSubmission('(22) 99999-9999'); // Retorna: "+5522999999999"
formatPhoneNumberForSubmission('(22) 9999-9999');  // Retorna: "+552299999999"
formatPhoneNumberForSubmission('');                // Retorna: ""
```

#### formatNameForSubmission(name)

##### Descrição
Formata um nome para envio, mantendo apenas o primeiro e último nome.

##### Parâmetros
- `name`: String - Nome completo

##### Retorno
- String - Nome formatado (primeiro e último nome)

##### Implementação
```javascript
export const formatNameForSubmission = (name) => {
  return formatName(name); // Reutiliza a função de formatação de nome
};
```

##### Exemplos de Uso
```javascript
formatNameForSubmission('João Silva Pereira'); // Retorna: "João Pereira"
formatNameForSubmission('Maria');              // Retorna: "Maria"
formatNameForSubmission('');                   // Retorna: ""
```

#### getUTMParameters()

##### Descrição
Captura automaticamente os parâmetros UTM da URL para tracking de marketing.

##### Parâmetros
Nenhum parâmetro.

##### Retorno
- Object - Objeto contendo os parâmetros UTM encontrados na URL

##### Implementação
```javascript
export const getUTMParameters = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {};
  
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  
  utmKeys.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      utmParams[key] = value;
    }
  });
  
  return utmParams;
};
```

##### Exemplos de Uso
```javascript
// Com URL: https://example.com?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale
getUTMParameters(); 
// Retorna: { utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'summer_sale' }

// Sem parâmetros UTM
getUTMParameters(); 
// Retorna: {}
```

## Testes

### Estratégia de Testes
Cada função utilitária possui testes unitários correspondentes no arquivo `src/__tests__/utils.test.js`.

### Exemplo de Teste
```javascript
import { formatPhone, formatName } from '../utils/validation';
import { formatPhoneNumberForSubmission, formatNameForSubmission } from '../utils/formatter';

describe('Validation Utils', () => {
  describe('formatPhone', () => {
    test('deve formatar corretamente um número de telefone', () => {
      expect(formatPhone('22999999999')).toBe('(22) 99999-9999');
      expect(formatPhone('2299999999')).toBe('(22) 9999-9999');
      expect(formatPhone('')).toBe('');
    });
  });

  // Outros testes...
});
```

## Considerações de Performance

1. **Funções Puras**: Todas as funções utilitárias são funções puras, o que as torna previsíveis e fáceis de testar.

2. **Sem Efeitos Colaterais**: As funções não causam efeitos colaterais, apenas transformam os dados de entrada.

3. **Reutilização de Código**: Funções como `formatNameForSubmission` reutilizam implementações existentes para evitar duplicação.

## Extensibilidade

As funções utilitárias foram projetadas para serem facilmente extensíveis:

1. **Novas Funções de Validação**: Novas funções de validação podem ser adicionadas seguindo o mesmo padrão.

2. **Personalização de Formatos**: Os formatos de saída podem ser facilmente modificados ajustando as strings de retorno.

3. **Integração com APIs**: As funções podem ser facilmente integradas com APIs externas quando necessário.

## Tratamento de Erros

As funções utilitárias incluem tratamento básico de erros:

1. **Valores Nulos/Vazios**: Todas as funções tratam adequadamente valores nulos, undefined ou vazios.

2. **Entradas Inválidas**: Entradas inválidas são tratadas de forma graciosa, retornando valores padrão ou strings vazias.

3. **Consistência**: O comportamento é consistente em todos os casos de erro, facilitando a previsibilidade.