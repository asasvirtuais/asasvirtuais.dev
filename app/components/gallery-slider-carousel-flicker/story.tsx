import GallerySliderCarouselFlicker from '@/app/components/gallery-slider-carousel-flicker/page'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta = {
    title: 'GallerySliderCarouselFlicker',
    component: GallerySliderCarouselFlicker,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    }
} satisfies Meta<typeof GallerySliderCarouselFlicker>

export default meta

import type { StoryObj } from '@storybook/react'
type Story = StoryObj<typeof meta>
export const Story: Story = {
    render: () => (
        <GallerySliderCarouselFlicker />
    )
}
// export const StateB: Story = {}
