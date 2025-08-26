# Documentação dos Hooks Personalizados

## Visão Geral

Esta documentação detalha os hooks personalizados criados para o projeto FlowContent, incluindo sua implementação, props, estado e uso.

## Estrutura de Hooks

```
src/
└── hooks/
    └── useForm.js
```

## Hooks

### useForm.js

#### Descrição
Hook personalizado para manipulação de formulários com validação, gerenciamento de estado e submissão.

#### Props
- `initialValues`: Object - Valores iniciais dos campos do formulário
- `validationRules`: Object - Regras de validação para cada campo
- `onSubmit`: Function - Função a ser executada no envio do formulário

#### Estado
- `values`: Object - Valores atuais dos campos do formulário
- `errors`: Object - Erros de validação para cada campo
- `touched`: Object - Campos que foram tocados pelo usuário
- `isSubmitting`: Boolean - Indica se o formulário está sendo enviado
- `submitSuccess`: Boolean - Indica se o formulário foi enviado com sucesso
- `submitError`: String - Mensagem de erro, se houver

#### Funções Retornadas
- `handleChange`: Function - Função para lidar com mudanças nos inputs
- `handleBlur`: Function - Função para lidar com o blur dos inputs
- `handleSubmit`: Function - Função para lidar com o envio do formulário
- `setValue`: Function - Função para definir o valor de um campo específico
- `setError`: Function - Função para definir o erro de um campo específico
- `reset`: Function - Função para resetar o formulário

#### Implementação Detalhada

```javascript
import { useState, useCallback } from 'react';

export const useForm = (initialValues = {}, validationRules = {}, onSubmit = () => {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Função para validar um campo específico
  const validateField = useCallback((name, value) => {
    const rules = validationRules[name];
    if (!rules) return '';

    // Validação de campo obrigatório
    if (rules.required && (!value || value.trim() === '')) {
      return rules.requiredMessage || 'Este campo é obrigatório';
    }

    // Validação de email
    if (rules.email && value) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(value)) {
        return rules.emailMessage || 'Por favor, insira um email válido';
      }
    }

    // Validação de telefone
    if (rules.phone && value) {
      const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
      if (!phoneRegex.test(value)) {
        return rules.phoneMessage || 'Por favor, insira um telefone válido';
      }
    }

    // Validação de tamanho mínimo
    if (rules.minLength && value && value.length < rules.minLength) {
      return rules.minLengthMessage || `Este campo deve ter pelo menos ${rules.minLength} caracteres`;
    }

    // Validação personalizada
    if (rules.custom && value) {
      const customError = rules.custom(value);
      if (customError) {
        return customError;
      }
    }

    return '';
  }, [validationRules]);

  // Função para validar todos os campos
  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(values).forEach(name => {
      const error = validateField(name, values[name]);
      if (error) {
        isValid = false;
        newErrors[name] = error;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validateField]);

  // Função para lidar com mudanças nos inputs
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setValues(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Validar o campo se já foi tocado
    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  }, [touched, validateField]);

  // Função para lidar com o blur dos inputs
  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, values[name]);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [values, validateField]);

  // Função para definir o valor de um campo específico
  const setValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Função para definir o erro de um campo específico
  const setError = useCallback((name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, []);

  // Função para resetar o formulário
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setSubmitSuccess(false);
    setSubmitError('');
  }, [initialValues]);

  // Função para lidar com o envio do formulário
  const handleSubmit = useCallback(async (e) => {
    if (e) e.preventDefault();
    
    // Marcar todos os campos como tocados
    const allTouched = {};
    Object.keys(values).forEach(name => {
      allTouched[name] = true;
    });
    setTouched(allTouched);

    // Validar o formulário
    const isValid = validateForm();
    
    if (!isValid) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await onSubmit(values);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(error.message || 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validateForm, onSubmit, reset]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
    setValue,
    setError,
    reset
  };
};
```

#### Exemplo de Uso

```javascript
import React from 'react';
import { useForm } from '../hooks/useForm';

const MyForm = () => {
  const validationRules = {
    name: {
      required: true,
      requiredMessage: 'Por favor, insira seu nome',
      minLength: 2,
      minLengthMessage: 'O nome deve ter pelo menos 2 caracteres'
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      phone: true
    },
    privacy: {
      required: true,
      requiredMessage: 'Você deve aceitar a Política de Privacidade'
    }
  };

  const handleSubmit = async (values) => {
    // Lógica de envio do formulário
    console.log('Formulário enviado:', values);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit: handleFormSubmit
  } = useForm({
    name: '',
    email: '',
    phone: '',
    privacy: false
  }, validationRules, handleSubmit);

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Campos do formulário */}
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.name && touched.name ? 'error' : ''}
      />
      {errors.name && touched.name && <span className="error-message">{errors.name}</span>}
      
      {/* Outros campos */}
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
      
      {submitError && <div className="error-message">{submitError}</div>}
      {submitSuccess && <div className="success-message">Formulário enviado com sucesso!</div>}
    </form>
  );
};

export default MyForm;
```

#### Considerações de Performance

1. **Uso de useCallback**: Todas as funções retornadas pelo hook utilizam `useCallback` para evitar recriações desnecessárias em re-renderizações.

2. **Validação Otimizada**: A validação é realizada apenas quando necessário (campos tocados ou envio do formulário).

3. **Gerenciamento de Estado**: O estado é gerenciado de forma eficiente com `useState`, evitando atualizações desnecessárias.

#### Extensibilidade

O hook foi projetado para ser extensível:

1. **Regras de Validação Personalizadas**: É possível adicionar regras de validação personalizadas através da propriedade `custom` nas regras de validação.

2. **Integração com APIs**: A função `onSubmit` permite fácil integração com qualquer API ou serviço de backend.

3. **Customização de Mensagens**: Todas as mensagens de erro podem ser personalizadas para atender às necessidades específicas da aplicação.

#### Tratamento de Erros

O hook inclui tratamento completo de erros:

1. **Erros de Validação**: Erros de validação são exibidos por campo.
2. **Erros de Submissão**: Erros durante o envio do formulário são capturados e exibidos.
3. **Reset de Erros**: Os erros são resetados adequadamente quando o formulário é redefinido.