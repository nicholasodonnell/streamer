import cn from 'classnames'
import { compose } from 'ramda'
import React from 'react'

import handleVideoError from '../actions/thunks/handleVideoError'
import Loader from '../components/loader'
import Video from '../components/video'
import { withState } from '../state'
import classNames from '../styles/player.scss'

export default ({
  className,
}) => {
  const [ { loading, online }, dispatch ] = withState()

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
      {!loading && online
        && (
          <Video
            className={classNames.player__video}
            onError={compose(dispatch, handleVideoError)}
          />
        )}
    </section>
  )
}
