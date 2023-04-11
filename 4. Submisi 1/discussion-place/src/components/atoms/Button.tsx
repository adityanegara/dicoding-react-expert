import React, { type CSSProperties } from 'react'
import styled from '@emotion/styled'
import { type Theme } from '../../model/ITheme'
import theme from '../../theme/styledTheme'

interface ButtonProps {
  children: JSX.Element | string
  additionalStyles?: CSSProperties
}

interface ButtonWrapperProps {
  theme: Theme
  additionalStyles?: CSSProperties
}

const ButtonWrapper = styled.button<ButtonWrapperProps>(({ theme, additionalStyles }) => ({
  cursor: 'pointer',
  paddingTop: '15px',
  paddingBottom: '15px',
  borderRadius: '10px',
  backgroundColor: theme.colors.accent.blue,
  border: 'none',
  boxShadow: 'rgba(0, 0, 0, 0.4) 0px 5px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
  width: '100%',
  height: '100%',
  transition: 'ease-in 0.2s',
  '&:hover': {
    backgroundColor: '#4c4484'
  },
  ...additionalStyles
}))

const Button = ({ children, additionalStyles }: ButtonProps): JSX.Element => {
  return <ButtonWrapper theme={theme} additionalStyles={additionalStyles}>{children}</ButtonWrapper>
}

export default Button
