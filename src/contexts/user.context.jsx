import { React, createContext, useState, useEffect } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
  setCurrentUser: () => null,
})

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const context = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user)
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}
