import { React, createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const context = { currentUser, setCurrentUser }

  useEffect(() => {
    onAuthStateChangedListener()
  }, [])

  return (
    <UserContext.Provider value={context}>
      {children}
    </UserContext.Provider>)
}
