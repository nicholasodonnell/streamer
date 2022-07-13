import setNotifications from '../setNotifications'

export default message => async (dispatch, getState) => {
  const { notifications } = getState()
  const notification = {
    active: true,
    id: Date.now(),
    message,
  }

  dispatch(setNotifications([ ...notifications, notification ]))
}
