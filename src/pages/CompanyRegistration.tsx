import { Box, Button, Flex } from '@mantine/core';
import { useFormValidation } from '../hooks/useFormValidation';
import UserInfoForm from '../components/forms/UserInfoForm';
import CompanyInfoForm from '../components/forms/CompanyInfoForm';
import JurisdictionForm from '../components/forms/JurisdictionForm';
import SharesForm from '../components/forms/SharesForm';
import { initialFormValues } from '../constants/formOptions';

const CompanyRegistration = () => {
  const { values, errors, handleChange, validate } = useFormValidation(initialFormValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(values);
    }
  };

  return (
    <Flex
      w="100%"
      direction="column"
      align="center"
      mt={100}
      justify="center"
      pb={100}
    >
      <Box w="100%" maw={900}>
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap={30}>
            <UserInfoForm 
              values={values} 
              errors={errors} 
              onChange={handleChange} 
            />
            <CompanyInfoForm 
              values={values} 
              errors={errors} 
              onChange={handleChange} 
            />
            <JurisdictionForm 
              values={values} 
              errors={errors} 
              onChange={handleChange} 
            />
            <SharesForm 
              values={values} 
              errors={errors} 
              onChange={handleChange} 
            />
            <Button size="xl" type="submit">
              NEXT
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default CompanyRegistration;