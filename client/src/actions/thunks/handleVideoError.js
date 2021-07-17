import setOnline from '../setOnline'
import addNotification from './addNotification'

export default error => async dispatch => {
  dispatch(setOnline(false))
  dispatch(addNotification(error))
}
