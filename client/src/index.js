import React from 'react'
import ReactDom from 'react-dom'

import App from './app'
import { StateProvider } from './state'

ReactDom.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
