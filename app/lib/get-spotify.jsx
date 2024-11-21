export async function getAccessToken() {
  const response = await fetch('/api/spotify', {method: 'POST'})
  if (!response.ok) {
    throw new Error('Failed to fetch access token')
  }
  return await response.json()
}

const getNowPlaying = async (accessToken) => {
  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch now playing data: ${response.statusText}`)
  }
  return response
}

export default async function getNowPlayingItem() {
  try {
    const {access_token} = await getAccessToken()
    const response = await getNowPlaying(access_token)

    if (response.status === 204 || response.status >= 400) {
      return {
        isPlaying: false,
        albumImageUrl: '',
        artist: '',
        songUrl: '',
        title: '',
      }
    }

    const nowPlayingData = await response.json()
    const song = nowPlayingData.item
    if (!song) {
      return {
        isPlaying: false,
        albumImageUrl: '',
        artist: '',
        songUrl: '',
        title: '',
      }
    }

    const albumImageUrl = song.album.images[0]?.url || ''
    const artist = song.artists.map((_artist) => _artist.name).join(', ')
    const isPlaying = nowPlayingData.is_playing
    const songUrl = song.external_urls.spotify
    const title = song.name

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    }
  } catch (error) {
    console.error('Error fetching now playing item:', error)
    return {
      isPlaying: false,
      albumImageUrl: '',
      artist: '',
      songUrl: '',
      title: '',
    }
  }
}
