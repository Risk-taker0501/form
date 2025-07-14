import { Grid, Select, Text, TextInput } from '@mantine/core';
import { COMPANY_DESIGNATIONS } from '../../constants/formOptions';
import type { FormSectionProps } from '../../types/formTypes';

const CompanyInfoForm = ({ values, errors, onChange }: FormSectionProps) => (
  <>
    <Text size="xl" mb="md">Company information</Text>
    <Grid>
      <Grid.Col md={4} sm={12}>
        <Text size="sm">
          Every company must have a name and a designation. For the company name you can use
          both letters and numbers, but not special symbols.
        </Text>
      </Grid.Col>
      <Grid.Col md={8} sm={12}>
        <TextInput
          label="Company name"
          placeholder="The name you want your company to have"
          value={values.companyname}
          error={errors.companyname}
          onChange={(e) => onChange('companyname', e.target.value)}
          required
          mb="md"
        />
        <TextInput
          label="Alternative company name"
          placeholder="The name to use if the first name is not available"
          value={values.alternative_companyname}
          error={errors.alternative_companyname}
          onChange={(e) => onChange('alternative_companyname', e.target.value)}
          required
          mb="md"
        />
        <Select
          label="Company designation"
          data={COMPANY_DESIGNATIONS}
          placeholder="Select the option that you prefer"
          value={values.company_designation}
          error={errors.company_designation}
          onChange={(value) => onChange('company_designation', value)}
          required
        />
      </Grid.Col>
    </Grid>
  </>
);

export default CompanyInfoForm;