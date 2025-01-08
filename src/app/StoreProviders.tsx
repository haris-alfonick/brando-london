'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store, AppStore } from '../lib/store'
import { addUser } from '@/lib/slice'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store()

    //add initial state
    // storeRef.current.dispatch(addUser('testUser'))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}