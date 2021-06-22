import cn from 'classnames'
import React from 'react'

import classNames from '../styles/footer.scss'

export default ({ children, className }) => (
  <footer className={cn(classNames.footer, className)}>
    {children}
  </footer>
)
