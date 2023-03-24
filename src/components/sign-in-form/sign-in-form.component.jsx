/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useState } from 'react'
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'


import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields)

  function handleChange(event) {
    setFormFields({ ...formFields, [event.target.name]: event.target.value })
  }

  function resetFormFields() {
    setFormFields(defaultFormFields)
  }

  async function signInWithGoogle() {
    await signInWithGooglePopup()
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      await signInUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      )

      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('User not found')
          break
        case 'auth/wrong-password':
          alert('Wrong password')
          break
        default:
          console.log(error)
      }
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={formFields.email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={formFields.password}
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
