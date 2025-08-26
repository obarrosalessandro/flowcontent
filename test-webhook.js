// Script para testar o webhook
const testData = {
  nome: "Teste Usuario",
  email: "teste@example.com",
  telefone: "+5522999999999",
  desafio: "Teste de envio de dados",
  lgpd: true,
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: ""
};

fetch('https://webhooks.alessandrobarros.com/wh/espera-flow-content', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
.then(response => {
  console.log('Status:', response.status);
  console.log('Status Text:', response.statusText);
  return response.text();
})
.then(data => {
  console.log('Response:', data);
})
.catch(error => {
  console.error('Error:', error);
});