import { Box, Button, ButtonProps, GenericAvatarIcon, GridItem, Heading, HStack, IconButton, Link, ListItem, SimpleGrid, Stack, UnorderedList } from '@chakra-ui/react'
import { LogoIcon } from '@/app/logo'
import { zIndexEnum } from '@/app/theme/enums'
import Container from '@/app/components/container'

export default function Navbar() {
    return (
        <Box
            as='nav'
            aria-label='navbar'
            zIndex={zIndexEnum['header.topnavbar']}
            bg='white'
            position='relative'
            borderBottom='1px solid'
            borderColor='gray.200'
            shadow='md'
        >

            <Container>
                <SimpleGrid
                    as='nav'
                    gap={6}
                    alignItems='center'
                    gridTemplateColumns='max-content auto min-content'
                >
                    <GridItem order={1}
                        as={Link}
                        href='/'>
                        <Heading display={['none', 'none', 'block']} fontSize='1.2em'>Asas<br />​ Virtuais</Heading>
                        <LogoIcon size={32} display={['block', 'block', 'none']} fontSize={32} />
                    </GridItem>
                    <GridItem order={[2, 2, 3]} as={HStack} justifyContent='space-around' spacing={[0, 0, 6]}>
                        <Button color='black' variant='link' size='xs'>Sign Up</Button>
                        <Button color='black' borderColor='black' variant='outline' size='xs'>Login</Button>
                    </GridItem>
                    <GridItem display={['block', 'block', 'none']} order={[3, 3, 2]}>
                        <Button color='black' borderColor='black' variant='ghost' fontSize='xl'>M</Button>
                    </GridItem>
                    <GridItem order={[5, 5, 2]} colStart={[1, 1, 2]} colEnd={[2, 2, 3]} bg='gray.200' py={4}
                        position={['absolute', 'absolute', 'static']} left={0} w='100%' top='100%'
                        h={{
                            base: 'calc(100dvh - 100%)',
                            md: 'auto'
                        }}
                    >
                        <Stack as={UnorderedList} flexDir={['column', 'column', 'row']} justifyContent='space-evenly'>
                            <ListItem as={Link} href='#'>UpWork</ListItem>
                            <ListItem as={Link} href='#'>GitHub</ListItem>
                            <ListItem as={Link} href='#'>LinkedIn</ListItem>
                        </Stack>
                    </GridItem>
                </SimpleGrid>
            </Container>

        </Box>
    )
}