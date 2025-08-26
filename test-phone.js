// Teste para verificar o comportamento da função formatPhone
const formatPhone = (value) => {
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

console.log('Teste 1:', formatPhone('22999999999')); // Deve ser (22) 99999-9999
console.log('Teste 2:', formatPhone('2299999999'));   // Deve ser (22) 9999-9999
console.log('Teste 3:', formatPhone(''));             // Deve ser ''