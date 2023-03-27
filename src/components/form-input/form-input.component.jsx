import { React } from 'react'
import './form-input.styles'
import {
  FormInputLabelStyle,
  GroupStyle,
  InputStyle,
} from './form-input.styles'

export default function FormInput({ label, ...otherProps }) {
  return (
    <GroupStyle>
      <InputStyle {...otherProps} />

      {label && (
        <FormInputLabelStyle shrink={otherProps.value?.length}>
          {label}
        </FormInputLabelStyle>
      )}
    </GroupStyle>
  )
}
