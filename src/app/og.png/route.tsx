import { ImageResponse } from 'next/og'
import siteConfig from '@/site.config'


export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang') ?? 'en-US',
    title = searchParams.get('title') ?? siteConfig.description;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: `#000000`,
        }}
      >
        <div
          lang={lang}
          style={{
            margin: '85px 300px 230px 80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            fontSize: 64,
            letterSpacing: '-0.05em',
            lineHeight: '80px',
            whiteSpace: 'pre-wrap',
            color: '#ffffff',
            fontWeight: 'bold',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}