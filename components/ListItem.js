import { useContext } from 'react'
import { ACTIONS, ListContext } from '../context/listContext'

import {
  XIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from '@heroicons/react/solid'

function ListItem({ item, listOne }) {
  const { dispatch } = useContext(ListContext)

  // Delete from the list...
  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: id })
  }

  // Update the side of the list item...
  const handleMove = (id) => {
    dispatch({ type: ACTIONS.UPDATE, payload: id })
  }
  return (
    <div
      key={item.id}
      className="flex bg-gray-100 mb-4 rounded px-2 py-2 items-center justify-between font-medium"
    >
      <p>{item.text}</p>
      <div className="flex gap-2">
        <XIcon
          onClick={() => handleDelete(item.id)}
          className="h-8 cursor-pointer rounded bg-red-300 text-red-600 p-2"
        />

        {/* For the First List */}
        {listOne && (
          <>
            <ArrowRightIcon
              onClick={() => handleMove(item.id)}
              className="h-8 cursor-pointer rounded hidden sm:inline-flex bg-gray-200 p-2"
            />

            <ArrowDownIcon
              onClick={() => handleMove(item.id)}
              className="h-8 cursor-pointer rounded sm:hidden bg-gray-200 p-2"
            />
          </>
        )}

        {/* For the Second List */}
        {!listOne && (
          <>
            <ArrowLeftIcon
              onClick={() => handleMove(item.id)}
              className="h-8 cursor-pointer rounded hidden sm:inline-flex bg-gray-200 p-2"
            />
            <ArrowUpIcon
              onClick={() => handleMove(item.id)}
              className="h-8 cursor-pointer rounded sm:hidden bg-gray-200 p-2"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default ListItem
