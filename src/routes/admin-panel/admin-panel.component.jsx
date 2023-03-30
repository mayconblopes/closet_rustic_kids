import React, { Fragment, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'
import CreatorComponent from './crud-components/creator-component'
import ReaderComponent from './crud-components/reader-component'

export default function AdminPanel() {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  if (userContext.currentUser) {
    return (
      <Fragment>
        <h1>Admin Panel</h1>
        <CreatorComponent />
        <hr />
        <ReaderComponent/>
      </Fragment>
    )
  }
}
