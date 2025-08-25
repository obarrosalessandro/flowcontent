// Funções de formatação utilitárias

export const formatPhoneNumberForSubmission = (phone) => {
  if (!phone) return '';
  
  // Remove todos os caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Adiciona o código do país (+55) e formata para o padrão E.164
  return `+55${cleanPhone.slice(0, 11)}`;
};

export const formatNameForSubmission = (name) => {
  if (!name) return '';
  
  // Remove espaços extras no início e no fim
  const trimmedName = name.trim();
  
  // Divide o nome em partes
  const nameParts = trimmedName.split(' ');
  
  // Se tiver apenas uma parte, retorna ela mesma
  if (nameParts.length === 1) return nameParts[0];
  
  // Retorna apenas o primeiro e último nome
  return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
};

export const getUTMParameters = () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_term: urlParams.get('utm_term') || '',
    utm_content: urlParams.get('utm_content') || ''
  };
};