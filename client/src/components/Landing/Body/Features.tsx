import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

export default function StatsGridWithImage() {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/src/assets/woman.jpg')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={useColorModeValue('linear(to-r, white 0%, transparent)', 'linear(to-r, gray.800 10%, transparent)')}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={useColorModeValue('gray.700', 'gray.500')}>
                Discover more
              </Text>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Discover the future of digital economy
              </Heading>
              <Text fontSize={'xl'} color={useColorModeValue('gray.900', 'gray.400')}>
              Explore a different way to manage your money 
              </Text>
              <Text fontSize={'xl'} color={useColorModeValue('black', 'white')}>
              anytime anyplace
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={useColorModeValue('gray.900', 'white')}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={useColorModeValue('gray.700', 'gray.400')}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={useColorModeValue('gray.700', 'white')}>
    {children}
  </Text>
);

const stats = [
  {
    title: '10+',
    content: (
      <>
        <StatsText>Software modules</StatsText> for detailed monitoring and
        real-time analytics
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: '33%',
    content: (
      <>
        <StatsText>Transactions</StatsText> with other OneBit users without limits
      </>
    ),
  },
  {
    title: '250M+',
    content: (
      <>
        <StatsText>Currencies</StatsText> currently updated and monitored by the
        OneBit systems
      </>
    ),
  },
];
