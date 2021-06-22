/* eslint-disable jsx-a11y/media-has-caption */

import 'video.js/dist/video-js.css'
import '@videojs/themes/dist/city/index.css'
import '../styles/video.scss'

import cn from 'classnames'
import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'

import getServiceUrl from '../utils/getServiceUrl'

const videoJsOptions = {
  aspectRatio: '16:9',
  autoplay: true,
  controls: true,
  fluid: true,
  liveui: true,
  sources: [
    {
      src: `${getServiceUrl()}/restreamer/hls/live.stream.m3u8`,
      type: 'application/x-mpegURL',
    },
  ],
}

export default ({
  className,
}) => {
  const videoRef = useRef(null)

  useEffect(() => {
    videojs(videoRef.current, videoJsOptions)
  }, [ videoRef ])

  return (
    <div data-vjs-player>
      <video
        className={cn('video-js', 'vjs-big-play-centered', 'vjs-theme-city', className)}
        ref={videoRef}
      />
    </div>
  )
}
