'use client'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/flicking-plugins/dist/pagination.css'

import Flicking, { Plugin, SelectEvent, ViewportSlot } from '@egjs/react-flicking'
import { Fade, Arrow, Pagination, AutoPlay, Sync } from '@egjs/flicking-plugins'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, chakra, useBoolean, Card, CardHeader, Button, CardBody, CardFooter, Link } from '@chakra-ui/react'

export type GalleryItem = {
    title?: string
    image?: string
    text?: string
    link?: string
    date?: string
}

type Props = {
    events: GalleryItem[]
}

export default ({ events = [] }: Props) => {
    const panelsRef = useRef<Flicking>()
    const slidesRef = useRef<Flicking>()

    const [plugins, setPlugins] = useState<Plugin[]>([])

    useEffect(() => {
        const fade = new Fade()
        const arrow = new Arrow()
        const pagination = new Pagination({ type: 'scroll' })
        const play = new AutoPlay()
        const sync = new Sync({
            type: 'index',
            synchronizedFlickingOptions: [
                { flicking: panelsRef.current as any, isSlidable: true },
                { flicking: slidesRef.current as any, isClickable: true, activeClass: 'active' }
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
            <Box flex={1} zIndex={1}>
                <Flicking
                    ref={panelsRef as any}
                    bound
                    circular
                    bounce={30}
                    panelsPerView={1}
                >
                    {events.map((event) => (
                        <Box key={event.title}
                            minH='100dvh'
                            backgroundSize='cover'
                            backgroundImage={event.image} />
                    ))}
                </Flicking>
            </Box>
            <Box zIndex={2} position='absolute' top={0} right={0} left={0} bottom={0} height='100%' width='100%'
                background='linear-gradient(0deg, rgba(30,30,30,0.8) 25%, rgba(0,0,0,0) 100%)'
            />
            <Box position='absolute'
                zIndex={3}
                left={0} right={0} bottom={0}
                width='100%'
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
                    {events.map((event) => (
                        <Box px={1} key={event.title}>
                            <Card
                                width='300px'
                                aspectRatio={1.618}
                                maxWidth='100dvw'
                                cursor='pointer'
                                backgroundSize='cover'
                                backgroundImage={event.image}
                                position='relative'
                            >
                                <Box position='absolute'
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
                                <CardFooter justifyContent='space-between' alignItems='center'>
                                    {event.date && (
                                        <Button size='sm' color='white' variant='ghost' colorScheme='whiteAlpha'>{event.date}</Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </Box>
                    ))}
                    <ViewportSlot>
                        <chakra.div sx={{
                            '.flicking-pagination-bullet': {
                                height: '24px',
                                width: '24px'
                            }
                        }} className='flicking-pagination' />
                        <chakra.span className='flicking-arrow-prev' />
                        <chakra.span className='flicking-arrow-next' />
                    </ViewportSlot>
                </Flicking>
            </Box>
        </Box>
    )
}
