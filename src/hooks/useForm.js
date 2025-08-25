import { useState } from 'react';

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (validate && validate[name]) {
      const error = validate[name](value);
      setErrors({
        ...errors,
        [name]: error || ''
      });
    }
  };

  const handleSubmit = async (e, onSubmit) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate all fields
    if (validate) {
      const newErrors = {};
      Object.keys(validate).forEach(key => {
        const error = validate[key](values[key]);
        if (error) newErrors[key] = error;
      });
      
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setIsSubmitting(false);
        return;
      }
    }
    
    try {
      await onSubmit(values);
      setValues(initialValues || {});
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  };
};

export default useForm;