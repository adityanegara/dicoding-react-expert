import React from 'react'
import styled from '@emotion/styled'
import Input from '../../atoms/Input'

const FormWrapper = styled.form(({ theme }) => ({
  borderRadius: '10px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: '17px',
  padding: '25px 15px 25px 15px',
  marginBottom: '10vh',
  boxShadow: 'rgba(0, 0, 0, 0.4) 0px 5px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
  p: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '0.75em',
    color: theme.colors.neutral.grayishBlue,
    a: {
      cursor: 'pointer',
      color: theme.colors.primary.red,
      transition: 'ease-in 0.2s'
    },
    'a:hover': {
      color: '#dc0000'
    }
  }
}))

const LoginForm = (): JSX.Element => {
  return (
    <FormWrapper>
      <Input type='text' placeHolder='First Name'/>
      <Input type='text' placeHolder='Last Name'/>
      <Input type='email' placeHolder='Email Address'/>
      <Input type='password' placeHolder='Password'/>
      <button type="submit">CLAIM YOUR FREE TRIAL</button>
      <p>
        By clicking the button. you are agreeing to our{' '}
        <a>Terms and Services</a>
      </p>
    </FormWrapper>
  )
}

export default LoginForm
