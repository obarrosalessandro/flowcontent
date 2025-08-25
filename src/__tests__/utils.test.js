import { validateEmail, validatePhone, formatPhone, formatName } from '../utils/validation';
import { formatPhoneNumberForSubmission, formatNameForSubmission, getUTMParameters } from '../utils/formatter';

describe('Validation Utilities', () => {
  test('validateEmail should return true for valid emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true);
  });

  test('validateEmail should return false for invalid emails', () => {
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('test@')).toBe(false);
    expect(validateEmail('@example.com')).toBe(false);
  });

  test('validatePhone should return true for valid Brazilian phone format', () => {
    expect(validatePhone('(11) 99999-9999')).toBe(true);
    expect(validatePhone('(21) 8888-8888')).toBe(true);
  });

  test('validatePhone should return false for invalid phone formats', () => {
    expect(validatePhone('11999999999')).toBe(false);
    expect(validatePhone('(11) 99999999')).toBe(false);
    expect(validatePhone('(11) 99999-999')).toBe(false);
  });

  test('formatPhone should format phone numbers correctly', () => {
    expect(formatPhone('11999999999')).toBe('(11) 99999-9999');
    expect(formatPhone('2188888888')).toBe('(21) 8888-8888');
    expect(formatPhone('')).toBe('');
  });

  test('formatName should return first and last name only', () => {
    expect(formatName('João da Silva Pereira')).toBe('João Pereira');
    expect(formatName('Maria Santos')).toBe('Maria Santos');
    expect(formatName('Carlos')).toBe('Carlos');
  });
});

describe('Formatter Utilities', () => {
  test('formatPhoneNumberForSubmission should format phone for E.164 standard', () => {
    expect(formatPhoneNumberForSubmission('(11) 99999-9999')).toBe('+5511999999999');
    expect(formatPhoneNumberForSubmission('(21) 8888-8888')).toBe('+552188888888');
  });

  test('formatNameForSubmission should return first and last name only', () => {
    expect(formatNameForSubmission('João da Silva Pereira')).toBe('João Pereira');
    expect(formatNameForSubmission('Maria Santos')).toBe('Maria Santos');
    expect(formatNameForSubmission('Carlos')).toBe('Carlos');
  });

  // Note: getUTMParameters test would require mocking window.location
  // which is more complex and would be done in an integration test
});