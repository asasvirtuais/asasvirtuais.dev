import { Button, Card, CardBody, CardFooter, CardHeader, GridItem, Text, Textarea } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import Breadcrumbs from '../breadcrumbs'
import Link from '@/app/components/link'

const ComponentCard = () => (
    <GridItem as={Card} position='relative'>
        <Button position='absolute' right={0} fontSize='2xl' >⋮</Button>
        <CardHeader textAlign='center'>
            Gallery Slider
        </CardHeader>

        <CardBody>
            Gallery Slider includes panels and navigation slides. Takes images, text, date, and a link.
        </CardBody>

        <CardFooter justifyContent='flex-end'>
            <Link href={`/dashboard/components/gallery-slider`}>
                <Button variant='outline'>Demo</Button>
            </Link>
        </CardFooter>
    </GridItem>
)

const RequestComponent = () => (
    <Textarea rows={24} />
)

export default async function () {
    return (
        <>
            <Breadcrumbs base='/dashboard' crumbs={[['Components', '/dashboard/components']]} />
            <Text as='h1' fontSize={['2xl', '3xl']}>Components</Text>
            <SimpleGrid columns={[1, 2, 3]} w='full' gap={6}>
                <ComponentCard />
            </SimpleGrid>
        </>
    )
}
