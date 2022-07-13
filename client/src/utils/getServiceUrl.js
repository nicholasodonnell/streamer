import { always, cond, T } from 'ramda'

import isDev from './isDev'

export default cond([
  [ isDev, always(`//localhost:${process.env.WEB_PORT}`) ],
  [ T, always('') ],
])
