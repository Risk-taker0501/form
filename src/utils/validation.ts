import type { FormErrors, FormValues } from "../types/formTypes";

export const validateName = (value: string): string =>
  value.length < 5 ? 'Full name must have at least 5 letters' : '';

export const validateEmail = (value: string): string =>
  /^\S+@\S+$/.test(value) ? '' : 'Invalid email';

export const validateCompanyName = (value: string): string =>
  value.length < 2 ? 'Company name must have at least 2 letters' : '';

export const validateRequired = (value: string, fieldName: string): string =>
  value.length < 1 ? `${fieldName} is required` : '';

export const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  errors.full_name = validateName(values.full_name);
  errors.email = validateEmail(values.email);
  errors.companyname = validateCompanyName(values.companyname);
  errors.alternative_companyname = validateCompanyName(values.alternative_companyname);
  errors.company_designation = validateRequired(values.company_designation, 'Company designation');
  errors.jurisdiction_operation = validateRequired(values.jurisdiction_operation, 'Jurisdiction of operation');
  errors.target_jurisdictions = validateRequired(values.target_jurisdictions, 'Target jurisdictions');
  errors.shares = validateRequired(values.shares, 'Number of shares');
  errors.value_per_shares = validateRequired(values.value_per_shares, 'Value per share');

  return errors;
};