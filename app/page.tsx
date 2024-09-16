import type { Metadata } from 'next'
import Frame from '@/app/contra/frame'

export const metadata: Metadata = {
    title: 'Icaro Asas Virtuais',
    description: 'This freelancer is now on Contra',
    openGraph: {
        type: 'profile',
        url: 'https://asasvirtuais.dev',
        title: 'Icaro Asas Virtuais',
        description: 'This expert is now on Contra',
        firstName: 'Icaro',
        lastName: 'Asas Virtuais',
        username: 'asasvirtuais',
        images: [
            {
                url: 'https://asasvirtuais.dev/images/fractals.png',
                width: 825,
                height: 500,
                alt: 'Icaro Asas Virtuais',
            },
        ],
    },
}

export default () => (
    <Frame />
)
