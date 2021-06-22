import cn from 'classnames'
import React from 'react'

import Loader from '../components/loader'
import Video from '../components/video'
import { withState } from '../state'
import classNames from '../styles/player.scss'

export default ({
  className,
}) => {
  const [ { loading, online } ] = withState()

  return (
    <section className={cn(
      classNames.player,
      className,
      {
        [classNames['player--loading']]: loading,
        [classNames['player--offline']]: !loading && !online,
      }
    )}
    >
      {loading && <Loader className={classNames.player__loader} />}
      {!loading && !online && <h3 className={classNames.player__offline}>Offline</h3>}
      {!loading && online && <Video className={classNames.player__video} />}
    </section>
  )
}
