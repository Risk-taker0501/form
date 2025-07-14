export interface FormValues {
  full_name: string;
  email: string;
  companyname: string;
  alternative_companyname: string;
  company_designation: string;
  jurisdiction_operation: string;
  target_jurisdictions: string;
  shares: string;
  is_shares: boolean;
  number_issued_shares: number;
  value_per_shares: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface FormSectionProps {
  values: FormValues;
  errors: FormErrors;
  onChange: (field: keyof FormValues, value: any) => void;
}