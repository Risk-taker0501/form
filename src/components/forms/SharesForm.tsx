import { Box, Checkbox, Flex, Grid, NumberInput, Select, Text } from '@mantine/core';
import { SHARE_OPTIONS, SHARE_VALUE_OPTIONS } from '../../constants/formOptions';
import type { FormSectionProps } from '../../types/formTypes';

const SharesForm = ({ values, errors, onChange }: FormSectionProps) => (
  <>
    <Text size="xl" mb="md">Shares Structure</Text>
    <Grid>
      <Grid.Col md={4} sm={12}>
        <Text size="sm">
          All companies must have at least 1 share. Issued shares are distributed from day 1.
          Unissued shares can be distributed later to team members or investors.
        </Text>
      </Grid.Col>
      <Grid.Col md={8} sm={12}>
        <Select
          label="Number of shares"
          data={SHARE_OPTIONS}
          placeholder="Select the number of shares"
          value={values.shares}
          error={errors.shares}
          onChange={(value) => onChange('shares', value)}
          required
          mb="md"
        />
        <Flex direction="column" gap="md">
          <Text>Are all shares issued?</Text>
          <Box p="md" sx={(theme) => ({
            border: `1px solid ${theme.colors.gray[8]}`,
            borderRadius: theme.radius.sm,
            backgroundColor: theme.colors.dark[7]
          })}>
            <Checkbox
              label="Yes"
              radius="xl"
              checked={values.is_shares}
              onChange={(e) => onChange('is_shares', e.target.checked)}
            />
          </Box>
          <Box p="md" sx={(theme) => ({
            border: `1px solid ${theme.colors.gray[8]}`,
            borderRadius: theme.radius.sm,
            backgroundColor: theme.colors.dark[7]
          })}>
            <Checkbox
              label="No"
              radius="xl"
              checked={!values.is_shares}
              onChange={(e) => onChange('is_shares', !e.target.checked)}
            />
          </Box>
          <NumberInput
            label="Number of issued shares"
            placeholder="Shares to issue on day 1"
            value={values.number_issued_shares}
            onChange={(value) => onChange('number_issued_shares', value || 0)}
            min={0}
            mb="md"
          />
          <Select
            label="Value per share"
            data={SHARE_VALUE_OPTIONS}
            placeholder="Select share value"
            value={values.value_per_shares}
            error={errors.value_per_shares}
            onChange={(value) => onChange('value_per_shares', value)}
            required
          />
        </Flex>
      </Grid.Col>
    </Grid>
  </>
);

export default SharesForm;