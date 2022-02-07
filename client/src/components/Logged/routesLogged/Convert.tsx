import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select,
    Switch,
  } from '@chakra-ui/react';
  
  export default function SimpleCard() {
    return (
      <Flex
      borderStyle="solid"
        minH={'100vh'}
        justify={'center'}
        
        
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Convert your currency</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Select the currency you want  ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <Select placeholder='Currency' marginBottom={50}>
  <option value='option1'>Dollar</option>
  <option value='option2'>Euro</option>
  <option value='option3'>Peso Argentino</option>
</Select>
              
              <FormControl id="Amount" placeholder='0.00$'>
                <FormLabel>Amount</FormLabel>
                <Input type="Amount" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <FormControl display='flex' alignItems='center'>
  <FormLabel htmlFor='email-alerts' mb='0'>
    Are you sure ?
  </FormLabel>
  <Switch id='email-alerts' />
</FormControl>
                  
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Convert
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }