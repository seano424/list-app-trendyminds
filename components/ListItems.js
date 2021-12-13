import { useContext } from 'react'
import { ListContext } from '../context/listContext'
import ListItem from './ListItem'

function ListItems() {
  const { state } = useContext(ListContext)
  const listOne = state.list.filter((item) => item?.list === 1)
  const listTwo = state.list.filter((item) => item?.list === 2)

  return (
    <section className="grid sm:grid-cols-2 gap-10 mt-10">
      {listOne && (
        <div>
          <h4 className="mb-4 font-semibold">List One</h4>
          {listOne.map((item) => (
            <ListItem listOne={true} key={item.id} item={item} />
          ))}
        </div>
      )}
      {listTwo && (
        <div>
          <h4 className="mb-4 font-semibold">List Two</h4>
          {listTwo.map((item) => (
            <ListItem listOne={false} key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ListItems
