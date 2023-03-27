import React, { Fragment, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'
import CreateComponent from './crud-components/create-component'

export default function AdminPanel() {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  if (userContext.currentUser) {
    return (
      <Fragment>
        <h1>Admin Panel</h1>
        <CreateComponent />
      </Fragment>
    )
  } else {
    useEffect(() => navigate('/auth'), [])
  }
}
