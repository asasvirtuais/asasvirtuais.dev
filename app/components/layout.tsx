import { PropsWithChildren } from 'react'
import Container from './container'
import { Center } from '@chakra-ui/react'

export default function ComponentsLayout({ children }: PropsWithChildren) {
    return (
        <Container maxW='100%' p={0}>
            <Center minH='100dvh'>
                {children}
            </Center>
        </Container>
    )
}
