import React from 'react'
import { IButtonProps } from './Button.types'

const Button = (props: IButtonProps): JSX.Element => {
  const { label, ...buttonProps } = props
  return <button {...buttonProps}>{label}</button>
}

export default Button
