import React from 'react'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import Button from '../../components/button/button.component'

function SignIn() {

  async function logGoogleUser() {
    const response = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(response.user)
    console.log(response, '----response----')
    console.log(userDocRef, '----userDocRef----')
  }

  
  return (
    <div>
      <h1>Sign In</h1>
      <Button onClick={logGoogleUser}>Sign in with Google PopUp</Button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
