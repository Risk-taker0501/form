import { Grid, Select, Text } from '@mantine/core';
import { JURISDICTIONS } from '../../constants/formOptions';
import type { FormSectionProps } from '../../types/formTypes';

const JurisdictionForm = ({ values, errors, onChange }: FormSectionProps) => (
  <>
    <Text size="xl" mb="md">Jurisdiction Information</Text>
    <Grid>
      <Grid.Col md={4} sm={12}>
        <Text size="sm">
          Select the jurisdictions where your company will operate and where your
          clients are located. This helps determine the legal requirements for your business.
        </Text>
      </Grid.Col>
      <Grid.Col md={8} sm={12}>
        <Select
          label="Jurisdiction of operation"
          data={JURISDICTIONS}
          placeholder="Select the country where you are located"
          value={values.jurisdiction_operation}
          error={errors.jurisdiction_operation}
          onChange={(value) => onChange('jurisdiction_operation', value)}
          required
          mb="md"
        />
        <Select
          label="Target jurisdictions"
          data={JURISDICTIONS}
          placeholder="Select the country where your clients are located"
          value={values.target_jurisdictions}
          error={errors.target_jurisdictions}
          onChange={(value) => onChange('target_jurisdictions', value)}
          required
        />
      </Grid.Col>
    </Grid>
  </>
);

export default JurisdictionForm;