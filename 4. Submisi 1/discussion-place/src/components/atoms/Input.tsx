import React, { type HTMLInputTypeAttribute } from 'react'
import styled from '@emotion/styled'

interface InputProps {
  type: HTMLInputTypeAttribute
  placeHolder: string
}

const InputWrapper = styled.input(({ theme }) => ({
  fontWeight: '600',
  borderRadius: '5px',
  fontFamily: theme.fonts.mainFont,
  padding: '5px 7px',
  border: `1px solid ${theme.colors.neutral.grayishBlue}`,
  color: theme.colors.neutral.darkBlue,
  outline: 'none',
  transition: 'ease-in 0.2s',
  '&:focus': {
    backgroundColor: theme.colors.neutral.gray
  },
  '&::placeholder': {
    color: theme.colors.neutral.darkBlue
  },
  'input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active': {
    '-webkit-box-shadow': '0 0 0 30px white inset !important'
  }
}))

const Input = ({ type, placeHolder }: InputProps): JSX.Element => {
  return <InputWrapper type={type} placeholder={placeHolder}/>
}

export default Input
