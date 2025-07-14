import { useState } from 'react';
import type { FormValues, FormErrors } from '../types/formTypes';
import { validateForm } from '../utils/validation';

export const useFormValidation = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: keyof FormValues, value: any) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validate = (): boolean => {
    const newErrors = validateForm(values);
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  return {
    values,
    errors,
    handleChange,
    validate,
    setErrors
  };
};