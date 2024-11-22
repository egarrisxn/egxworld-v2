import {ImageResponse} from 'next/og'

export const size = {width: 1200, height: 600}
export const alt = ''
export const contentType = 'image/png'
export const runtime = 'edge'

// eslint-disable-next-line import/no-anonymous-default-export
export default async function () {
  const fontData = await fetch(new URL('./fonts/JoesBurger-mLE3a.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  )

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          background: '#000000',
          flexDirection: 'column',
          border: '6px solid #DCDCDC',
          borderRadius: '4px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            padding: '10px 0px 0px 10px',
          }}
        >
          <span
            style={{
              fontSize: 25,
              color: '#FFFFFF',
              padding: '10px 0px 0px 10px',
            }}
          >
            MMXXIV
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            color: '#FFFFFF',
            textAlign: 'center',
            height: 630 - 50 - 50,
            maxWidth: 1000,
            fontSize: 100,
          }}
        >
          EG
          <span
            style={{
              color: '#87CEEB',
            }}
          >
            X
          </span>
          WORLD
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: 'JoesBurger',
          data: fontData,
          weight: 500,
        },
      ],
      width: 1200,
      height: 630,
    },
  )
}
