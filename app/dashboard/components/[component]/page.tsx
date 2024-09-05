import GallerySliderCarouselFlicker from '@/app/components/gallery-slider-carousel-flicker'
import { Box, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'

type Component<S extends Record<string, string>> = {
    id: string
    description: string
    settings: S
}

export default function () {
    return (
        <Stack>
            <Box bg='black'>
                {/* <GallerySliderCarouselFlicker /> */}
            </Box>
            <FormControl>
                <FormLabel>Airtable Access Token</FormLabel>
                <Input type='text' />
            </FormControl>
        </Stack>
    )
}
