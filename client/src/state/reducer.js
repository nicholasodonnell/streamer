import {
  always,
  compose,
  cond,
  mergeDeepRight,
  objOf,
  prop,
  propEq,
  T,
  tap,
  uncurryN,
} from 'ramda'

import * as ACTIONS from '../actions/types'
import isDev from '../utils/isDev'

const isAction = propEq('type')

const setState = uncurryN(3, (key, state) =>
  compose(
    tap(newState => isDev() && (
      console.log('new state', newState),
      console.groupEnd()
    )),
    mergeDeepRight(state),
    objOf(key),
    prop('payload'),
    tap(action => isDev() && (
      console.group(action.type),
      console.log('old state', state),
      console.log('payload', action.payload)
    )),
  )
)

const setNotifications = setState('notifications')
const setLoading = setState('loading')
const setOnline = setState('online')

export default uncurryN(2, state =>
  cond([
    [ isAction(ACTIONS.SET_LOADING), setLoading(state) ],
    [ isAction(ACTIONS.SET_NOTIFICATIONS), setNotifications(state) ],
    [ isAction(ACTIONS.SET_ONLINE), setOnline(state) ],
    [ T, always(state) ],
  ])
)
