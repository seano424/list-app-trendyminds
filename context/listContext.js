import React, { useReducer, createContext, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const ListContext = createContext()

export const ACTIONS = {
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
}

const initialState = {
  list: [
    { id: uuidv4(), text: 'Woah, another item', list: 1 },
    { id: uuidv4(), text: 'Surprise item!', list: 1 },
    { id: uuidv4(), text: 'This is another item', list: 2 },
    { id: uuidv4(), text: 'This is an item', list: 2 },
  ],
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        list: [...state.list, action.payload],
      }
    case ACTIONS.DELETE:
      const newItems = state.list.filter((item) => item.id !== action.payload)
      return {
        list: newItems,
      }
    case ACTIONS.UPDATE:
      const updatedItems = state.list.map((item) => {
        if (item.id === action.payload) {
          const list = item.list === 1 ? 2 : 1
          return { ...item, list }
        }
        return item
      })
      return {
        list: updatedItems,
      }
    default:
      return state
  }
}

export const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])
  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  )
}
