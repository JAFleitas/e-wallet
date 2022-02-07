import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Switch,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function contact() {
    return (
        <Container  maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box
                    bg="#02054B"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4} justifyItems="space-between">
                        <FormControl display='flex' alignItems='center' padding={5}>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Allow me to receive money from everybody
                            </FormLabel>
                            <Switch id='email-alerts' />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' padding={5}>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Allow me to send money to everybody
                            </FormLabel>
                            <Switch id='email-alerts' />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' padding={5}>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Block friend requests
                            </FormLabel>
                            <Switch id='email-alerts' />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' padding={5}>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Settings 4
                            </FormLabel>
                            <Switch id='email-alerts' />
                        </FormControl>
                        <FormControl display='flex' alignItems='center' padding={5}>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Settings 5
                            </FormLabel>
                            <Switch id='email-alerts' />
                        </FormControl>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}