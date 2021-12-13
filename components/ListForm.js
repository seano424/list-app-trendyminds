import { useContext, useState } from 'react'
import { ACTIONS, ListContext } from '../context/listContext'
import { v4 as uuidv4 } from 'uuid'

function ListForm() {
  const [value, setValue] = useState('')
  const { dispatch } = useContext(ListContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = { id: uuidv4(), text: value, list: 1 }
    dispatch({ type: ACTIONS.ADD, payload: newItem })
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        placeholder="Enter some text!!"
        className="bg-gray-100 py-2 focus:outline-none pl-4 flex-1 rounded"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-black text-white px-7 py-2 rounded" type="submit">
        Submit
      </button>
    </form>
  )
}

export default ListForm
