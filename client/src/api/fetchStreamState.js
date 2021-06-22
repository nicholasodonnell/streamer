import axios from 'axios'
import { prop } from 'ramda'

import getServiceUrl from '../utils/getServiceUrl'

export default () =>
  axios({
    method: 'GET',
    url: `${getServiceUrl()}/restreamer/v1/states`,
  })
    .then(prop('data'))
    .catch(e => {
      console.error(e)

      throw new Error('Failed to fetch stream state')
    })
