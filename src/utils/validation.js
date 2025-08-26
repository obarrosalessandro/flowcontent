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
  
  // For Brazilian phone numbers:
  // 10 digits: (XX) XXXX-XXXX
  // 11 digits: (XX) XXXXX-XXXX
  
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

  // Fallback for partial numbers or other cases
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