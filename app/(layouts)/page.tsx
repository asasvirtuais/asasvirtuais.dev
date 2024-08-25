import { Center, SimpleGrid, GridItem, GridItemProps, Card } from '@chakra-ui/react'
import Navbar from './navbar'
import og from '@/public/images/clouds.jpg'

import type { Metadata } from 'next/types'

export const metadata: Metadata = {
    title: 'asasvirtuais.dev',
    description: 'Web Development platform',
    openGraph: {
        type: 'website',
        url: 'https://asasvirtuais.dev',
        title: 'asasvirtuais.dev',
        description: 'Web Development platform',
        images: [
            {
                url: og.src,
                width: 1366,
                height: 768,
                alt: 'Icaro Asas Virtuais',
            },
        ],
    },
}

const CardItem = ({ title, ...props }: { title: string } & GridItemProps) => (
    <GridItem
        as={Card}
        bg='white'
        justify='center'
        align='center'
        fontWeight='bolder'
        fontSize='larger'
        textAlign='center'
        aspectRatio={1.618}
        {...props}>
        {title}
    </GridItem>
)

export default function () {
    return (
        <>
            <Navbar />
            <Center flex={1} justifyContent='stretch' alignItems='stretch'>
                <SimpleGrid columns={[1, 2, 2, 4]} w='100%' gap={[4, 12]} padding={[4, 12]}>

                    <CardItem title='Pages' />
                    <CardItem title='Dashboards' />
                    <CardItem title='Forms' />
                    <CardItem title='UI Components' />

                    <CardItem title='Airtable APIs' />
                    <CardItem title='WordPress APIs' />
                    <CardItem title='Stripe APIs' />
                    <CardItem title='AI APIs' />

                    <CardItem title='Authentication' />
                    <CardItem title='Payments' />
                    <CardItem title='Notification' />
                    <CardItem title='Automation' />

                    <CardItem title='Google Cloud' />
                    <CardItem title='Vercel' />
                    <CardItem title='GitHub' />
                    <CardItem title='Databases' />

                </SimpleGrid>
            </Center>
        </>
    )
}
