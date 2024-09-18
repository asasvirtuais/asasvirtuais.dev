import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/flicking-plugins/dist/pagination.css'

import Flicking, { Plugin, ViewportSlot } from '@egjs/react-flicking'
import { Fade, Arrow, AutoPlay, Sync } from '@egjs/flicking-plugins'
import { useEffect, useRef, useState } from 'react'
import { Box, chakra, Text, Card, CardHeader, CardBody, CardFooter, Link, Badge, Container, Stack, Button, HStack } from '@chakra-ui/react'

export type GalleryItem = {
    title?: string
    image?: string
    video?: string
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
        const play = new AutoPlay({ duration: 9999999, stopOnHover: true })
        const sync = new Sync({
            type: 'camera',
            synchronizedFlickingOptions: [
                { flicking: panelsRef.current as any, isSlidable: false, isClickable: false },
                { flicking: slidesRef.current as any, isSlidable: true, isClickable: true },
            ]
        })
        setPlugins([sync, play, arrow, fade])
    }, [])

    return (
        <Box w='100%'
            display='flex' flexDir='column'
            bg='black'
            position='relative'
        >
            <Box flex={1} zIndex={1} w='100%' pointerEvents='none'>
                <Flicking
                    ref={panelsRef as any}
                    bound
                    circular
                    bounce={30}
                    panelsPerView={1}
                    hideBeforeInit
                    className='.gallery-slider-panels'
                >
                    {items.map((event) => (
                        <Box key={event.title}
                            position='relative'
                            pb='33dvh'
                            minH='100dvh'
                            backgroundSize='cover'
                            backgroundPosition='center'
                            backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(30,30,30,1) 75%), url(${event.image})`}>

                            {event.video && (
                                <Box
                                    zIndex={1}
                                    w='100%'
                                    h='100%'
                                    top={0}
                                    left={0}
                                    right={0}
                                    bottom={0}
                                    position='absolute'
                                >
                                    <chakra.video
                                        w='100%'
                                        h='100%'
                                        objectFit='cover'
                                        autoPlay
                                        controls={false}>
                                        <source src={event.video} type='video/mp4' />
                                    </chakra.video>
                                </Box>
                            )}

                            <Container position='relative' zIndex={2} pl={{ md: '64px' }} pb={{ md: '28px' }} alignItems={{ base: 'center', sm: 'flex-start' }} maxW='full' height='100%' justifyContent='flex-end' centerContent>
                                <Stack pointerEvents='all' color='white' maxW='sm' bg='rgba(0,0,0,.5)' p={[4, 6]} >
                                    <Text as='h2'>{event.title}</Text>
                                    <Text py={4} textAlign='left'>{event.text}</Text>
                                    <HStack w='100%' justifyContent='space-between'>
                                        <Text noOfLines={ } as='h3'>{event.date}</Text>
                                        <Link href={event.link}><Button variant='outline'>Event page</Button></Link>
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
                sx={{ '.flicking-camera': { py: 4 } }}
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
                        <chakra.span sx={{ '::before, ::after': { background: 'white !important' } }} className='flicking-arrow-prev' />
                        <chakra.span sx={{ '::before, ::after': { background: 'white !important' } }} className='flicking-arrow-next' />
                    </ViewportSlot>
                </Flicking>
            </Box>
        </Box >
    )
}
