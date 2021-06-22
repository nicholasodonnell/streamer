import { always, cond, T } from 'ramda'

import isDev from './isDev'

export default cond([
  [ isDev, always(SERVICE_URL) ],
  [ T, always('') ],
])
