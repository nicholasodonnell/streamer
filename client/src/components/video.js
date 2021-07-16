/* eslint-disable jsx-a11y/media-has-caption */

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
  poster: '',
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
        className={cn('video-js', 'vjs-big-play-centered', className)}
        ref={videoRef}
      />
    </div>
  )
}
