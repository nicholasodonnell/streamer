import cn from 'classnames'
import React from 'react'

import classNames from '../styles/main.scss'

export default ({ children, className }) => (
  <main className={cn(classNames.main, className)}>
    {children}
  </main>
)
