import { either, pathEq } from 'ramda'

import fetchStreamState from '../../api/fetchStreamState'
import setLoading from '../setLoading'
import setOnline from '../setOnline'
import addNotification from './addNotification'

const isStreamOnline = either(
  pathEq([ 'repeat_to_local_nginx', 'type' ], 'connected'),
  pathEq([ 'repeat_to_optional_output', 'type' ], 'connected'),
)

export default () => async dispatch => {
  dispatch(setLoading(true))

  try {
    const streamState = await fetchStreamState()

    dispatch(setOnline(
      isStreamOnline(streamState)
    ))
  } catch ({ message }) {
    dispatch(addNotification(message))
    dispatch(setOnline(false))
  }

  dispatch(setLoading(false))
}
