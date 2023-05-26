import { InputHTMLAttributes } from 'react'
import { InputMediumContainer, InputSmallContainer } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'small' | 'medium'
}

export function InputCounter({ inputSize = 'medium', ...props }: InputProps) {
  const Container =
    inputSize === 'medium' ? InputMediumContainer : InputSmallContainer
  return (
    <Container>
      <Minus size={14} weight="bold" />

      <input type="text" readOnly={true} {...props} />

      <Plus size={14} weight="bold" />
    </Container>
  )
}
