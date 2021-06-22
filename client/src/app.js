import React, { useEffect } from 'react'

import init from './actions/thunks/init'
import Notifications from './containers/notifications'
import Home from './screens/home'
import { withState } from './state'
import classNames from './styles/app.scss'

export default () => {
  const [ , dispatch ] = withState()

  useEffect(() => {
    dispatch(init())
  }, [])

  return (
    <div className={classNames.app}>
      <Home />
      <Notifications />
    </div>
  )
}
