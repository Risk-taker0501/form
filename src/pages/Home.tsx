import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  NumberInput,
  Select,
  Text,
  TextInput,
} from '@mantine/core';
import { useState } from 'react';

interface FormsProps {
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

interface ErrorsProps {
  full_name: string;
  email: string;
  companyname: string;
  alternative_companyname: string;
  company_designation: string;
  jurisdiction_operation: string;
  target_jurisdictions: string;
  shares: string;
  value_per_shares: string;
}

export default function Home() {
  const initial_values: FormsProps = {
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

  const initial_forms_error = {
    full_name: '',
    email: '',
    companyname: '',
    alternative_companyname: '',
    company_designation: '',
    jurisdiction_operation: '',
    target_jurisdictions: '',
    shares: '',
    value_per_shares: '',
  };

  const validate = {
    full_name: (value: string) =>
      value.length < 5 ? 'Full name must have at least 5 letters' : '',
    email: (value: string) => (/^\S+@\S+$/.test(value) ? '' : 'Invalid email'),
    companyname: (value: string) =>
      value.length < 2 ? 'Company name must have at least 2 letters' : '',
    alternative_companyname: (value: string) =>
      value.length < 2 ? 'Company name must have at least 2 letters' : '',
    company_designation: (value: string) =>
      value.length < 1 ? 'Select the company designation' : '',
    jurisdiction_operation: (value: string) =>
      value.length < 1 ? 'Select the jurisdiction of operation' : '',
    target_jurisdictions: (value: string) =>
      value.length < 1 ? 'Select the target jurisdictions' : '',
    shares: (value: string) => (value.length < 1 ? 'Select the number of shares' : ''),
    value_per_shares: (value: string) => (value.length < 1 ? 'Select how much each share is worth' : ''),
    
  };

  const [forms, setFroms] = useState<FormsProps>(initial_values);
  const [forms_error, setFormsErros] = useState<ErrorsProps>(initial_values);

  function onSubmit() {
    if (!validateForm()) {
      return;
    }
    alert("Sumitted.")
    console.log(forms);
  }

  function validateForm(): boolean {
    let isValid = true;
    const newErrors: ErrorsProps = { ...initial_forms_error };

    for (const key in validate) {
      const validator = validate[key as keyof typeof validate];
      if (validator) {
        const error = validator(forms[key]);
        if (error != "") {
          newErrors[key] = error;
          isValid = false;
        }
      }
    }

    setFormsErros(newErrors);
    return isValid;
  }

  return (
    <Flex
      w="100%"
      direction="column"
      align="center"
      mt={100}
      justify="center"
      className="pb-[100px]"
    >
      <Box className="w-[100%] md:w-[900px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <Flex direction="column" gap={30}>
            <Text size="xl">User information</Text>
            <Grid>
              <Grid.Col md={4} sm={12}>
                <Text size="sm">
                  Compnay once incorporated wil be sent to the same email address. You can change it
                  later on if required.
                </Text>
              </Grid.Col>
              <Grid.Col md={8} sm={12}>
                <Flex direction="column" gap={20}>
                  <TextInput
                    label="Name"
                    placeholder="Please input your full name"
                    value={forms['full_name']}
                    error={forms_error['full_name']}
                    onChange={(e) => {
                      setFroms({
                        ...forms,
                        full_name: e.target.value,
                      });
                    }}
                  />
                  <TextInput
                    label="Email"
                    placeholder="Please input your email"
                    value={forms['email']}
                    error={forms_error['email']}
                    onChange={(e) => {
                      setFroms({
                        ...forms,
                        email: e.target.value,
                      });
                    }}
                  />
                </Flex>
              </Grid.Col>
            </Grid>
            <Text size="xl">Company information</Text>
            <Grid>
              <Grid.Col md={4} sm={12}>
                <Text size="sm">
                  Every company must have a name and a deisgnation. For the company name you can use
                  both letters and numbers, but not special symbols. For the designations, there is
                  no actual different between one or another
                </Text>
              </Grid.Col>
              <Grid.Col md={8} sm={12}>
                <Flex direction="column" gap={20}>
                  <TextInput
                    label="Company name"
                    placeholder="The name you want your company to have"
                    value={forms['companyname']}
                    error={forms_error['companyname']}
                    onChange={(e) => {
                      setFroms({
                        ...forms,
                        companyname: e.target.value,
                      });
                    }}
                  />
                  <TextInput
                    label="Alternative company name"
                    placeholder='The name to use if the first name is not available'
                    value={forms['alternative_companyname']}
                    error={forms_error['alternative_companyname']}
                    onChange={(e) => {
                      setFroms({
                        ...forms,
                        alternative_companyname: e.target.value,
                      });
                    }}
                  />
                  <Select
                    label="Company designation"
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                    placeholder="Select the option that you prefer"
                    value={forms['company_designation']}
                    error={forms_error['company_designation']}
                    onChange={(value) => {
                      setFroms({
                        ...forms,
                        company_designation: value || '',
                      });
                    }}
                  ></Select>
                </Flex>
              </Grid.Col>
            </Grid>
            <Text size="xl">Company information</Text>
            <Grid>
              <Grid.Col md={4} sm={12}>
                <Text size="sm">
                  Every company must have a name and a deisgnation. For the company name you can use
                  both letters and numbers, but not special symbols. For the designations, there is
                  no actual different between one or another
                </Text>
              </Grid.Col>
              <Grid.Col md={8} sm={12}>
                <Flex direction="column" gap={20}>
                  <Select
                    label="Jurisdiction of operation"
                    data={['AAA', 'BBB', 'CCC', 'DDD']}
                    placeholder="Select the country where you are located"
                    value={forms['jurisdiction_operation']}
                    error={forms_error['jurisdiction_operation']}
                    onChange={(value) => {
                      setFroms({
                        ...forms,
                        jurisdiction_operation: value || '',
                      });
                    }}
                  ></Select>
                  <Select
                    label="Target jurisdictions"
                    data={['AAA', 'BBB', 'CCC', 'DDD']}
                    placeholder="Select the country where you clients are located"
                    value={forms['target_jurisdictions']}
                    error={forms_error['target_jurisdictions']}
                    onChange={(value) => {
                      setFroms({
                        ...forms,
                        target_jurisdictions: value || '',
                      });
                    }}
                  ></Select>
                </Flex>
              </Grid.Col>
            </Grid>
            <Text size="xl">Shares structure</Text>
            <Grid>
              <Grid.Col md={4} sm={12}>
                All companies must have at least 1 share. Apart from that, you can structure things
                in whatever way you like. issued shares are shares that will be distributed from day
                1. Unissued shares are shares that you can distribute later on, i.e. to future team
                members of investors. The value per shares represents your personal liability. so,
                if you wish to reduce risks, just pick the smallest number.
              </Grid.Col>
              <Grid.Col md={8} sm={12}>
                <Select
                  label="Number of shares"
                  data={['0', '1', '2', '3']}
                  placeholder="Select the country where you clients are located"
                  value={forms['shares']}
                  error={forms_error['shares']}
                  onChange={(value) => {
                    setFroms({
                      ...forms,
                      shares: value || '',
                    });
                  }}
                ></Select>
                <Flex direction="column" gap={20}>
                  <Flex gap={10} direction="column">
                    <Text>Are all shares issued?</Text>
                    <Box p={10} className="border border-[#373A40] rounded-[5px] bg-[#16293c]">
                      <Checkbox
                        label="Yes"
                        radius="xl"
                        checked={forms['is_shares']}
                        onChange={(checked) => {
                          setFroms({
                            ...forms,
                            is_shares: checked.target.checked,
                          });
                        }}
                      />
                    </Box>
                    <Box p={10} className="border border-[#373A40] rounded-[5px] bg-[#16293c]">
                      <Checkbox
                        label="No"
                        radius="xl"
                        checked={!forms['is_shares']}
                        onChange={(checked) => {
                          setFroms({
                            ...forms,
                            is_shares: !checked.target.checked,
                          });
                        }}
                      />
                    </Box>
                  </Flex>
                  <NumberInput
                    label="Number of issued shares"
                    placeholder="Write how many shares you wish to issue on day 1"
                    value={forms['number_issued_shares']}
                    onChange={(value) => {
                      setFroms({
                        ...forms,
                        number_issued_shares: value || 0,
                      });
                    }}
                  />
                  <Select
                    label="Value per shares"
                    data={['0', '1', '2', '3']}
                    placeholder="Select how much each share is worth"
                    value={forms['value_per_shares']}
                    error={forms_error['value_per_shares']}
                    onChange={(value) => {
                      setFroms({
                        ...forms,
                        value_per_shares: value || '',
                      });
                    }}
                  ></Select>
                </Flex>
              </Grid.Col>
            </Grid>
            <Button size="xl" type="submit">
              NEXT
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}
