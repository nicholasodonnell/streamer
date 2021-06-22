import { compose, mergeDeepRight, values } from 'ramda'

import setNotifications from '../setNotifications'

const mergeDeepValues = compose(values, mergeDeepRight)

export default id => async (dispatch, getState) => {
  dispatch(setNotifications(
    mergeDeepValues(
      getState().notifications,
      [
        {
          active: false,
          id,
        },
      ],
    )
  ))
}
