import { Center, Container, Heading, Text, VStack,Image, Box, Button, Slide, HStack } from '@chakra-ui/react'
import HireMe from './hire-me'
import FloatingIcons from './icons'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title: 'Icaro Asas Virtuais',
  description: 'Freelancer Web Developer',
  openGraph: {
    type: 'profile',
    url: 'https://asasvirtuais.dev',
    title: 'Icaro Asas Virtuais',
    description: 'Freelancer Web Developer',
    images: [
      {
        url: 'https://asasvirtuais.dev/upwork-desktop.png',
        width: 1366,
        height: 768,
        alt: 'Icaro Asas Virtuais',
      },
    ],
  },
}


export default function Home() {
  return (
    <>
      <Container as='main' maxW='auto' p={0}>
        <Center>
          <VStack minH='100vh' w='100%' textAlign='center'>
            <Slide direction='top' in>
              <VStack h='140px' pt={6}>
                <Heading bg='white'>icaro asas virtuais</Heading>
                <Text bg='white' fontSize='lg'>Freelancer Web Developer</Text>
              </VStack>
            </Slide>
            <Box w='100%' h='calc(100vh - 140px)' mt='auto' position='relative'>
              <Slide direction='bottom' in>
                <Image zIndex={1} mx='auto' maxH='calc(100vh - 150px)' src='/images/icaro.png' />
              </Slide>
              <HireMe/>
              <FloatingIcons/>
            </Box>
          </VStack>
        </Center>
      </Container>
    </>
  )
}
