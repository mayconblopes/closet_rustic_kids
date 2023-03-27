/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useState } from 'react'
import {
  signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'


import './sign-in-form.styles.scss'
import { useNavigate } from 'react-router-dom'

const defaultFormFields = {
  email: '',
  password: '',
}

function SignInForm() {
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields)

  function handleChange(event) {
    setFormFields({ ...formFields, [event.target.name]: event.target.value })
  }

  // function resetFormFields() {
  //   setFormFields(defaultFormFields)
  // }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      await signInUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      )
      navigate('/admin')

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
      <h2>Painel do Administrador</h2>
      <span>Insira email e senha</span>
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
          {/* <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button> */}
        </div>
      </form>
    </div>
  )
}

export default SignInForm
