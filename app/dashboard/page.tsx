import { Text, Container, Stack, Badge } from '@chakra-ui/react'
import { userOrLogin } from '@/app/auth/actions'

export default async () => {
    const user = await userOrLogin('/dashboard')
    return (
        <Container maxW='container.lg' py={8}>
            <Stack alignItems='flex-start' maxW='container.md'>
                <Text fontSize='3xl'>Hello {user.nickname}</Text>
                <Badge>{new Date().toLocaleDateString(undefined, {
                    dateStyle: 'full'
                })}</Badge>

            </Stack>
        </Container>
    )
}
