/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'

import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields)

  function handleChange(event) {
    setFormFields({ ...formFields, [event.target.name]: event.target.value })
  }

  function resetFormFields(){
    setFormFields(defaultFormFields)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (formFields.password !== formFields.confirmPassword) {
      window.alert('Password not matching')
      return
    } else {
      try {
        const response = await createAuthUserWithEmailAndPassword(
          formFields.email,
          formFields.password
        )

        await createUserDocumentFromAuth(response.user, {
          displayName: formFields.displayName,
        })
        resetFormFields()

      } catch (error) {
        alert(error.code)
        console.log('error while creating user', error)
      }
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={formFields.displayName}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={formFields.confirmPassword}
        />

        <Button>Sign up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
