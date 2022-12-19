import React from 'react'

import { IButtonProps } from './Button.types'
import './Button.css'

const Button = (props: IButtonProps): JSX.Element => {
  const { label, ...buttonProps } = props
  return <button {...buttonProps}>{label}</button>
}

export default Button
