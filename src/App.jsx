import React from 'react'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import { Routes, Route } from 'react-router-dom'
import SignIn from './routes/sign-in/sign-in.component'

function App() {
  return (
    <Routes>
      {/* The Route component is used to specify a match between a location's URL and some UI to render. */}
      <Route path='/' element={<Navigation />}>
        {/* Here we are setting the index page to render the Home component when the URL path is '/'. */}
        <Route index element={<Home />}></Route>
        <Route path='shop' element={<h1>Shop</h1>}></Route>
        <Route path='sign-in' element={<SignIn />}></Route>
      </Route>
    </Routes>
  )
}

export default App
