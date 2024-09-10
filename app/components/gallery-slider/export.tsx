import { createRoot } from 'react-dom/client'
import Chakra from '@/app/theme/chakra'
import AirtableGallerySlider, { AirtableGallerySliderProps } from './airtable'

const element = document.getElementById('@asasvirtuais/gallery-slider')

if (!element)
    console.log('element#@asasvirtuais/gallery-slider not found')
else
    createRoot(element).render(
        <Chakra>
            <AirtableGallerySlider {...({ ...element.dataset } as AirtableGallerySliderProps)} />
        </Chakra>
    )
