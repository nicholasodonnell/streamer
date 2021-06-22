import { v4 as uuidv4 } from 'uuid'

import setNotifications from '../setNotifications'

export default message => async (dispatch, getState) => {
  dispatch(setNotifications([
    ...getState().notifications,
    {
      active: true,
      id: uuidv4(),
      message,
    },
  ]))
}
