import type { Metadata } from 'next/types'

const title = 'asasvirtuais.dev'
const description = 'Asas Virtuais provides an easier access to the best Web and AI technologies.'

export const metadata: Metadata = {
    title, description,
    openGraph: {
        type: 'website',
        url: 'https://asasvirtuais.dev',
        title, description,
        images: [
            {
                url: '/images/clouds.jpg',
                width: 1366,
                height: 768,
                alt: 'Icaro Asas Virtuais',
            },
        ],
    },
}


import { SimpleGrid, SimpleGridProps, GridItem } from '@chakra-ui/react'

const Header = ({ children, ...props }: SimpleGridProps) => (
    <SimpleGrid as='header' {...props}>
        {children}
    </SimpleGrid>
)
import { Button } from '@chakra-ui/react'
import { NavItem, StackNavProps, VNav } from './components/stack/nav'

const Navbar = ({ children, ...props }: StackNavProps) => {
    return (
        <VNav {...props}>
            <NavItem href='/dashboard'>
                <Button
                    rounded='none'
                    size='lg'
                    colorScheme='blackAlpha'
                >Dashboard</Button>
            </NavItem>
        </VNav>
    )
}

import Container from '@/app/components/container'
import { Heading, Stack, Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

export default function TraditionalLayout() {
    return (
        <Box backgroundImage='url(/vectors/background.svg)'>
            <Container>
                <Header columns={[1, 2]} minH='100dvh' minW='full'
                    alignItems='center' justifyContent='center'>
                    <GridItem as={Stack} gap={8} textAlign='left'>
                        <Heading as='h1'>Asas Virtuais</Heading>
                        <Text as='h2' fontSize='2xl'>Web and AI technologies facilitated</Text>
                    </GridItem>
                    <GridItem>
                        <Navbar />
                    </GridItem>
                </Header>
            </Container>
            <main>
            </main>
            <footer>
            </footer>
        </Box>
    )
}
