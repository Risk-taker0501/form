import type { FormValues } from '../types/formTypes';

export const COMPANY_DESIGNATIONS = [
  { value: 'LLC', label: 'Limited Liability Company (LLC)' },
  { value: 'INC', label: 'Incorporated (INC)' },
  { value: 'LTD', label: 'Limited (LTD)' },
];

export const JURISDICTIONS = [
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'DE', label: 'Germany' },
  { value: 'SG', label: 'Singapore' },
];

export const SHARE_OPTIONS = [
  { value: '100', label: '100 shares' },
  { value: '1000', label: '1,000 shares' },
  { value: '10000', label: '10,000 shares' },
];

export const SHARE_VALUE_OPTIONS = [
  { value: '0.01', label: '$0.01 per share' },
  { value: '0.10', label: '$0.10 per share' },
  { value: '1.00', label: '$1.00 per share' },
];

export const initialFormValues: FormValues = {
  full_name: '',
  email: '',
  companyname: '',
  alternative_companyname: '',
  company_designation: '',
  jurisdiction_operation: '',
  target_jurisdictions: '',
  shares: '',
  is_shares: true,
  number_issued_shares: 0,
  value_per_shares: '',
};