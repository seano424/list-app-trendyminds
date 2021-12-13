import { useContext } from 'react'
import { ListContext } from '../context/listContext'
import Head from 'next/head'
import ListItems from '../components/ListItems'
import ListForm from '../components/ListForm'

export default function Home() {
  const { state } = useContext(ListContext)

  return (
    <div className="min-h-screen flex flex-col p-10 lg:px-40 xl:px-80">
      <Head>
        <title>List App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <h1 className="text-3xl font-bold">List App</h1>
        <p className="pb-4">
          Total Items: <span>{state.list.length}</span>
        </p>
        <ListForm />
        <ListItems />
      </main>
    </div>
  )
}
