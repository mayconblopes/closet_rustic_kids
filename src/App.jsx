import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import { Routes, Route } from 'react-router-dom'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils'
import setCurrentUser from './store/user/user.action'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user)
      dispatch(setCurrentUser(user))
    })

    return unsubscribe
  }, [])

  return (
    <Routes>
      {/* The Route component is used to specify a match between a location's URL and some UI to render. */}
      <Route path='/' element={<Navigation />}>
        {/* Here we are setting the index page to render the Home component when the URL path is '/'. */}
        <Route index element={<Home />}></Route>
        <Route path='shop/*' element={<Shop />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
        <Route path='checkout' element={<Checkout />}></Route>
      </Route>
    </Routes>
  )
}

export default App
