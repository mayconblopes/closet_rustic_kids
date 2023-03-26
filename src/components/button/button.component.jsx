import React from 'react'
import './button.styles.jsx'
import {
  BaseButtonStyle,
  GoogleSignInButtonStyle,
  InvertedButtonStyle,
} from './button.styles.jsx'

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

function getButton(buttonType = BUTTON_TYPE_CLASSES.base) {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButtonStyle,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButtonStyle,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButtonStyle,
  }[buttonType]
}

export default function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType)
  return <CustomButton {...otherProps}>{children}</CustomButton>
}
