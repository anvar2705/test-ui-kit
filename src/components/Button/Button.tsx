import React from 'react'

import { IButtonProps } from './Button.types'
import s from './Button.module.css'

const Button = (props: IButtonProps): JSX.Element => {
  const { label, ...buttonProps } = props
  return (
    <button {...buttonProps} className={s.root}>
      {label}
    </button>
  )
}

export default Button
