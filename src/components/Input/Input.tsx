import React, { InputHTMLAttributes } from 'react'
import s from './Input.scss'

const Input = (props: Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>): JSX.Element => {
  return <input className={s.input} {...props} />
}

export default Input
