import setNotifications from '../setNotifications'

export default id => async (dispatch, getState) => {
  const { notifications } = getState()

  dispatch(setNotifications(
    notifications.map(notification => ({
      ...notification,
      active: notification.id === id ? false : notification.active,
    }))
  ))
}
