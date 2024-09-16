import type { Metadata } from 'next'
import Frame from './frame'

export const metadata: Metadata = {
    title: 'Icaro Asas Virtuais',
    description: 'This freelancer is now on Contra',
    openGraph: {
        type: 'profile',
        url: 'https://asasvirtuais.dev',
        title: 'Icaro Asas Virtuais',
        description: 'This freelancer is now on Contra',
        images: [
            {
                url: 'https://asasvirtuais.dev/images/fractals.png',
                width: 1366,
                height: 768,
                alt: 'Icaro Asas Virtuais',
            },
        ],
    },
}

export default () => (
    <Frame />
)
