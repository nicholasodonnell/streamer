import cn from 'classnames'
import React from 'react'

import classNames from '../styles/notification.scss'

export default ({
  children,
  className,
  onDismiss,
}) => (
  <div
    className={cn(classNames.notification, className)}
    onAnimationEnd={onDismiss}
  >
    <span className={classNames.notification__message}>
      {children}
    </span>
  </div>
)
