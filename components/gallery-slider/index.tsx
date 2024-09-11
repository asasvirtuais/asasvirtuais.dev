import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/flicking-plugins/dist/pagination.css'

import Flicking, { Plugin, ViewportSlot } from '@egjs/react-flicking'
import { Fade, Arrow, Pagination, AutoPlay, Sync } from '@egjs/flicking-plugins'
import { useEffect, useRef, useState } from 'react'
import { Box, chakra, Text, Card, CardHeader, CardBody, CardFooter, Link, Badge, Container, Stack, Button, HStack } from '@chakra-ui/react'

export type GalleryItem = {
    title?: string
    image?: string
    text?: string
    link?: string
    date?: string
}

type GallerySliderProps = {
    items: GalleryItem[]
}

export default function GallerySlider({ items = [] }: GallerySliderProps) {
    const panelsRef = useRef<Flicking>()
    const slidesRef = useRef<Flicking>()

    const [plugins, setPlugins] = useState<Plugin[]>([])

    useEffect(() => {
        const fade = new Fade()
        const arrow = new Arrow()
        const pagination = new Pagination({ type: 'scroll' })
        const play = new AutoPlay()
        const sync = new Sync({
            type: 'camera',
            synchronizedFlickingOptions: [
                { flicking: panelsRef.current as any, isSlidable: false },
                { flicking: slidesRef.current as any, isClickable: true },
            ]
        })
        setPlugins([sync, play, arrow, pagination, fade])
    }, [])

    return (
        <Box w='100%'
            display='flex' flexDir='column'
            bg='black'
            position='relative'
        >
            <Box flex={1} zIndex={1} w='100%'>
                <Flicking
                    ref={panelsRef as any}
                    bound
                    circular
                    bounce={30}
                    panelsPerView={1}
                    hideBeforeInit
                >
                    {items.map((event) => (
                        <Box key={event.title}
                            pb='33dvh'
                            minH='100dvh'
                            backgroundSize='cover'
                            backgroundPosition='center'
                            backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(30,30,30,1) 75%), url(${event.image})`}>
                            <Container maxW='container.md' height='100%' justifyContent='center' centerContent>
                                <Stack color='white' bg='rgba(0,0,0,.5)' p={[4, 6]} >
                                    <Text as='h2' fontSize='2xl'>{event.title}</Text>
                                    <Text>{event.text}</Text>
                                    <HStack w='100%' justifyContent='space-between'>
                                        <Text as='h3' fontSize='xl'>{event.date}</Text>
                                        <Link href={event.link}><Button>Event page</Button></Link>
                                    </HStack>
                                </Stack>
                            </Container>
                        </Box>
                    ))}
                </Flicking>
            </Box>
            <Box position='absolute'
                zIndex={3}
                left={0} right={0} bottom={0}
                width='100%'
                height='auto'
                px={[0]}
                sx={{ '.flicking-camera': { py: 12 } }}
            >
                <Flicking ref={slidesRef as any}
                    bound
                    circular
                    moveType='snap'
                    plugins={plugins}
                    preventClickOnDrag
                    preventDefaultOnDrag
                    preventEventsBeforeInit
                    bounce={30}
                >
                    {items.map((event) => (
                        <Box px={1} key={event.title}>
                            <Card
                                as={Link}
                                width='300px'
                                maxH='25dvh'
                                aspectRatio={1.618}
                                maxWidth='100dvw'
                                cursor='pointer'
                                backgroundSize='cover'
                                backgroundImage={event.image}
                                position='relative'
                                href={event.link}
                            >
                                <Box position='absolute'
                                    zIndex={2}
                                    top={0} width={0} right={0} left={0}
                                    w='100%' h='100%'
                                    background='rgba(0,0,0,0.5)'>
                                    <CardHeader w='full'>
                                        <chakra.h3 color='white' fontWeight='bold'
                                            fontSize='lg'
                                        >{event.title}</chakra.h3>
                                    </CardHeader>
                                </Box>
                                <CardBody>
                                </CardBody>
                                <CardFooter zIndex={2} justifyContent='space-between' alignItems='center'>
                                    {event.date && (
                                        <Badge size='sm' color='white' variant='outline' borderColor='white' >{event.date}</Badge>
                                    )}
                                </CardFooter>
                            </Card>
                        </Box>
                    ))}
                    <ViewportSlot>
                        <chakra.div sx={{
                            '.flicking-pagination-bullet': {
                                height: '24px',
                                width: '24px',
                                background: 'white'
                            }
                        }} className='flicking-pagination' />
                        <chakra.span sx={{ '::before, ::after': { background: 'white' } }} className='flicking-arrow-prev' />
                        <chakra.span sx={{ '::before, ::after': { background: 'white' } }} className='flicking-arrow-next' />
                    </ViewportSlot>
                </Flicking>
            </Box>
        </Box>
    )
}
