
import { Input, List, ListItem, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

import { getByUser } from '@/app/oauth/credentials'
import { userOrLogin } from '@/app/auth/actions'

import Container from '@/app/components/container'
import Link from '@/app/components/link'
import { StackList } from '@/app/components/stack/list'
import { Fragment } from 'react'

export default async function () {
    const user = await userOrLogin('/dashboard/credentials')
    const credentials = await getByUser(user.sub)
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
                <Text as='h1' fontSize={['2xl', '3xl']}>Access Credentials</Text>
                <StackList w='full'>
                    {credentials.map((c, i) => (
                        <ListItem key={i}>
                            <b>
                                {c.created_at.toLocaleDateString(undefined, { dateStyle: 'long' })}
                                {' at '}
                                {c.created_at.toLocaleTimeString(undefined, { timeStyle: 'short' })}
                            </b>
                            <List styleType='disc' pl={4}>
                                <ListItem>
                                    <b>Provider</b>
                                    <br />
                                    {c.provider}
                                </ListItem>
                                <ListItem>
                                    <b>Access scope</b>
                                    <pre>
                                        {c.scope.split(' ').map(s => (
                                            s.startsWith('https://www.googleapis.com/auth/') ? s.split('/').pop() : s
                                        )).map(s => <Fragment key={s}>{s}<br /></Fragment>)}
                                    </pre>
                                </ListItem>
                                <ListItem>
                                    <b>API Key</b>
                                    <Input
                                        type='text'
                                        value={c.id}
                                        contentEditable={false}
                                        sx={{ '-webkit-text-security': 'disc' }}
                                        _focus={{ '-webkit-text-security': 'none' }}
                                        width='full'
                                    />
                                </ListItem>
                            </List>
                        </ListItem>
                    ))}
                </StackList>
            </Stack>
        </Container>
    )
}