import airtable from '@/app/airtable'

type Fields = {
    name: string
    key: string
    value: string
}

const devtable = airtable(process.env.AIRTABLE_TOKEN as string)

export const getComponentOptions = async <R extends Record<string, string>>(component: string) => (
    Object.fromEntries(
        (await devtable.base('appXEksvbf93Ov7tj')
            .table<Fields>('tblxUvgZznkR0asVt')
            .select({ filterByFormula: `name = "${component}"` })
            .all()
        ).map(record => [record.get('key'), record.get('value')])
    ) as R
)