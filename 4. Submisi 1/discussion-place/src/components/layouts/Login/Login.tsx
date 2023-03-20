import React from 'react'
import styled from '@emotion/styled'

const LoginWrapper = styled.section({
  backgroundColor: 'red',
  display: 'grid',
  gridTemplateAreas: `
  'text'
  'try'
  'form'
 `,
  '.text': {
    backgroundColor: 'steelblue',
    gridArea: 'text'
  },
  '.try': {
    backgroundColor: 'salmon',
    gridArea: 'try'
  },
  '.form': {
    backgroundColor: 'seagreen',
    gridArea: 'form'
  },
  '@media (min-width: 1000px)': {
    gridTemplateAreas: `
    'text try'
    'text form'
   `
  }
})

const Login = (): JSX.Element => {
  return (
        <LoginWrapper aria-labelledby='login-page'>
            <div className='text'>
                Text Place
            </div>
            <div className='try'>
                Try it button
            </div>
            <div className='form'>
                Login form
            </div>
        </LoginWrapper>
  )
}

export default Login
