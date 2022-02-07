import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SocialProfileSimple() {
    return (
      <Center py={6}  height="container.sm" justifyContent="space-around">
        <Box
         
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          >
          <Avatar
            size={'xl'}
            src={
              'https://www.cronista.com/files/image/412/412387/61a77b053fa07.jpg'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            DOLLAR
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            TODAY
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            $0.00 $0.00
            
          </Text>
  
         
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Send
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Convert
            </Button>
          </Stack>
        </Box>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzEh5htl5HY3p4fNAOpCplDWJenNB0wj963eAB6x_vi_W6OXcBM_-9Nu_i_vGgXIzIxC4&usqp=CAU'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            EURO
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            TODAY
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            
            €0.00 €0.00
          </Text>
  
         
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Send
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Convert
            </Button>
          </Stack>
        </Box>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'data:image/jpeg;base64,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'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            PESO ARGENTINO
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            TODAY
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            $0.00 $0.00
            
          </Text>
  
         
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Send
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Convert
            </Button>
          </Stack>
        </Box>
        
      </Center>
    );
  }