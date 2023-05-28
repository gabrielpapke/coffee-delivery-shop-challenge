import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

export function Input({
  required,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputContainer className={!required ? 'isOptional' : ''}>
      <input type="text" required={required} {...props} />

      <small>{!required && <>Opcional</>}</small>
    </InputContainer>
  )
}
