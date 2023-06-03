import { IconContainer } from './styles'
import { Icon, IconProps } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { ThemeType } from '../../@types/styled'

interface IconCircleInterface extends IconProps {
  Icon: Icon
  iconBackgroundColor: keyof ThemeType
}

export function IconCircle({
  Icon,
  iconBackgroundColor,
  weight = 'fill',
  size = 18,
  color,
  children,
  ...props
}: IconCircleInterface) {
  const theme = useTheme()

  return (
    <IconContainer>
      <i
        style={{
          backgroundColor: theme?.[iconBackgroundColor],
        }}
      >
        <Icon
          weight={weight}
          size={size}
          color={theme?.white || color}
          {...props}
        />
      </i>
      {children}
    </IconContainer>
  )
}
