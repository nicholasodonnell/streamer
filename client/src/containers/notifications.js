import React, { useCallback } from 'react'

import dismissNotification from '../actions/thunks/dismissNotification'
import Notification from '../components/notification'
import { withState } from '../state'
import classNames from '../styles/notifications.scss'

export default () => {
  const [ { notifications }, dispatch ] = withState()

  const handleNotificationDismiss = useCallback(id => {
    dispatch(dismissNotification(id))
  }, [])

  return (
    <div className={classNames.notifications}>
      {notifications.map(({ active, id, message }) =>
        active && (
          <Notification
            className={classNames.notifications__notification}
            key={id}
            onDismiss={() => handleNotificationDismiss(id)}
          >
            {message}
          </Notification>
        ))}
    </div>
  )
}
