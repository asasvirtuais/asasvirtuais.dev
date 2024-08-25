import Chakra from '@/app/theme/chakra'
import og from '@/public/images/clouds.jpg'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Chakra>
          {children}
        </Chakra>
      </body>
    </html>
  )
}
