// Funções de validação utilitárias

export const validateEmail = (email) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
};

export const validatePhone = (phone) => {
  const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  return regex.test(phone);
};

export const formatPhone = (value) => {
  if (!value) return '';
  
  const phoneNumber = value.replace(/\D/g, '');
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

export const formatName = (name) => {
  if (!name) return '';
  
  const nameParts = name.trim().split(' ');
  if (nameParts.length === 1) return nameParts[0];
  
  return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
};