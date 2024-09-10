import type { Attachment } from 'airtable'
import airtable from '@/app/airtable'

type Fields = {
    Title: string
    Image: Attachment[]
    Description: string
    Link: string
    Date: string
}

export async function fetchEvents(base: string, table: string) {
    const records = await airtable.base(base)<Fields>(table)
        .select().all()

    const events = records.map(r => ({
        title: r.get('Title'),
        image: r.get('Image')[0].url,
        text: r.get('Description'),
        link: r.get('Link'),
        date: (new Date(r.get('Date'))).toLocaleDateString('en-US', { month: 'short', day: '2-digit' }),
    }))

    return events
}
