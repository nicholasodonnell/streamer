import cn from 'classnames'
import React from 'react'

import classNames from '../styles/header.scss'

export default ({ children, className }) => (
  <header className={cn(classNames.header, className)}>
    {children}
  </header>
)
