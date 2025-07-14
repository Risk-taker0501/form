import { Grid, Text, TextInput } from '@mantine/core';
import type { FormSectionProps } from '../../types/formTypes';

const UserInfoForm = ({ values, errors, onChange }: FormSectionProps) => (
  <>
    <Text size="xl" mb="md">User information</Text>
    <Grid>
      <Grid.Col md={4} sm={12}>
        <Text size="sm">
          Company once incorporated will be sent to the same email address. 
          You can change it later on if required.
        </Text>
      </Grid.Col>
      <Grid.Col md={8} sm={12}>
        <TextInput
          label="Name"
          placeholder="Please input your full name"
          value={values.full_name}
          error={errors.full_name}
          onChange={(e) => onChange('full_name', e.target.value)}
          required
          mb="md"
        />
        <TextInput
          label="Email"
          placeholder="Please input your email"
          value={values.email}
          error={errors.email}
          onChange={(e) => onChange('email', e.target.value)}
          required
        />
      </Grid.Col>
    </Grid>
  </>
);

export default UserInfoForm;