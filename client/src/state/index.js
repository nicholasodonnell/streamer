import { always, compose } from 'ramda'
import React, { createContext, useContext } from 'react'
import { useThunkReducer } from 'react-hook-thunk-reducer'

import initialState from './initialState'
import reducer from './reducer'

export const StateContext = createContext()

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useThunkReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const withState = compose(useContext, always(StateContext))
