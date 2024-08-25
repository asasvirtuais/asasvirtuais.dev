/** Logo Generator */
import { NextRequest, NextResponse } from 'next/server'
import { ImageResponse } from 'next/og'
import { LogoIcon } from '@/app/logo'
import { notFound } from 'next/navigation'
export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest, {
    params
}: {
    params: { size: string, file: 'asasvirtuais.png' | 'asasvirtuais.svg' }
} ) {
    console.log(params);

    ['asasvirtuais.png', 'asasvirtuais.svg'].includes(params.file) || notFound()
    const borderless = request.nextUrl.searchParams.has('borderless')
    let size = Math.min(Math.max(parseInt(params.size) || 16, 16), 1024)
    if ( params.file.endsWith('.svg') ) {
        return new NextResponse((await import('react-dom/server')).renderToString(
            <LogoIcon size={size} borderless={borderless as true} />
        ), {
            headers: { 'Content-Type': 'image/svg+xml' }
        })
    }
    return new ImageResponse(
        <LogoIcon size={size} borderless={borderless as true} />,
        { width: size, height: size }
    )
}