import { InputHTMLAttributes } from 'react'
import { InputMediumContainer, InputSmallContainer } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'small' | 'medium'
  onClickLess: () => void
  onClickMore: () => void
}

export function InputCounter({
  inputSize = 'medium',
  onClickLess,
  onClickMore,
  ...props
}: InputProps) {
  const Container =
    inputSize === 'medium' ? InputMediumContainer : InputSmallContainer
  return (
    <Container>
      <Minus size={14} weight="bold" onClick={onClickLess} />

      <input type="text" readOnly={true} {...props} />

      <Plus size={14} weight="bold" onClick={onClickMore} />
    </Container>
  )
}
