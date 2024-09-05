import type { Attachment } from 'airtable'
import airtable from '@/app/airtable'
import Flicker from '.'

type Fields = {
    Title: string
    Image: Attachment[]
    Description: string
    Link: string
    Date: string
}

const table = airtable.base('appXEksvbf93Ov7tj')<Fields>('tblaFbz8NrbUZXNav')

export default async function () {
    const records = await table.select().all()

    const events = records.map(r => ({
        title: r.get('Title'),
        image: r.get('Image')[0].url,
        text: r.get('Description'),
        link: r.get('Link'),
        date: (new Date(r.get('Date'))).toLocaleDateString('en-US', { month: 'short', day: '2-digit' }),
    }))

    return (
        <Flicker events={events} />
    )
}
