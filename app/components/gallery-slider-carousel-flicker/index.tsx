'use client'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/flicking-plugins/dist/pagination.css'

import Flicking, { Plugin, SelectEvent, ViewportSlot } from '@egjs/react-flicking'
import { Fade, Arrow, Pagination, AutoPlay } from '@egjs/flicking-plugins'
import { useCallback, useEffect, useRef, useState } from 'react'
import mock from './mock.json'
import { Box, chakra, Image, AspectRatio, useBoolean, Card, CardHeader, Button, CardBody, CardFooter, Badge, Link } from '@chakra-ui/react'

export type GalleryItem = {
    title?: string
    image?: string
    text?: string
    link?: string
    date?: string
}

type Props = {
    items?: GalleryItem[]
}

export default () => {
    const ref = useRef<Flicking>()

    const [plugins, setPlugins] = useState<Plugin[]>([])

    useEffect(() => {
        setPlugins([
            new Fade(),
            new Arrow(),
            new Pagination({
                type: 'scroll',
            }),
            new AutoPlay(),
        ])
    }, [])
    const [prevent, { on, off }] = useBoolean()
    const onSelect = useCallback((e: SelectEvent) => {
        on()
        if (!prevent)
            e.panel.focus(400)
                .finally(off)
    }, [prevent])

    return (
        <Box w='100%' overflow='hidden' sx={{
            '.flicking-camera': {
                py: 12
            }
        }}>
            <Flicking ref={ref as any}
                bound
                circular
                moveType='snap'
                plugins={plugins}
                onMoveStart={on}
                onMoveEnd={off}
                onSelect={onSelect}
                preventClickOnDrag
                preventDefaultOnDrag
                preventEventsBeforeInit
            >
                {mock.map((event) => (
                    <Box px={1} key={event.title}>
                        <Card
                            width='300px'
                            aspectRatio={1.618}
                            maxWidth='100dvw'
                            cursor='pointer'
                            pointerEvents={prevent ? 'none' : 'unset'}
                            backgroundSize='cover'
                            backgroundImage={event.image}
                            position='relative'
                        >
                            <Box position='absolute'
                                top={0} width={0} right={0} left={0}
                                w='100%' h='100%'
                                background='rgba(0,0,0,0.5)'>
                                <CardHeader w='full'>
                                    <chakra.h3 color='white' fontSize='2xl'>{event.title}</chakra.h3>
                                </CardHeader>
                            </Box>
                            <CardBody>
                            </CardBody>
                            <CardFooter justifyContent='space-between' alignItems='center'>
                                {event.date && (
                                    <Button size='lg' color='white' variant='ghost' colorScheme='whiteAlpha'>{event.date}</Button>
                                )}
                                <Link href={event.link}>
                                    <Button colorScheme='whiteAlpha' size='lg' >See More</Button>
                                </Link>
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
    )
}
