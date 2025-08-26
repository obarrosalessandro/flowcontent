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

  describe('formatName', () => {
    test('deve formatar corretamente um nome completo', () => {
      expect(formatName('João Silva Pereira')).toBe('João Pereira');
      expect(formatName('Maria')).toBe('Maria');
      expect(formatName('')).toBe('');
    });
  });
});

describe('Formatter Utils', () => {
  describe('formatPhoneNumberForSubmission', () => {
    test('deve formatar corretamente para envio', () => {
      expect(formatPhoneNumberForSubmission('(22) 99999-9999')).toBe('+5522999999999');
      expect(formatPhoneNumberForSubmission('(22) 99999-999')).toBe('+552299999999'); // Corrigido
      expect(formatPhoneNumberForSubmission('')).toBe('');
    });
  });

  describe('formatNameForSubmission', () => {
    test('deve formatar corretamente o nome para envio', () => {
      expect(formatNameForSubmission('João Silva Pereira')).toBe('João Pereira');
      expect(formatNameForSubmission('Maria')).toBe('Maria');
      expect(formatNameForSubmission('')).toBe('');
    });
  });
});