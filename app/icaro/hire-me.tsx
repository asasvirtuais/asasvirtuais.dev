'use client'

import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, CloseButton, Container, Link, Slide, VStack, useBoolean, useDisclosure } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

export default function HireMe() {
    const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: false}) 
    return (
        <Box
            zIndex={2}
            transition='.4s'
            position='fixed'
            borderRadius='16px'
            borderBottomRadius={0}
            background='rgba(0, 0, 0, 0.2)'
            boxShadow='0 4px 30px rgba(0, 0, 0, 0.1)'
            backdropFilter='blur(5px)'
            border='1px solid rgba(0, 0, 0, 0.3)'
            top={isOpen ? '-130px' : 'calc(100vh - 130px)'}
            bottom={0} left={0} right={0}>
            <Center h='130px'>
                <Button onClick={onOpen} rounded='1000px' colorScheme='whiteAlpha' size='lg'>HIRE ME!</Button>
            </Center>
            <Container>
                <Center minH='100vh'>
                    <Card w='xl'>
                        <CardHeader>
                            <CloseButton onClick={onClose} ml='auto'/>
                        </CardHeader>
                        <CardBody>
                            <VStack maxW='300px' mx='auto'>
                                <Button
                                    href='https://github.com/asasvirtuais'
                                    as={Link} isExternal
                                    textDecor='none'
                                    _hover={{textDecor: 'none'}}
                                    bg='black' color='white' colorScheme='none'
                                    w='100%' size='lg'
                                    leftIcon={<FaGithub style={{marginBottom:'4px'}} />}
                                >
                                GitHub
                                </Button>
                                <Button
                                    href='https://upwork.com/freelancers/icarocc'
                                    as={Link} isExternal
                                    textDecor='none'
                                    _hover={{textDecor: 'none'}}
                                    bg='#14A800' color='white' colorScheme='none'
                                    w='100%' size='lg'
                                    leftIcon={<SiUpwork/>}
                                >
                                Upwork
                                </Button>
                                <Button
                                    href='https://linkedin.com/in/icaro-capobianco'
                                    as={Link} isExternal
                                    textDecor='none'
                                    _hover={{textDecor: 'none'}}
                                    bg='#0A66C2' color='white' colorScheme='none'
                                    w='100%' size='lg'
                                    leftIcon={<FaLinkedin/>}
                                >
                                LinkedIn
                                </Button>
                            </VStack>
                        </CardBody>
                        <CardFooter>
                        </CardFooter>
                    </Card>
                </Center>
            </Container>
        </Box>
    )
}