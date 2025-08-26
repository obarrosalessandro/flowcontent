import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { formatPhone, formatName } from '../utils/validation';
import { formatPhoneNumberForSubmission, formatNameForSubmission, getUTMParameters } from '../utils/formatter';

const Form = () => {
  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm({
    mode: 'onChange'
  });
  
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const checkboxChecked = watch('privacy');
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Format phone number for submission
    const formattedPhone = formatPhoneNumberForSubmission(data.whatsapp);
    
    // Format name (first and last name only)
    const formattedName = formatNameForSubmission(data.name);
    
    // Get UTM parameters
    const utmData = getUTMParameters();
    
    // Prepare payload
    const payload = {
      nome: formattedName,
      email: data.email.toLowerCase(),
      telefone: formattedPhone,
      desafio: data.challenge,
      lgpd: checkboxChecked ? true : false, // Adicionando o valor do checkbox LGPD
      ...utmData
    };
    
    try {
      // Log dos dados que serão enviados
      console.log('Dados a serem enviados:', payload);
      
      // Send to webhook
      const response = await fetch('https://webhooks.alessandrobarros.com/wh/espera-flow-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      if (response.ok) {
        console.log('Formulário enviado com sucesso!');
        // Redirect to thank you page with user's name
        navigate('/obrigado', { state: { name: formattedName } });
      } else {
        const errorText = await response.text();
        console.error('Server error response:', errorText);
        console.error('Response status:', response.status);
        throw new Error(`Falha no envio: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(`Ocorreu um erro ao enviar o formulário: ${error.message}. Por favor, tente novamente.`);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form id="waitlist-form" onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg p-8 shadow-lg">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Seu nome completo"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#2ECC71]'
          }`}
          {...register('name', { 
            required: 'Nome é obrigatório',
            minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' }
          })}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      
      <div className="mb-6">
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#2ECC71]'
          }`}
          {...register('email', { 
            required: 'E-mail é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail inválido'
            }
          })}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      
      <div className="mb-6">
        <input
          type="tel"
          placeholder="(00) 00000-0000"
          maxLength="15"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.whatsapp ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#2ECC71]'
          }`}
          {...register('whatsapp', { 
            required: 'WhatsApp é obrigatório',
            pattern: {
              value: /^\(\d{2}\) \d{4,5}-\d{4}$/,
              message: 'WhatsApp inválido'
            }
          })}
          onChange={(e) => {
            const formattedValue = formatPhone(e.target.value);
            e.target.value = formattedValue;
          }}
        />
        {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>}
      </div>
      
      <div className="mb-6">
        <textarea
          placeholder="Qual é seu maior desafio ao criar conteúdo para o Instagram?"
          rows="4"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.challenge ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#2ECC71]'
          }`}
          {...register('challenge', { 
            required: 'Este campo é obrigatório',
            minLength: { value: 10, message: 'Descreva seu desafio com mais detalhes' }
          })}
        ></textarea>
        {errors.challenge && <p className="text-red-500 text-sm mt-1">{errors.challenge.message}</p>}
      </div>
      
      <div className="mb-6">
        <label className="flex items-start">
          <input
            type="checkbox"
            className="mt-1 mr-3"
            {...register('privacy', { 
              required: 'Você precisa aceitar a política de privacidade'
            })}
          />
          <span className="text-gray-700 text-sm">
            Concordo em receber comunicações sobre o FlowContent e com a{' '}
            <a 
              href="https://alessandrobarros.com/politica-de-privacidade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2ECC71] hover:underline"
            >
              Política de Privacidade
            </a>.
          </span>
        </label>
        {errors.privacy && <p className="text-red-500 text-sm mt-1">{errors.privacy.message}</p>}
      </div>
      
      <button
        type="submit"
        disabled={!isValid || !checkboxChecked || isSubmitting}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-lg text-white transition-colors duration-300 ${
          isValid && checkboxChecked && !isSubmitting
            ? 'bg-[#2ECC71] hover:bg-[#27AE60] active:bg-[#219653] cursor-pointer'
            : 'bg-[#58D68D] hover:bg-[#2ECC71] cursor-not-allowed'
        }`}
      >
        {isSubmitting ? 'Enviando...' : 'Entrar na Lista de Espera VIP'}
      </button>
    </form>
  );
};

export default Form;