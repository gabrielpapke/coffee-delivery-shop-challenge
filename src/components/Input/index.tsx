import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'
import { useFormContext } from 'react-hook-form'

export function Input({
  name = '',
  required,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const { register } = useFormContext()
  return (
    <InputContainer className={!required ? 'isOptional' : ''}>
      <input
        {...register(name, {
          required,
        })}
        {...props}
      />

      <small>{!required && <>Opcional</>}</small>
    </InputContainer>
  )
}
