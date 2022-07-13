import 'video.js/dist/video-js.css'
import '../styles/video.scss'

import cn from 'classnames'
import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'

import getServiceUrl from '../utils/getServiceUrl'

const videoJsOptions = {
  autoplay: 'any',
  controls: true,
  fluid: false,
  liveui: false,
  responsive: true,
  poster: '',
  sources: [
    {
      src: `${getServiceUrl()}/admin/hls/live.stream.m3u8`,
      type: 'application/x-mpegURL',
    },
  ],
}

export default ({
  className,
  onError,
}) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const player = videojs(videoRef.current, videoJsOptions)

    player.on('error', () => onError(player.error().message))
    player.on('ready', () => {
      player.play()
      player.muted(false)
    })
  }, [ onError ])

  return (
    <div data-vjs-player>
      <video
        className={cn('video-js', 'vjs-big-play-centered', className)}
        ref={videoRef}
      />
    </div>
  )
}
