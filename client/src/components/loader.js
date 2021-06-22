import cn from 'classnames'
import React from 'react'

import classNames from '../styles/loader.scss'

export default ({
  className,
}) => (
  <div className={cn(classNames.loader, className)}>
    <div className={classNames.loader__bounce1} />
    <div className={classNames.loader__bounce2} />
  </div>
)
