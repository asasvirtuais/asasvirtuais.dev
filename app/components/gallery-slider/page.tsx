import AirtableGallerySlider from './airtable'

export default function GallerySliderPage() {
    return (
        <AirtableGallerySlider
            base='appXEksvbf93Ov7tj'
            table='tblaFbz8NrbUZXNav'
            token={process.env.NEXT_PUBLIC_AIRTABLE_TOKEN as string}
        />
    )
}