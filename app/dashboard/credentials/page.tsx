
import { Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

import { userOrLogin } from '@/app/auth/actions'

import Container from '@/app/components/container'
import Link from '@/app/components/link'

export default async function () {
    const user = await userOrLogin('/dashboard/credentials')
    return (
        <Container maxW='container.lg' py={8}>
            <Stack alignItems='flex-start' maxW='container.md'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link as={BreadcrumbLink} href='/dashboard'>Dashboard</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link as={BreadcrumbLink} href='/dashboard/credentials'>Credentials</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Text as='h1' fontSize='3xl'>Access Credentials</Text>
            </Stack>
        </Container>
    )
}